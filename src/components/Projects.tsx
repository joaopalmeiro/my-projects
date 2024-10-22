import { Collapsible } from "@ark-ui/react/collapsible";
import { useQueries, useQuery } from "@tanstack/react-query";

import { projectsSchema, repoSchema } from "../schemas";
import { repo2api } from "../utils";
import { Issues } from "./Issues";

export function Projects() {
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8484/api/docs/${import.meta.env.VITE_DOC_ID}/tables/${import.meta.env.VITE_TABLE_ID}/records`,
        { headers: [["Authorization", `Bearer ${import.meta.env.VITE_GRIST_API_KEY}`]] },
      );

      const rawData = await response.json();
      return projectsSchema.parse(rawData);
    },
    select: (projects) => projects.records,
    retry: false,
  });

  const { data: repos } = useQueries({
    queries: projects
      ? projects.map((project) => {
          return {
            queryKey: ["project", project.id],
            queryFn: async () => {
              const repo = repo2api(project.fields.Repo);

              const response = await fetch(repo, {
                headers: [
                  ["Accept", "application/vnd.github+json"],
                  ["X-GitHub-Api-Version", "2022-11-28"],
                ],
              });

              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }

              const rawData = await response.json();
              return repoSchema.parse(rawData);
            },
          };
        })
      : [],
    combine: (results) => {
      return {
        data: results.flatMap((result) => (result.data ? [result.data] : [])),
      };
    },
  });

  return (
    <section>
      {repos.length > 0 && (
        <ul>
          {repos.map((repo) => {
            return (
              <li key={repo.id}>
                <Collapsible.Root lazyMount={true}>
                  <Collapsible.Trigger>{repo.name}</Collapsible.Trigger>
                  <Collapsible.Content>
                    <Issues url={repo.issues_url} />
                  </Collapsible.Content>
                </Collapsible.Root>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
