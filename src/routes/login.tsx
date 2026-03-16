import { createFileRoute, redirect, MatchRoute } from "@tanstack/react-router";
import { useFormStatus } from "react-dom";

import { authClient } from "~/utils/auth-client";
import { getSession } from "~/utils/auth.functions";

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    const session = await getSession();

    if (session) {
      throw redirect({ to: "/" });
    }
  },
  component: Login,
});

function Login() {
  const navigate = Route.useNavigate();

  async function handleLogin(formData: FormData): Promise<void> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          navigate({ to: "/" });
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      },
    );
  }

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
              <form action={handleLogin} className="flex flex-col gap-4">
                <h2>Sign in to your account</h2>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="hello@world.com"
                    required
                    className="w-full py-2 px-3 placeholder:text-mist-400 border focus:border-blue-500 focus:outline focus:outline-blue-500 border-mist-200"
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="No 123456, please"
                    minLength={8}
                    maxLength={128}
                    required
                    className="w-full py-2 px-3 placeholder:text-mist-400 border focus:border-blue-500 focus:outline focus:outline-blue-500 border-mist-200"
                  />
                </div>

                <SubmitButton />
              </form>
            </main>
          </>
        )
      }
    </MatchRoute>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 py-2 hover:bg-mist-900/95 bg-mist-900 font-medium text-white active:scale-98 transition-transform duration-100 will-change-transform"
    >
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}
