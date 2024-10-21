import { useQuery } from "@tanstack/react-query";

export function Projects() {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch("https://api.github.com/repos/joaopalmeiro/my-projects");
      return await response.json();
    },
  });

  return JSON.stringify(data, null, 2);
}
