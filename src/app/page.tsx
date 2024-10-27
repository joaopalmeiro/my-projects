import { parse } from "node:url";
import type { Projects } from "@/lib/schemas";
import { Collapsible } from "@ark-ui/react";
import { compareAsc, intlFormatDistance } from "date-fns";

import {
  BASE_CB_URL,
  BASE_GH_URL,
  BASE_GL_URL,
  CB_HOST,
  DEV_CACHE,
  GH_HOST,
  GL_HOST,
} from "@/lib/constants";
import {
  cbIssuesSchema,
  cbRepoSchema,
  ghIssuesSchema,
  ghRepoSchema,
  glIssuesSchema,
  glRepoSchema,
  projectsSchema,
} from "@/lib/schemas";

export default async function Home() {
  const response = await fetch(
    `http://localhost:8484/api/docs/${process.env.DOC_ID}/tables/${process.env.TABLE_ID}/records`,
    {
      headers: [["Authorization", `Bearer ${process.env.GRIST_API_KEY}`]],
      ...DEV_CACHE,
    },
  );

  const rawData = await response.json();
  const data = projectsSchema.parse(rawData);

  return (
    <>
      <header>
        <h1 className="font-semibold text-gray-950">My Projects</h1>
      </header>

      <main>
        <ProjectList data={data} />
      </main>
    </>
  );
}

interface ProjectListProps {
  data: Projects;
}

async function ProjectList(props: ProjectListProps) {
  const repos = await Promise.all(
    props.data.records.map(async (project) => {
      const parsedUrl = parse(project.fields.Repo);

      if (parsedUrl.hostname === GH_HOST && parsedUrl.pathname) {
        const apiUrl = new URL(`repos${parsedUrl.pathname}`, BASE_GH_URL);

        const response = await fetch(apiUrl, {
          headers: [
            ["Accept", "application/vnd.github+json"],
            ["Authorization", `Bearer ${process.env.GH_PAT}`],
            ["X-GitHub-Api-Version", "2022-11-28"],
          ],
          ...DEV_CACHE,
        });

        const rawData = await response.json();
        return ghRepoSchema.parse(rawData);
      }

      if (parsedUrl.hostname === GL_HOST && parsedUrl.pathname) {
        const projectId = encodeURIComponent(parsedUrl.pathname.slice(1));
        const apiUrl = new URL(`projects/${projectId}`, BASE_GL_URL);

        const response = await fetch(apiUrl, {
          headers: [["Authorization", `Bearer ${process.env.GL_PAT}`]],
          ...DEV_CACHE,
        });

        const rawData = await response.json();
        return glRepoSchema.parse(rawData);
      }

      if (parsedUrl.hostname === CB_HOST && parsedUrl.pathname) {
        const apiUrl = new URL(`repos${parsedUrl.pathname}`, BASE_CB_URL);

        const response = await fetch(apiUrl, {
          headers: [["Authorization", `token ${process.env.CB_PAT}`]],
          ...DEV_CACHE,
        });

        const rawData = await response.json();
        return cbRepoSchema.parse(rawData);
      }

      throw new Error(`Invalid repo URL: ${project.fields.Repo}`);
    }),
  );

  const today = new Date();
  const sortedRepos = repos.toSorted((a, b) => {
    return compareAsc(a.updatedAt, b.updatedAt);
  });

  return (
    <ul>
      {sortedRepos.map((repo) => {
        return (
          <li key={repo.id}>
            <Collapsible.Root>
              <h3>
                <Collapsible.Trigger>{repo.name}</Collapsible.Trigger>
              </h3>
              <time dateTime={repo.updatedAt.toISOString()}>
                {intlFormatDistance(repo.updatedAt, today, { locale: "en-GB" })}
              </time>
              <a href={repo.url} target="_blank" rel="noreferrer">
                Repo<span className="relative -left-0.5 -top-0.5 text-gray-400">⌝</span>
              </a>

              <Collapsible.Content>
                <Issues url={repo.issuesUrl} />
              </Collapsible.Content>
            </Collapsible.Root>
          </li>
        );
      })}
    </ul>
  );
}

interface Props {
  url: string;
}

async function fetchIssues(url: string) {
  if (url.startsWith(BASE_GH_URL)) {
    const response = await fetch(url, {
      headers: [
        ["Accept", "application/vnd.github+json"],
        ["Authorization", `Bearer ${process.env.GH_PAT}`],
        ["X-GitHub-Api-Version", "2022-11-28"],
      ],
      ...DEV_CACHE,
    });

    const rawData = await response.json();
    return ghIssuesSchema.parse(rawData);
  }

  if (url.startsWith(BASE_GL_URL)) {
    const response = await fetch(`${url}?state=opened`, {
      headers: [["Authorization", `Bearer ${process.env.GL_PAT}`]],
      ...DEV_CACHE,
    });

    const rawData = await response.json();
    return glIssuesSchema.parse(rawData);
  }

  if (url.startsWith(BASE_CB_URL)) {
    const response = await fetch(`${url}?state=open`, {
      headers: [["Authorization", `token ${process.env.CB_PAT}`]],
      ...DEV_CACHE,
    });

    const rawData = await response.json();
    return cbIssuesSchema.parse(rawData);
  }

  throw new Error(`Invalid issue API URL: ${url}`);
}

async function Issues(props: Props) {
  const issues = await fetchIssues(props.url);

  return (
    <ul>
      {issues.map((issue) => {
        return (
          <li key={issue.id}>
            <span className="font-mono">#{issue.number}</span>
            <a href={issue.url} target="_blank" rel="noreferrer">
              {issue.title}
              <span className="relative -left-0.5 -top-0.5 text-gray-400">⌝</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
