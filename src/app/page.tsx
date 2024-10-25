import { issuesSchema, projectsSchema, repoSchema } from "@/lib/schemas";
import type { Projects } from "@/lib/schemas";
import { repo2api } from "@/lib/utils";
import { Collapsible } from "@ark-ui/react";

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
      const repo = repo2api(project.fields.Repo);

      const response = await fetch(repo, {
        headers: [
          ["Accept", "application/vnd.github+json"],
          ["X-GitHub-Api-Version", "2022-11-28"],
        ],
        cache: "no-store",
      });

      const rawData = await response.json();
      return repoSchema.parse(rawData);
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
                TODO
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
