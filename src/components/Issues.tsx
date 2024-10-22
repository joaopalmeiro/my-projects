import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const issueSchema = z.object({
  title: z.string(),
  html_url: z.string().url(),
  id: z.number().int(),
  number: z.number().int(),
});
const issuesSchema = z.array(issueSchema);

export function Issues() {
  const { data, error } = useQuery({
    queryKey: ["issues"],
    queryFn: async () => {
      const response = await fetch("https://api.github.com/repos/joaopalmeiro/my-projects/issues", {
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
