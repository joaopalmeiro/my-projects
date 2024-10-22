import { Collapsible } from "@ark-ui/react/collapsible";
import { useQuery } from "@tanstack/react-query";

import { projectSchema } from "../schemas";
import { repo2api } from "../utils";
import { Issues } from "./Issues";

export function Projects() {
  const { data, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { repo } = repo2api("https://github.com/joaopalmeiro/my-projects");

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
      return projectSchema.parse(rawData);
    },
    retry: false,
  });

  return (
    <div>
      {error?.message}

      <ul>
        <li>
          <Collapsible.Root lazyMount={true}>
            <Collapsible.Trigger>{data?.name}</Collapsible.Trigger>
            <Collapsible.Content>
              <Issues />
            </Collapsible.Content>
          </Collapsible.Root>
        </li>
      </ul>
    </div>
  );
}
