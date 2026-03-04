import { createServerFn } from "@tanstack/react-start";

import type { Repo } from "./types";

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

    return response.json();
  },
);
