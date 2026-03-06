import { createServerFn } from "@tanstack/react-start";

import { ghRepoSchema } from "./schemas";
import type { ActiveRepo, Repo } from "./types";

export const getRepos = createServerFn({ method: "GET" }).handler(
  async (): Promise<Repo[]> => {
    const response = await fetch(
      "https://api.github.com/repos/joaopalmeiro/joaopalmeiro/contents/data.json",
      {
        headers: {
          Accept: "application/vnd.github.raw+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );

    const activeRepos: ActiveRepo[] = await response.json();

    return Promise.all(
      activeRepos.map(async (activeRepo) => {
        const url = new URL(activeRepo.url);

        if (url.hostname === "github.com") {
          const apiUrl = new URL(
            `repos${url.pathname}`,
            "https://api.github.com/",
          );

          const response = await fetch(apiUrl, {
            headers: {
              Accept: "application/vnd.github+json",
              "X-GitHub-Api-Version": "2022-11-28",
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
  },
);
