# Notes

- https://gitlab.com/joaommpalmeiro/template-react-vite-tailwind
- https://gitlab.com/joaommpalmeiro/template-react-vite
- https://ahooks.js.org/hooks/use-update-effect/
- https://github.com/childrentime/reactuse:
  - https://www.reactuse.com/
  - https://www.reactuse.com/effect/useupdateeffect/
- https://vite.dev/guide/env-and-mode#env-files
- https://ark-ui.com/%5Bframework%5D/docs/components/collapsible#lazy-mount
- https://ariakit.org/examples/disclosure-animated
- https://www.radix-ui.com/primitives/docs/components/collapsible
- https://tanstack.com/query/latest/docs/framework/react/overview#enough-talk-show-me-some-code-already
- https://github.com/orgs/community/discussions/24442: "pushed_at will be updated any time a commit is pushed to any of the repository's branches."
- https://tanstack.com/query/latest/docs/framework/react/examples/simple
- https://tanstack.com/query/latest/docs/framework/react/guides/parallel-queries#dynamic-parallel-queries-with-usequeries
- https://developer.mozilla.org/en-US/docs/Web/API/Headers
- https://tanstack.com/query/latest/docs/framework/react/guides/query-functions
- https://tanstack.com/query/latest/docs/framework/react/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- https://tanstack.com/query/latest/docs/framework/react/guides/window-focus-refetching
- https://tkdodo.eu/blog/type-safe-react-query
- https://tkdodo.eu/blog/type-safe-react-query#validation-in-the-queryfn:
  - "This plays so well together with React Query because `parse` throws a descriptive `Error` if something went wrong, which will make React Query go into `error` state - just as if the network call itself failed."
- https://polvara.me/posts/effective-query-functions-for-react-query-with-zod/
- https://www.brenelz.com/posts/using-zod-to-validate-api-responses/
- https://github.com/ianstormtaylor/superstruct
- https://zod.dev/?id=strings
- https://zod.dev/?id=numbers
- https://tanstack.com/query/latest/docs/framework/react/typescript
- https://tanstack.com/query/latest/docs/framework/react/guides/query-retries
- https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository
- https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-repository-issues: "List issues in a repository. Only open issues will be listed."
- https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation
- https://github.com/IonicaBizau/git-url-parse
- https://ark-ui.com/react/docs/guides/styling#styling-with-tailwind-css
- https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query:
  - https://github.com/TanStack/query/issues/7544
  - https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#satisfies
  - https://tanstack.com/query/latest/docs/eslint/exhaustive-deps
  - https://tanstack.com/query/latest/docs/eslint/stable-query-client
  - https://tanstack.com/query/latest/docs/eslint/no-rest-destructuring
  - https://tanstack.com/query/latest/docs/eslint/no-unstable-deps
  - https://tanstack.com/query/latest/docs/eslint/infinite-query-property-order
- Grist:
  - https://github.com/gristlabs/grist-core
  - https://support.getgrist.com/self-managed/#how-do-i-install-grist
  - https://support.getgrist.com/install/saml/#example-authentik
  - https://support.getgrist.com/api/#section/Authentication
  - https://support.getgrist.com/api/#tag/records
- https://authjs.dev/:
  - https://next-auth.js.org/getting-started/introduction
  - https://next-auth.js.org/providers/authentik
  - https://authjs.dev/getting-started/installation?framework=Next.js
  - https://authjs.dev/getting-started/providers/authentik
- https://tanstack.com/query/latest/docs/framework/react/guides/dependent-queries:
  - https://tanstack.com/query/latest/docs/framework/react/guides/dependent-queries#usequeries-dependent-query
  - https://tanstack.com/query/latest/docs/framework/react/reference/useQueries
  - https://tanstack.com/query/v5/docs/framework/react/reference/useQueries#combine
