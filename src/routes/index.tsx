import { createFileRoute, redirect } from "@tanstack/react-router";

import { authClient } from "~/utils/auth-client";
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
  const navigate = Route.useNavigate();
  const [repos, closedIssues] = Route.useLoaderData();

  const totalRepos = repos.length;
  const totalOpenIssues = repos.reduce(
    (total, repo) => total + repo.openIssues,
    0,
  );

  async function handleLogout(): Promise<void> {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: "/login" });
        },
      },
    });
  }

  return (
    <>
      <header className="flex justify-between">
        <h1 className="font-medium">My Projects</h1>

        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="flex flex-col gap-4">
        <dl className="flex gap-2">
          <div className="rounded-md border-mist-200 border py-1 px-2 flex gap-2">
            <dt className="text-mist-500">Projects</dt>
            <dd className="border-l border-mist-200 pl-2 tabular-nums">
              {totalRepos}
            </dd>
          </div>

          <div className="rounded-md border-mist-200 border py-1 px-2 flex gap-2">
            <dt className="text-mist-500">Open issues</dt>
            <dd className="border-l border-mist-200 pl-2 tabular-nums">
              {totalOpenIssues}
            </dd>
          </div>

          <div className="rounded-md border-mist-200 border py-1 px-2 flex gap-2">
            <dt className="text-mist-500">Issues closed this week</dt>
            <dd className="border-l border-mist-200 pl-2 tabular-nums">
              {closedIssues.total}
            </dd>
          </div>
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
                className="border-b border-mist-200 font-medium text-right px-6 py-3 tabular-nums"
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
