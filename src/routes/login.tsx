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
    <MatchRoute to="/" pending>
      {(match) =>
        match ? (
          <>
            <header className="flex justify-between">
              <h1 className="font-medium text-mist-900">My Projects</h1>
            </header>

            <main>
              <p>Loading...</p>
            </main>
          </>
        ) : (
          <>
            <header className="flex justify-between">
              <h1 className="font-medium text-mist-900">My Projects</h1>
            </header>

            <main>
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
                  {isPending ? "Logging in..." : "Login"}
                </button>

                <p role="alert" aria-atomic="true" className="text-rose-600">
                  {error}
                </p>
              </form>
            </main>
          </>
        )
      }
    </MatchRoute>
  );
}
