import { createFileRoute, redirect } from "@tanstack/react-router";
import { intlFormatDistance } from "date-fns";

import { authClient } from "~/utils/auth-client";
import { getSession } from "~/utils/auth.functions";
import { getActiveRepos, getClosedIssues, getRepos } from "~/utils/repos.functions";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const session = await getSession();

    if (!session) {
      throw redirect({ to: "/login" });
    }

    return { user: session.user };
  },
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://myprojects.joao.tools/",
      },
    ],
  }),
  loader: async () => {
    const activeRepos = await getActiveRepos();

    return Promise.all([getRepos({ data: activeRepos }), getClosedIssues({ data: activeRepos })]);
  },
  component: Home,
});

function Home() {
  const navigate = Route.useNavigate();
  const [repos, closedIssues] = Route.useLoaderData();

  const totalRepos = repos.length;
  const totalOpenIssues = repos.reduce((total, repo) => total + repo.openIssues, 0);
  const today = new Date();

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
        <h1 className="font-medium text-mist-900">My Projects</h1>

        <button
          type="button"
          onClick={handleLogout}
          className="-mx-2 -my-1 cursor-pointer px-2 py-1 text-mist-500 transition-transform duration-160 ease-out will-change-transform hover:bg-mist-900/5 hover:text-mist-700 focus-visible:text-mist-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-97"
        >
          Logout
        </button>
      </header>

      <main className="flex flex-col gap-4">
        <dl className="flex gap-2">
          <div className="flex gap-2 border border-mist-200 px-2 py-1">
            <dt className="text-mist-500">Projects</dt>
            <dd className="border-l border-mist-200 pl-2">{totalRepos}</dd>
          </div>

          <div className="flex gap-2 border border-mist-200 px-2 py-1">
            <dt className="text-mist-500">Open issues</dt>
            <dd className="border-l border-mist-200 pl-2">{totalOpenIssues}</dd>
          </div>

          <div className="flex gap-2 border border-mist-200 px-2 py-1">
            <dt className="text-mist-500">Issues closed this week</dt>
            <dd className="border-l border-mist-200 pl-2">{closedIssues.total}</dd>
          </div>

          <div className="flex gap-2 border border-mist-200 px-2 py-1">
            <dt className="text-mist-500">Today</dt>
            <dd className="border-l border-mist-200 pl-2">{closedIssues.today}</dd>
          </div>
        </dl>

        <table className="w-full border-separate border-spacing-0 overflow-hidden border border-mist-200">
          <thead className="bg-mist-50">
            <tr>
              <th scope="col" className="border-b border-mist-200 px-6 py-3 text-left font-medium">
                Repo
              </th>
              <th scope="col" className="border-b border-mist-200 px-6 py-3 text-left font-medium">
                Last updated
              </th>
              <th scope="col" className="border-b border-mist-200 px-6 py-3 text-right font-medium">
                Open issues
              </th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => {
              return (
                <tr key={repo.id}>
                  <th scope="row" className="px-6 py-4 text-left">
                    <a
                      href={repo.url}
                      className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      {repo.name}
                    </a>
                  </th>
                  <td className="px-6 py-4 text-left">
                    <time dateTime={repo.updatedAt.toISOString()}>
                      {intlFormatDistance(repo.updatedAt, today, {
                        locale: "en-US",
                      })}
                    </time>
                  </td>
                  <td className="px-6 py-4 text-right">{repo.openIssues}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}
