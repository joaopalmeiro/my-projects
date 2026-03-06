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
    <>
      <header>
        <h1>My Projects</h1>
      </header>

      <main>
        <dl>
          <dt>Projects</dt>
          <dd>{totalRepos}</dd>

          <dt>Open issues</dt>
          <dd>{totalOpenIssues}</dd>
        </dl>

        <table>
          <thead>
            <tr>
              <th scope="col" className="font-medium">
                Repo
              </th>
              <th scope="col" className="font-medium">
                Last updated
              </th>
              <th scope="col" className="font-medium">
                Open issues
              </th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => {
              return (
                <tr key={repo.id}>
                  <th scope="row" className="font-normal">
                    {repo.name}
                  </th>
                  <td>{repo.updatedAt.toISOString()}</td>
                  <td>{repo.openIssues}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}
