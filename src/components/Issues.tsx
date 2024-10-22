import { useQuery } from "@tanstack/react-query";

import { issuesSchema } from "../schemas";
import { repo2api } from "../utils";

export function Issues() {
  const { data, error } = useQuery({
    queryKey: ["issues"],
    queryFn: async () => {
      const { issues } = repo2api("https://github.com/joaopalmeiro/my-projects");

      const response = await fetch(issues, {
        headers: [
          ["Accept", "application/vnd.github+json"],
          ["X-GitHub-Api-Version", "2022-11-28"],
        ],
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const rawData = await response.json();
      return issuesSchema.parse(rawData);
    },
    retry: false,
  });

  return (
    <div>
      {error?.message}
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
