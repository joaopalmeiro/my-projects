import { createFileRoute, MatchRoute, redirect } from "@tanstack/react-router";
import { useActionState } from "react";

import { authClient } from "~/utils/auth-client";
import { getSession } from "~/utils/auth.functions";

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    const session = await getSession();

    if (session) {
      throw redirect({ to: "/" });
    }
  },
  head: () => ({
    meta: [
      {
        title: "Login | My Projects",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://myprojects.joao.tools/login",
      },
    ],
  }),
  component: Login,
});

function Login() {
  const navigate = Route.useNavigate();

  async function handleLogin(_prevState: string | undefined, formData: FormData): Promise<string | undefined> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
    });
    if (error) return error.message;

    navigate({ to: "/" });
  }

  const [error, formAction, isPending] = useActionState(handleLogin, undefined);

  return (
    <>
      <header className="flex justify-between">
        <h1 className="font-heading font-medium text-mist-900">My Projects</h1>
      </header>

      <main>
        <MatchRoute to="/" pending>
          {(match) =>
            match ? (
              <div className="flex cursor-progress flex-col gap-4">
                <dl className="flex gap-2">
                  <div className="flex gap-2 border border-mist-200 px-2 py-1">
                    <dt className="text-mist-500">Projects</dt>
                    <dd className="flex items-center border-l border-mist-200 pl-2">
                      <div aria-hidden="true" className="size-4 bg-mist-400 motion-safe:animate-pulse" />
                    </dd>
                  </div>

                  <div className="flex gap-2 border border-mist-200 px-2 py-1">
                    <dt className="text-mist-500">Open issues</dt>
                    <dd className="flex items-center border-l border-mist-200 pl-2">
                      <div aria-hidden="true" className="size-4 bg-mist-400 motion-safe:animate-pulse" />
                    </dd>
                  </div>

                  <div className="flex gap-2 border border-mist-200 px-2 py-1">
                    <dt className="text-mist-500">Closed this week</dt>
                    <dd className="flex items-center border-l border-mist-200 pl-2">
                      <div aria-hidden="true" className="size-4 bg-mist-400 motion-safe:animate-pulse" />
                    </dd>
                  </div>

                  <div className="flex gap-2 border border-mist-200 px-2 py-1">
                    <dt className="text-mist-500">Today</dt>
                    <dd className="flex items-center border-l border-mist-200 pl-2">
                      <div aria-hidden="true" className="size-4 bg-mist-400 motion-safe:animate-pulse" />
                    </dd>
                  </div>
                </dl>

                <table className="w-full border-separate border-spacing-0 overflow-hidden border border-mist-200">
                  <colgroup>
                    <col className="w-1/2" />
                    <col className="w-1/4" />
                    <col className="w-1/4" />
                  </colgroup>
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
                    <tr>
                      <th scope="row" className="px-6 py-4">
                        <div className="h-lh w-full bg-mist-400 motion-safe:animate-pulse" />
                      </th>
                      <td className="px-6 py-4">
                        <div className="h-lh w-full bg-mist-400 motion-safe:animate-pulse" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-lh w-full bg-mist-400 motion-safe:animate-pulse" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-4">
                <h2>Sign in to your account</h2>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="hello@world.com"
                    required
                    className="w-full border border-mist-200 px-3 py-2 placeholder:text-mist-400 focus:border-blue-500 focus:outline focus:outline-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="No 123456, please"
                    minLength={8}
                    maxLength={128}
                    required
                    className="w-full border border-mist-200 px-3 py-2 placeholder:text-mist-400 focus:border-blue-500 focus:outline focus:outline-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-2 w-full cursor-pointer bg-mist-900 py-2 font-medium text-white transition-transform duration-160 ease-out will-change-transform hover:bg-mist-900/95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-97 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <span className="motion-safe:sr-only">Logging in</span>
                      <span className="flex min-h-lh items-center justify-center gap-2 motion-reduce:hidden">
                        <span className="size-3 animate-ping rounded-full bg-white"></span>
                        <span className="size-3 animate-ping rounded-full bg-white [animation-delay:0.2s]"></span>
                        <span className="size-3 animate-ping rounded-full bg-white [animation-delay:0.4s]"></span>
                      </span>
                    </>
                  ) : (
                    "Login"
                  )}
                </button>

                <p role="alert" aria-atomic="true" className="text-rose-600">
                  {error}
                </p>
              </form>
            )
          }
        </MatchRoute>
      </main>
    </>
  );
}
