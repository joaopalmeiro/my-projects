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
- https://ui.shadcn.com/docs/components/collapsible
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
- https://nextjs.org/docs/14/getting-started/project-structure
- https://github.com/webdevcody/wdc-saas-starter-kit
- https://biomejs.dev/internals/changelog/#v191-2024-09-15: "`noUndeclaredDependencies` now ignores `@/` imports (...)"
- [Allow defining a different key into the final destination object after parsing](https://github.com/colinhacks/zod/issues/486) issue
- https://nextjs.org/docs/14/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense
- https://nextjs.org/docs/14/app/building-your-application/data-fetching/fetching#sequential-data-fetching:
  - "You can use `loading.js` (for route segments) or React `<Suspense>` (for nested components) to show an instant loading state while React streams in the result."
- https://www.reddit.com/r/nextjs/comments/1ad3q3h/comment/kjygmfb/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button: "Even though you can use server actions to fetch data, Next.js discourages it because it can only send a POST request. Instead, fetch the data from the server component and pass it down as props."
- https://nextjs.org/docs/14/app/building-your-application/data-fetching/fetching#parallel-data-fetching
- https://nextjs.org/docs/app/building-your-application/routing/error-handling#using-error-boundaries
- https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-global-errors
- https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-expected-errors-from-server-components
- https://nextjs.org/docs/app/api-reference/next-config-js/optimizePackageImports
- https://docs.gitlab.com/ee/api/rest/index.html#namespaced-paths
- https://kilianvalkhof.com/2024/javascript/the-problem-with-new-url-and-how-url-parse-fixes-that/
- https://www.bennadel.com/blog/2831-rethrowing-errors-in-javascript-and-node-js.htm
- https://javascript.info/try-catch#rethrowing
- https://eslint.org/docs/latest/rules/no-else-return
- https://stackoverflow.com/questions/76406748/constructing-url-with-base-url-strips-the-path-in-base-url
- https://zod.dev/?id=unions
- https://stackoverflow.com/questions/77427502/how-to-merge-multiple-zod-object-schema
- https://www.chakra-ui.com/docs/components/collapsible
- https://www.chakra-ui.com/docs/get-started/frameworks/next-app#optimize-bundle
- https://github.com/phosphor-icons/react
- https://github.com/adobe/react-spectrum/blob/v2.27.0/packages/%40react-aria/button/src/useButton.ts
- https://react-spectrum.adobe.com/react-aria/useLink.html
- https://react-spectrum.adobe.com/react-aria/Button.html#link-buttons
- https://github.com/adobe/react-spectrum/blob/93c26d8bd2dfe48a815f08c58925a977b94d6fdd/packages/%40react-aria/link/src/useLink.ts
- https://kittygiraudel.com/2020/12/10/accessible-icon-links/
- https://www.sarasoueidan.com/blog/accessible-icon-buttons/
- https://github.com/phosphor-icons/homepage
- https://blog.stijnvanhulle.be/blog/mapping-of-data-with-zod
- https://github.com/colinhacks/zod/discussions/2100
- https://zod.dev/?id=pipe
- https://nextjs.org/docs/app/api-reference/next-config-js/logging
- https://nextjs.org/docs/14/app/api-reference/next-config-js/logging
- https://www.adarsha.dev/blog/nextjs-four-caching-layers
- https://shkspr.mobi/blog/2024/10/you-can-use-text-wrap-balance-on-icons/
- https://docs.gitlab.com/ee/api/rest/#personalprojectgroup-access-tokens
- `export const repoSchema = z.union([ghRepoSchema, glRepoSchema]);`
- https://docs.gitlab.com/ee/api/issues.html#list-issues
- https://docs.gitea.com/development/api-usage#authentication
- https://docs.gitea.com/api/1.22/#tag/repository/operation/repoGet
- https://dbushell.com/2021/06/08/javascript-relative-date-time-formatting/
- https://www.builder.io/blog/relative-time
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
- https://github.com/vercel/little-date
- https://ahmadrosid.com/cheatsheet/js/getRelativeTimeString
- https://date-fns.org/v4.1.0/docs/intlFormatDistance
- https://www.npmjs.com/package/tiny-relative-date
- https://github.com/formkit/tempo/issues/7
- https://www.npmjs.com/package/javascript-time-ago
- https://gitlab.com/catamphetamine/javascript-time-ago
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
- https://react-spectrum.adobe.com/react-aria/Disclosure.html:
  - https://react-spectrum.adobe.com/react-aria/Disclosure.html#example: `<h3> <Button slot="trigger"> <svg viewBox="0 0 24 24"> <path d="m8.25 4.5 7.5 7.5-7.5 7.5" /> </svg> System Requirements </Button> </h3>`
  - https://react-spectrum.adobe.com/react-spectrum/Disclosure.html#disclosure
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#several_ways_to_create_a_date_object: `const today = new Date();`
- https://nuqs.47ng.com/:
  - https://github.com/47ng/nuqs
  - https://nuqs.47ng.com/docs/adapters#nextjs-app-router
  - https://github.com/47ng/nuqs?tab=readme-ov-file#accessing-searchparams-in-server-components
  - https://nuqs.47ng.com/docs/server-side
  - https://nuqs.47ng.com/docs/tips-tricks#reusing-hooks
- https://nextjs.org/docs/14/app/api-reference/functions/use-search-params
- https://francoisbest.com/posts/2023/storing-react-state-in-the-url-with-nextjs
- https://francoisbest.com/open-source
- https://nextjs.org/docs/14/app/api-reference/functions/fetch#optionscache: `force-cache` or `no-store`
- https://nextjs.org/docs/14/app/api-reference/functions/fetch#optionsnextrevalidate
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
- https://byby.dev/js-sort-by-date-value
- https://ui.shadcn.com/docs/components/dialog
- https://ui.shadcn.com/docs/components/drawer
- https://vaul.emilkowal.ski/
- https://github.com/emilkowalski/vaul/blob/main/package.json
- https://motion-primitives.com/
- https://ui.shadcn.com/docs/components/table
- https://tanstack.com/table/v8
- https://ui.shadcn.com/examples/tasks:
  - https://github.com/shadcn-ui/ui/tree/f0cff7e0eb0e7393bc7e0e02a9157fc3f1fa2f6b/apps/www/app/(app)/examples/tasks
  - https://github.com/shadcn-ui/ui/blob/f0cff7e0eb0e7393bc7e0e02a9157fc3f1fa2f6b/apps/www/app/(app)/examples/tasks/components/data-table-faceted-filter.tsx
- https://park-ui.com/react/docs/components/drawer
- https://park-v2.omikor.in/docs/panda/components/drawer
- https://arek-ui.fly.dev/?q=Drawer
- https://github.com/arekmaz/arek-ui/blob/cbe601414e04d9bf81cf12913a3d29f27ba9a1b1/app/components/ui/drawer.tsx
- https://github.com/arekmaz/arek-ui/blob/cbe601414e04d9bf81cf12913a3d29f27ba9a1b1/app/demo/drawer.stories.tsx
- https://github.com/cschroeter/park-ui/blob/53235fbaf69e5f6b8a1bb8d2518a5816475a1f3c/website/src/components/theming/theme-drawer.tsx
- https://ark-ui.com/react/docs/components/dialog#examples
- https://github.com/rcbyr/keen-slider
- https://ark-ui.com/react/docs/guides/composition#the-ark-factory
- https://v2.chakra-ui.com/community/recipes/z-index
- https://github.com/tailwindlabs/tailwindcss/discussions/10762: `hover:[&[href]]:text-gray-700`
- https://savvywombat.com.au/tailwind-css/grid-areas
- https://github.com/cschroeter/park-ui/blob/53235fbaf69e5f6b8a1bb8d2518a5816475a1f3c/packages/panda/src/theme/tokens/animations.ts
- https://github.com/cschroeter/park-ui/blob/53235fbaf69e5f6b8a1bb8d2518a5816475a1f3c/packages/panda/src/theme/keyframes.ts#L28
- https://github.com/cschroeter/park-ui/blob/53235fbaf69e5f6b8a1bb8d2518a5816475a1f3c/packages/panda/src/theme/tokens/easings.ts
- https://react-spectrum.adobe.com/react-aria/Modal.html#custom-overlay (drawer)
- https://nextui.org/docs/components/button
- https://github.com/chakra-ui/zag/blob/71896fa4466bbd141d4061ed7fd386acd05402ee/packages/utilities/remove-scroll/src/index.ts#L4
- https://ark-ui.com/react/docs/components/dialog#api-reference: `preventScroll: Whether to prevent scrolling behind the dialog when it's opened`
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
- https://heroicons.com/micro
- https://www.sarasoueidan.com/blog/focus-indicators/
- https://www.radix-ui.com/themes/playground#link
- https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip-ink
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#using_the_download_attribute_to_save_a_canvas_as_a_png: `a { display: inline-block; }`
- https://www.protailwind.com/tips/on-brand-text-selection-with-the-selection-modifier
- https://tailwindcss.com/docs/hover-focus-and-other-states#highlighted-text
- https://primitives.oku-ui.com/
- `font-medium text-lg`
- https://www.eldoraui.site/
  - https://www.eldoraui.site/components/backgrounds/nosignal
  - https://karthik-mudunuri.vercel.app/
  - `<a href="https://eldoraui.site/" target="_blank" class="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"><img alt="Eldora UI" src="/eldoraui.svg" class="!mr-1" width="14" height="14">Eldora UI</a>`
- <span className="relative -left-0.5 -top-0.5 text-gray-400">⌝</span> vs. `<span className="relative -top-px select-none text-xs text-gray-400"> ↗</span>`
- https://departuremono.com/
- https://github.com/rektdeckard/departure-mono
- https://imgs.so/auth/login: `background: linear-gradient(100deg, #F8E4D5 0%, #FFF5E6 100%);` + `color: #9A5421;`
- `<div className="mt-1 rounded border border-gray-100 bg-gray-50 px-0.5 font-mono text-xs text-gray-700">` vs. `<div className="mt-1 rounded border border-gray-100 bg-gradient-to-r from-gray-100 to-gray-50 px-0.5 font-mono text-xs text-gray-700">`
- https://ghbtns.com/
- https://stackoverflow.com/questions/38874757/css-outline-width-not-working
- https://buildui.com/recipes/gradient-border
- `<p className="flex items-baseline gap-px">`
- https://tailwindcss.com/docs/vertical-align
- https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
- https://github.com/tailwindlabs/tailwindcss/discussions/12127 + https://github.com/tailwindlabs/tailwindcss/pull/12128 + https://github.com/tailwindlabs/tailwindcss/pull/12128#issuecomment-2225349386
- https://github.com/cschroeter/park-ui/blob/b447309f7cdc7cf6d78ad3f522464cef38340831/packages/panda/src/theme/keyframes.ts#L36
- `<h3 className="mb-1 font-medium">`
- https://reniki.com/blog/gradient-border
- https://gradientborder.vercel.app/
- https://www.hyperui.dev/blog/animated-border-gradient-with-tailwindcss
- https://www.hyperui.dev/components/application-ui/badges
- https://ibelick.com/blog/create-animated-gradient-borders-with-css
- https://github.com/pqoqubbw/icons
- https://icons.pqoqubbw.dev/
- https://coreui.io/react/docs/components/collapse/
- https://coreui.io/react/docs/components/accordion/

## Commands

```bash
npm install \
@ark-ui/react \
date-fns \
next \
react \
react-dom \
zod \
&& npm install -D \
@biomejs/biome \
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

```bash
rm -rf .next/cache/fetch-cache/
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

```tsx
<a
  href={repo.url}
  target="_blank"
  rel="noreferrer"
  className="group inline-flex items-baseline gap-px focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
>
  <span className="decoration-from-font underline-offset-2 group-hover:underline group-focus-visible:no-underline">
    Repo
  </span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className="size-3.5 fill-gray-400"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
      clipRule="evenodd"
    />
  </svg>
</a>
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

### `src/lib/utils.ts`

```ts
import { parse } from "node:url";
import { BASE_GH_URL, BASE_GL_URL, GH_HOST, GL_HOST } from "@/lib/constants";

export function repo2api(repoUrl: string): URL {
  const parsedUrl = parse(repoUrl);

  if (parsedUrl.hostname === GH_HOST && parsedUrl.pathname) {
    return new URL(`repos${parsedUrl.pathname}`, BASE_GH_URL);
  }

  if (parsedUrl.hostname === GL_HOST && parsedUrl.pathname) {
    const projectId = encodeURIComponent(parsedUrl.pathname.slice(1));
    return new URL(`projects/${projectId}`, BASE_GL_URL);
  }

  throw new Error(`Invalid repo URL: ${repoUrl}`);
}
```

```ts
export function getRelativeTimeString(date: Date): string {
  const timeMs = date.getTime();
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

  const cutoffs = [
    60,
    3600,
    86400,
    86400 * 7,
    86400 * 30,
    86400 * 365,
    Number.POSITIVE_INFINITY,
  ];
  const units: Intl.RelativeTimeFormatUnit[] = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "year",
  ];

  const unitIndex = cutoffs.findIndex(
    (cutoff) => cutoff > Math.abs(deltaSeconds)
  );
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

  const rtf = new Intl.RelativeTimeFormat("en-GB", { numeric: "auto" });

  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
}
```

### `next.config.mjs`

```js
// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    optimizePackageImports: ["@ark-ui/react"],
  },
};

