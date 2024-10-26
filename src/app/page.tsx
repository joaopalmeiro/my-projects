import { parse } from "node:url";
import type { Projects } from "@/lib/schemas";
import { Collapsible } from "@ark-ui/react";

import { BASE_GH_URL, BASE_GL_URL, GH_HOST, GL_HOST } from "@/lib/constants";
import { ghRepoSchema, glRepoSchema, issuesSchema, projectsSchema } from "@/lib/schemas";

export default async function Home() {
  const response = await fetch(
    `http://localhost:8484/api/docs/${process.env.DOC_ID}/tables/${process.env.TABLE_ID}/records`,
    {
      headers: [["Authorization", `Bearer ${process.env.GRIST_API_KEY}`]],
      cache: "no-store",
    },
  );

  const rawData = await response.json();
  const data = projectsSchema.parse(rawData);

  return (
    <>
      <header>
        <h1>My Projects</h1>
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
            ["X-GitHub-Api-Version", "2022-11-28"],
          ],
          cache: "no-store",
        });

        const rawData = await response.json();
        return ghRepoSchema.parse(rawData);
      }

      if (parsedUrl.hostname === GL_HOST && parsedUrl.pathname) {
        const projectId = encodeURIComponent(parsedUrl.pathname.slice(1));
        const apiUrl = new URL(`projects/${projectId}`, BASE_GL_URL);

        const response = await fetch(apiUrl, {
          headers: [["Authorization", `Bearer ${process.env.GL_PAT}`]],
          cache: "no-store",
        });

        const rawData = await response.json();
        return glRepoSchema.parse(rawData);
      }

      throw new Error(`Invalid repo URL: ${project.fields.Repo}`);
    }),
  );

  return (
    <ul>
      {repos.map((repo) => {
        return (
          <li key={repo.id}>
            <Collapsible.Root>
              <Collapsible.Trigger>{repo.name}</Collapsible.Trigger>
              <a href={repo.url} target="_blank" rel="noreferrer">
                Repo
              </a>

              <Collapsible.Content>
                {repo.issuesUrl}
                {/* <Issues url={repo.issues_url} /> */}
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

async function Issues(props: Props) {
  const response = await fetch(props.url, {
    headers: [
      ["Accept", "application/vnd.github+json"],
      ["X-GitHub-Api-Version", "2022-11-28"],
    ],
    cache: "no-store",
  });

  const rawData = await response.json();
  const data = issuesSchema.parse(rawData);

  return JSON.stringify(data, null, 2);
}
