import { createFileRoute } from "@tanstack/react-router";

import { getRepos } from "~/utils/repos.functions";

export const Route = createFileRoute("/")({
  loader: () => getRepos(),
  component: Home,
});

function Home() {
  const repos = Route.useLoaderData();

  return (
    <main>
      <h1>My Projects</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </main>
  );
}
