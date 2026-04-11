import { createServerFn } from "@tanstack/react-start";
import { env } from "cloudflare:workers";
import { startOfDay, startOfWeek } from "date-fns";

import { USER_AGENT, BASE_GH_API_URL, BASE_GL_API_URL } from "./constants";
import { ghIssuesSchema, ghRepoSchema, glRepoSchema } from "./schemas";
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

    const firstApiUrl = new URL("issues", BASE_GH_API_URL);
    firstApiUrl.searchParams.set("filter", "assigned");
    firstApiUrl.searchParams.set("state", "closed");
    firstApiUrl.searchParams.set("since", weekStart.toISOString());
    firstApiUrl.searchParams.set("per_page", "100");
    firstApiUrl.searchParams.set("page", "1");

    const firstResponse = await fetch(firstApiUrl, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${env.GH_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": USER_AGENT,
      },
    });

    const firstPage = await firstResponse.json();

    // TODO
    // const linkHeader = firstResponse.headers.get("Link");

    const issues = ghIssuesSchema.parse(firstPage);
    const closedThisWeek = issues.filter(
      (issue) => !issue.pull_request && issue.closed_at >= weekStart && activeRepoUrls.has(issue.repository.html_url),
    );
    const closedToday = closedThisWeek.filter((issue) => issue.closed_at >= dayStart);

    return { total: closedThisWeek.length, today: closedToday.length };
  });
