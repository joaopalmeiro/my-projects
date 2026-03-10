import { createServerFn } from "@tanstack/react-start";
import { startOfWeek } from "date-fns";

import { USER_AGENT } from "./constants";
import { ghIssuesSchema, ghRepoSchema } from "./schemas";
import type { ActiveRepo, ClosedIssues, Repo } from "./types";

export const getActiveRepos = createServerFn({ method: "GET" }).handler(
  async (): Promise<ActiveRepo[]> => {
    const response = await fetch(
      "https://api.github.com/repos/joaopalmeiro/joaopalmeiro/contents/data.json",
      {
        headers: {
          Accept: "application/vnd.github.raw+json",
          Authorization: `Bearer ${process.env.GH_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": USER_AGENT,
        },
      },
    );

    return response.json();
  },
);

export const getRepos = createServerFn({ method: "GET" })
  .inputValidator((data: ActiveRepo[]) => data)
  .handler(async ({ data }): Promise<Repo[]> => {
    return Promise.all(
      data.map(async (activeRepo) => {
        const url = new URL(activeRepo.url);

        if (url.hostname === "github.com") {
          const apiUrl = new URL(
            `repos${url.pathname}`,
            "https://api.github.com/",
          );

          const response = await fetch(apiUrl, {
            headers: {
              Accept: "application/vnd.github+json",
              Authorization: `Bearer ${process.env.GH_TOKEN}`,
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
        }

        throw new Error(`Invalid repo URL: ${activeRepo.url}`);
      }),
    );
  });

export const getClosedIssues = createServerFn({ method: "GET" })
  .inputValidator((data: ActiveRepo[]) => data)
  .handler(async ({ data }): Promise<ClosedIssues> => {
    const activeRepoNames = new Set(data.map((activeRepo) => activeRepo.name));

    const weekStart = startOfWeek(new Date(), {
      weekStartsOn: 1,
    });

    const firstApiUrl = new URL("issues", "https://api.github.com/");
    firstApiUrl.searchParams.set("filter", "assigned");
    firstApiUrl.searchParams.set("state", "closed");
    firstApiUrl.searchParams.set("since", weekStart.toISOString());
    firstApiUrl.searchParams.set("per_page", "100");
    firstApiUrl.searchParams.set("page", "1");

    const firstResponse = await fetch(firstApiUrl, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GH_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": USER_AGENT,
      },
    });

    const firstPage = await firstResponse.json();

    // TODO
    // const linkHeader = firstResponse.headers.get("Link");

    const issues = ghIssuesSchema.parse(firstPage);
    const closedThisWeek = issues.filter(
      (issue) =>
        !issue.pull_request &&
        issue.closed_at >= weekStart &&
        activeRepoNames.has(issue.repository.name),
    );

    return { total: closedThisWeek.length };
  });
