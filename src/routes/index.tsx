import { createFileRoute, redirect } from "@tanstack/react-router";

import { getSession } from "~/utils/auth.functions";
import {
  getActiveRepos,
  getClosedIssues,
  getRepos,
} from "~/utils/repos.functions";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const session = await getSession();

    if (!session) {
      throw redirect({ to: "/login" });
    }

    return { user: session.user };
  },
  loader: async () => {
    const activeRepos = await getActiveRepos();

    return Promise.all([
      getRepos({ data: activeRepos }),
      getClosedIssues({ data: activeRepos }),
    ]);
  },
  component: Home,
});

function Home() {
  const { user } = Route.useRouteContext();
  const [repos, closedIssues] = Route.useLoaderData();

  const totalRepos = repos.length;
  const totalOpenIssues = repos.reduce(
    (total, repo) => total + repo.openIssues,
    0,
  );

  return (
    <>
      <header>
        <h1>My Projects</h1>
        <p>{user}</p>
      </header>

      <main>
        <dl>
          <dt>Projects</dt>
          <dd>{totalRepos}</dd>

          <dt>Open issues</dt>
          <dd>{totalOpenIssues}</dd>

          <dt>Issues closed this week</dt>
          <dd>{closedIssues.total}</dd>
        </dl>

        <table className="w-full border border-mist-200 border-separate border-spacing-0 rounded-lg overflow-hidden shadow-xs">
          <thead className="bg-mist-50">
            <tr>
              <th
                scope="col"
                className="border-b border-mist-200 font-medium text-left px-6 py-3"
              >
                Repo
              </th>
              <th
                scope="col"
                className="border-b border-mist-200 font-medium text-left px-6 py-3"
              >
                Last updated
              </th>
              <th
                scope="col"
                className="border-b border-mist-200 font-medium text-right px-6 py-3"
              >
                Open issues
              </th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => {
              return (
                <tr key={repo.id}>
                  <th scope="row" className="text-left px-6 py-4">
                    <a href={repo.url}>{repo.name}</a>
                  </th>
                  <td className="text-left px-6 py-4">
                    {repo.updatedAt.toISOString()}
                  </td>
                  <td className="text-right px-6 py-4">{repo.openIssues}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}