- https://brockherion.dev/blog/posts/data-fetching-in-nextjs/
- https://github.com/lukeed/clsx
- https://thegraph.com/docs/en/cookbook/how-to-secure-api-keys-using-nextjs-server-components/#step-3-implement-server-side-api-request
- https://nextjs.org/docs/app/building-your-application/deploying#docker-image
- https://www.flightcontrol.dev/blog/secret-knowledge-to-self-host-nextjs
- https://github.com/cerebral/overmind
- https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#local-fonts
- https://nextjs.org/docs/app/api-reference/components/font
- https://fonts.google.com/specimen/Lusitana
- https://fontsource.org/docs/guides/nextjs
- https://nextjs.org/docs/app/building-your-application/routing/route-handlers#caching
- https://nextjs.org/learn/dashboard-app/fetching-data#parallel-data-fetching
- https://react.dev/reference/react/Suspense
- https://nextjs.org/learn/dashboard-app/adding-search-and-pagination#1-capture-the-users-input: "`"use client"` - This is a Client Component, which means you can use event listeners and hooks."
- https://nextjs.org/learn/dashboard-app/adding-search-and-pagination#3-keeping-the-url-and-input-in-sync:
  - "`defaultValue` vs. `value` / Controlled vs. Uncontrolled":
    - "If you're using state to manage the value of an input, you'd use the `value` attribute to make it a controlled component. This means React would manage the input's state."
    - "However, since you're not using state, you can use `defaultValue`. This means the native input will manage its own state. This is okay since you're saving the search query to the URL instead of state."
- https://www.npmjs.com/package/use-debounce
- https://nextjs.org/learn/dashboard-app/mutating-data#type-validation-and-coercion
- https://nextjs.org/learn/dashboard-app/mutating-data#6-revalidate-and-redirect
- https://pocketbase.io/
- https://nextjs.org/docs/app/api-reference/functions/fetch#optionscache: `` fetch(`https://...`, { cache: 'force-cache' | 'no-store' }) ``
- https://nextjs.org/docs/pages/api-reference/cli/create-next-app
- https://github.com/vercel/next.js/tree/canary/examples/hello-world
- https://www.npmjs.com/package/create-next-app
- https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#loading-environment-variables
- https://biomejs.dev/linter/rules-sources/#nexteslint-plugin-next
- https://fireship.io/courses/nextjs/basics-route-handlers/: "API routes will always run server-side (...)"
- https://nextjs.org/docs/app/building-your-application/optimizing/metadata#static-metadata
- https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
- https://nextjs.org/docs/14/app/api-reference/functions/generate-metadata
- https://nextjs.org/blog/next-15#eslint-9-support
- https://github.com/vercel/next.js/pull/71371
- https://nextjs.org/docs/pages/building-your-application/configuring/post-css#default-behavior: "Autoprefixer automatically adds vendor prefixes to CSS rules (back to IE11)."
- https://nextjs.org/blog/next-15#react-19
- https://nextjs.org/blog/next-15#static-route-indicator

## Commands

```bash
npm install \
@ark-ui/react \
next \
react \
react-dom \
zod \
&& npm install -D \
@biomejs/biome \
@joaopalmeiro/biome-react-config \
@types/react \
@types/react-dom \
@typescript-eslint/parser \
eslint \
eslint-plugin-tailwindcss \
npm-run-all2 \
postcss \
sort-package-json \
tailwindcss \
typescript
```

```bash
npm install -D "@types/node@$(cat .nvmrc | cut -d . -f 1-2)"
```

```bash
npm install \
@ark-ui/react \
@tanstack/react-query \
react \
react-dom \
zod \
&& npm install -D \
@biomejs/biome \
@joaopalmeiro/biome-react-config \
@tanstack/eslint-plugin-query \
@types/react \
@types/react-dom \
@typescript-eslint/parser \
@vitejs/plugin-react \
autoprefixer \
create-vite-tsconfigs \
eslint \
eslint-plugin-tailwindcss \
npm-run-all2 \
postcss \
sort-package-json \
tailwindcss \
typescript \
vite
```

```bash
rm -rf node_modules/ && npm install
```

```bash
npm config ls -l
```

```bash
npx create-next-app@14.2.16 create-next-app-example
```

```bash
npx create-next-app@15.0.1 create-next-app-example
```

```bash
npx create-next-app@15.0.1 create-next-app-example --typescript --tailwind --app --use-npm --skip-install --no-eslint --src-dir --empty --no-import-alias --no-turbopack
```

```bash
npx create-next-app@15.0.1 create-next-app-example --typescript --tailwind --app --use-npm --skip-install --eslint --src-dir --empty --no-import-alias --no-turbopack
```

### Clean slate

```bash
rm -rf dist/ node_modules/
```

## Snippets

