import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const projectSchema = z.object({
  description: z.string(),
  html_url: z.string().url(),
  id: z.number().int(),
  name: z.string(),
  pushed_at: z.coerce.date(),
});

export function Projects() {
  const { data, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch("https://api.github.com/repos/joaopalmeiro/my-projects", {
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
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
