import { createServerFn } from "@tanstack/react-start";
import { env } from "cloudflare:workers";
import { startOfDay, startOfWeek } from "date-fns";

import { BASE_CB_API_URL, BASE_GH_API_URL, BASE_GL_API_URL, USER_AGENT } from "./constants";
import { cbIssuesSchema, cbRepoSchema, ghIssuesSchema, ghRepoSchema, glIssuesSchema, glRepoSchema } from "./schemas";
import type { ActiveRepo, ClosedIssues, Repo } from "./types";

export const getActiveRepos = createServerFn({ method: "GET" }).handler(async (): Promise<ActiveRepo[]> => {
  const apiUrl = new URL("repos/joaopalmeiro/joaopalmeiro/contents/data.json", BASE_GH_API_URL);

  const response = await fetch(apiUrl, {
    headers: {
      Accept: "application/vnd.github.raw+json",
      Authorization: `Bearer ${env.GH_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": USER_AGENT,
    },
  });

  return response.json();
});

export const getRepos = createServerFn({ method: "GET" })
  .inputValidator((data: ActiveRepo[]) => data)
  .handler(async ({ data }): Promise<Repo[]> => {
    return Promise.all(
      data.map(async (activeRepo) => {
        const url = new URL(activeRepo.url);

        if (url.hostname === "github.com") {
          const apiUrl = new URL(`repos${url.pathname}`, BASE_GH_API_URL);

          const response = await fetch(apiUrl, {
            headers: {
              Accept: "application/vnd.github+json",
              Authorization: `Bearer ${env.GH_TOKEN}`,
              "X-GitHub-Api-Version": "2022-11-28",
              "User-Agent": USER_AGENT,
            },
          });

          const rawData = await response.json();
          const parsedData = ghRepoSchema.parse(rawData);

          return {
            id: parsedData.id,
            name: activeRepo.name,
            openIssues: parsedData.open_issues_count,
            updatedAt: parsedData.pushed_at,
            url: activeRepo.url,
          };
        } else if (url.hostname === "gitlab.com") {
          const projectPath = encodeURIComponent(url.pathname.slice(1));
          const apiUrl = new URL(`projects/${projectPath}`, BASE_GL_API_URL);

          const response = await fetch(apiUrl, {
            headers: {
              Authorization: `Bearer ${env.GL_TOKEN}`,
              "User-Agent": USER_AGENT,
            },
          });

          const rawData = await response.json();
          const parsedData = glRepoSchema.parse(rawData);

          return {
            id: parsedData.id,
            name: activeRepo.name,
            openIssues: parsedData.open_issues_count,
            updatedAt: parsedData.last_activity_at,
            url: activeRepo.url,
          };
        } else if (url.hostname === "codeberg.org") {
          const apiUrl = new URL(`repos${url.pathname}`, BASE_CB_API_URL);

          const response = await fetch(apiUrl, {
            headers: {
              Authorization: `Bearer ${env.CB_TOKEN}`,
              "User-Agent": USER_AGENT,
            },
          });

          const rawData = await response.json();
          const parsedData = cbRepoSchema.parse(rawData);

          return {
            id: parsedData.id,
            name: activeRepo.name,
            openIssues: parsedData.open_issues_count,
            updatedAt: parsedData.updated_at,
            url: activeRepo.url,
          };
        }

        throw new Error(`Invalid repo URL: ${activeRepo.url}`);
      }),
    );
  });

export const getClosedIssues = createServerFn({ method: "GET" })
  .inputValidator((data: ActiveRepo[]) => data)
  .handler(async ({ data }): Promise<ClosedIssues> => {
    const activeRepoUrls = new Set(data.map((activeRepo) => activeRepo.url));

    const today = new Date();
    const weekStart = startOfWeek(today, {
      weekStartsOn: 1,
    });
    const dayStart = startOfDay(today);

    const firstGhApiUrl = new URL("issues", BASE_GH_API_URL);
    firstGhApiUrl.searchParams.set("filter", "assigned");
    firstGhApiUrl.searchParams.set("state", "closed");
    firstGhApiUrl.searchParams.set("since", weekStart.toISOString());
    firstGhApiUrl.searchParams.set("per_page", "100");
    firstGhApiUrl.searchParams.set("page", "1");

    const firstGlApiUrl = new URL("issues", BASE_GL_API_URL);
    firstGlApiUrl.searchParams.set("scope", "assigned_to_me");
    firstGlApiUrl.searchParams.set("state", "closed");
    firstGlApiUrl.searchParams.set("updated_after", weekStart.toISOString());
    firstGlApiUrl.searchParams.set("per_page", "100");
    firstGlApiUrl.searchParams.set("page", "1");

    const firstCbApiUrl = new URL("repos/issues/search", BASE_CB_API_URL);
    firstCbApiUrl.searchParams.set("type", "issues");
    firstCbApiUrl.searchParams.set("state", "closed");
    firstCbApiUrl.searchParams.set("assigned", "true");
    firstCbApiUrl.searchParams.set("since", weekStart.toISOString());
    firstCbApiUrl.searchParams.set("limit", "50");
    firstCbApiUrl.searchParams.set("page", "1");

    const [firstGhResponse, firstGlResponse, firstCbResponse] = await Promise.all([
      fetch(firstGhApiUrl, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${env.GH_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": USER_AGENT,
        },
      }),
      fetch(firstGlApiUrl, {
        headers: {
          Authorization: `Bearer ${env.GL_TOKEN}`,
          "User-Agent": USER_AGENT,
        },
      }),
      fetch(firstCbApiUrl, {
        headers: {
          Authorization: `Bearer ${env.CB_TOKEN}`,
          "User-Agent": USER_AGENT,
        },
      }),
    ]);

    const [firstGhPage, firstGlPage, firstCbPage] = await Promise.all([
      firstGhResponse.json(),
      firstGlResponse.json(),
      firstCbResponse.json(),
    ]);

    let total = 0;
    let todayCount = 0;

    for (const issue of ghIssuesSchema.parse(firstGhPage)) {
      if (!issue.pull_request && activeRepoUrls.has(issue.repository.html_url)) {
        if (issue.closed_at >= dayStart) {
          total++;
          todayCount++;
        } else if (issue.closed_at >= weekStart) {
          total++;
        }
      }
    }

    for (const issue of glIssuesSchema.parse(firstGlPage)) {
      if (activeRepoUrls.has(issue.web_url.split("/-/")[0])) {
        if (issue.closed_at >= dayStart) {
          total++;
          todayCount++;
        } else if (issue.closed_at >= weekStart) {
          total++;
        }
      }
    }

    for (const issue of cbIssuesSchema.parse(firstCbPage)) {
      if (activeRepoUrls.has(issue.html_url.split("/issues/")[0])) {
        if (issue.closed_at >= dayStart) {
          total++;
          todayCount++;
        } else if (issue.closed_at >= weekStart) {
          total++;
        }
      }
    }

    return { total, today: todayCount };
  });