```ts
export function repo2api(repoUrl: string): { repo: URL; issues: URL } {
  const parsedUrl = URL.parse(repoUrl);

  switch (parsedUrl?.hostname) {
    case "github.com":
      return {
        repo: new URL(`/repos${parsedUrl.pathname}`, BASE_GH_URL),
        issues: new URL(`/repos${parsedUrl.pathname}/issues`, BASE_GH_URL),
      };
    default:
      throw new Error(`Invalid repo URL: ${repoUrl}`);
  }
}
```

### `eslint.config.js`

```js
// @ts-check

import pluginQuery from "@tanstack/eslint-plugin-query";
import parser from "@typescript-eslint/parser";
import tailwindcss from "eslint-plugin-tailwindcss";

const GLOB_TSX = "**/*.tsx";

/** @satisfies {import('eslint').Linter.Config[]} */
export default [
  {
    files: [GLOB_TSX],
    plugins: { tailwindcss },
    languageOptions: { parser },
    rules: {
      "tailwindcss/classnames-order": "error",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",
      "tailwindcss/no-arbitrary-value": "off",
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/no-custom-classname": "error",
      "tailwindcss/no-unnecessary-arbitrary-value": "error",
    },
    settings: {
      tailwindcss: {
        callees: ["clsx"],
        classRegex: "^className$",
        config: "tailwind.config.ts",
        removeDuplicates: true,
      },
    },
  },
  {
    files: [GLOB_TSX],
    plugins: {
      "@tanstack/query": pluginQuery,
    },
    rules: {
      "@tanstack/query/exhaustive-deps": "error",
      "@tanstack/query/infinite-query-property-order": "error",
      "@tanstack/query/no-rest-destructuring": "error",
      "@tanstack/query/no-unstable-deps": "error",
      "@tanstack/query/stable-query-client": "error",
    },
  },
];
```

### `src/App.tsx`

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Projects } from "./components/Projects";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <h1>My Projects</h1>
      </header>

      <main>
        <Projects />
      </main>
    </QueryClientProvider>
  );
}

export default App;
```

### `src/components/Issues.tsx`

```tsx
import { useQuery } from "@tanstack/react-query";

import { issuesSchema } from "../schemas";

interface Props {
  url: string;
}

export function Issues(props: Props) {
  const { data, error } = useQuery({
    queryKey: ["issues", props.url],
    queryFn: async () => {
      const response = await fetch(props.url, {
        headers: [
          ["Accept", "application/vnd.github+json"],
          ["X-GitHub-Api-Version", "2022-11-28"],
        ],
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const rawData = await response.json();
      return issuesSchema.parse(rawData);
    },
    retry: false,
  });

  return (
    <div>
      {error?.message}
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
```

### `src/components/Projects.tsx`

```tsx
import { Collapsible } from "@ark-ui/react/collapsible";
import { useQueries, useQuery } from "@tanstack/react-query";

import { projectsSchema, repoSchema } from "../schemas";
import { repo2api } from "../utils";
import { Issues } from "./Issues";

export function Projects() {
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8484/api/docs/${import.meta.env.VITE_DOC_ID}/tables/${
          import.meta.env.VITE_TABLE_ID
        }/records`,
        {
          headers: [
            ["Authorization", `Bearer ${import.meta.env.VITE_GRIST_API_KEY}`],
          ],
        }
      );

      const rawData = await response.json();
      return projectsSchema.parse(rawData);
    },
    select: (projects) => projects.records,
    retry: false,
  });

  const { data: repos } = useQueries({
    queries: projects
      ? projects.map((project) => {
          return {
            queryKey: ["project", project.id],
            queryFn: async () => {
              const repo = repo2api(project.fields.Repo);

              const response = await fetch(repo, {
                headers: [
                  ["Accept", "application/vnd.github+json"],
                  ["X-GitHub-Api-Version", "2022-11-28"],
                ],
              });

              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }

              const rawData = await response.json();
              return repoSchema.parse(rawData);
            },
          };
        })
      : [],
    combine: (results) => {
      return {
        data: results.flatMap((result) => (result.data ? [result.data] : [])),
      };
    },
  });

  return (
    <section>
      {repos.length > 0 && (
        <ul>
          {repos.map((repo) => {
            return (
              <li key={repo.id}>
                <Collapsible.Root lazyMount={true}>
                  <Collapsible.Trigger>{repo.name}</Collapsible.Trigger>
                  <Collapsible.Content>
                    <Issues url={repo.issues_url} />
                  </Collapsible.Content>
                </Collapsible.Root>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
```
