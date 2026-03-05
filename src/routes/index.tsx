import { createFileRoute } from "@tanstack/react-router";

import { getRepos } from "~/utils/repos.functions";

export const Route = createFileRoute("/")({
  loader: () => getRepos(),
  component: Home,
});

function Home() {
  const repos = Route.useLoaderData();

  const totalRepos = repos.length;
  const totalOpenIssues = repos.reduce(
    (total, repo) => total + repo.openIssues,
    0,
  );

  return (
    <main>
      <h1>My Projects</h1>

      <dl>
        <dt>Projects</dt>
        <dd>{totalRepos}</dd>

        <dt>Open issues</dt>
        <dd>{totalOpenIssues}</dd>
      </dl>

      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </main>
  );
}
