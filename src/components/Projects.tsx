import { useQuery } from "@tanstack/react-query";

export function Projects() {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch("https://api.github.com/repos/joaopalmeiro/my-projects", {
        headers: [
          ["Accept", "application/vnd.github+json"],
          ["X-GitHub-Api-Version", "2022-11-28"],
        ],
      });
      return await response.json();
    },
  });

  return JSON.stringify(data, null, 2);
}