export default nextConfig;
```

- https://github.com/cschroeter/park-ui/blob/53235fbaf69e5f6b8a1bb8d2518a5816475a1f3c/website/src/components/theming/theme-drawer.tsx

```tsx
import { Portal } from "@ark-ui/react/portal";
import { Settings2Icon, XIcon } from "lucide-react";
import type { PropsWithChildren } from "react";
import { HStack, Stack } from "styled-system/jsx";
import { Button } from "~/components/ui/button";
import { Drawer } from "~/components/ui/drawer";
import { IconButton } from "~/components/ui/icon-button";
import { AccentColorPicker } from "./accent-color-picker";
import { BorderRadiusSlider } from "./border-radius-slider";
import { FontFamilySelect } from "./font-family-select";
import { GrayColorPicker } from "./gray-color-picker";
import { ResetThemeButton } from "./reset-theme-button";
import { ThemeConfigDialog } from "./theme-config-dialog";

interface Props {
  isHero?: boolean;
}

export const ThemeDrawer = (props: PropsWithChildren<Props>) => {
  const { isHero } = props;
  return (
    <Drawer.Root variant={isHero ? "left" : "right"}>
      <Drawer.Trigger asChild>
        {isHero ? (
          <Button
            variant="outline"
            size={isHero ? { base: "xl", md: "2xl" } : "md"}
          >
            <Settings2Icon />
            Make it yours
          </Button>
        ) : (
          <IconButton
            aria-label="Open Theme Drawer"
            variant="ghost"
            size="sm"
            css={{
              color: "fg.muted",
              _hover: { color: "fg.default" },
              "& svg": {
                width: "5",
                height: "5",
              },
            }}
          >
            <Settings2Icon />
          </IconButton>
        )}
      </Drawer.Trigger>
      <Portal>
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Make it yours</Drawer.Title>
              <Drawer.Description>
                Pick the style you want and copy the configuration to your
                project.
              </Drawer.Description>
              <Drawer.CloseTrigger asChild>
                <IconButton
                  aria-label="Close Sidebar"
                  variant="ghost"
                  position="absolute"
                  top="3"
                  right="4"
                >
                  <XIcon />
                </IconButton>
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              <Stack flex="1" gap="4">
                <FontFamilySelect />
                <GrayColorPicker />
                <AccentColorPicker />
                <BorderRadiusSlider />
              </Stack>
            </Drawer.Body>
            <Drawer.Footer>
              <HStack gap="3">
                <ResetThemeButton />
                <ThemeConfigDialog />
              </HStack>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
```

- https://github.com/cschroeter/park-ui/blob/53235fbaf69e5f6b8a1bb8d2518a5816475a1f3c/packages/panda/src/theme/tokens/z-index.ts

```ts
import { defineTokens } from "@pandacss/dev";

export const zIndex = defineTokens.zIndex({
  hide: {
    value: -1,
  },
  base: {
    value: 0,
  },
  docked: {
    value: 10,
  },
  dropdown: {
    value: 1000,
  },
  sticky: {
    value: 1100,
  },
  banner: {
    value: 1200,
  },
  overlay: {
    value: 1300,
  },
  modal: {
    value: 1400,
  },
  popover: {
    value: 1500,
  },
  skipLink: {
    value: 1600,
  },
  toast: {
    value: 1700,
  },
  tooltip: {
    value: 1800,
  },
});
```

- https://www.radix-vue.com/components/collapsible#animating-content-size
- https://www.radix-vue.com/components/accordion.html#animating-content-size
- `<CollapsibleContent class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">`

```css
/* styles.css */
.CollapsibleContent {
  overflow: hidden;
}
.CollapsibleContent[data-state="open"] {
  animation: slideDown 300ms ease-out;
}
.CollapsibleContent[data-state="closed"] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
}
```

- https://ark-ui.com/react/docs/components/collapsible#animation

```css
@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--height);
  }
}

@keyframes slideUp {
  from {
    height: var(--height);
  }
  to {
    height: 0;
  }
}

[data-scope="collapsible"][data-part="content"][data-state="open"] {
  animation: slideDown 250ms;
}

[data-scope="collapsible"][data-part="content"][data-state="closed"] {
  animation: slideUp 200ms;
}
```
