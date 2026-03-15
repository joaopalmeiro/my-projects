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
              <form action={handleLogin}>
                <h2>Sign in to your account</h2>

                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
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
    <button type="submit" disabled={pending}>
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}
