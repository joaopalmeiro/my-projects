# Notes

- https://gitlab.com/joaommpalmeiro/template-react-vite-tailwind
- https://gitlab.com/joaommpalmeiro/template-react-vite
- https://ahooks.js.org/hooks/use-update-effect/
- https://github.com/childrentime/reactuse:
  - https://www.reactuse.com/
  - https://www.reactuse.com/effect/useupdateeffect/
- https://vite.dev/guide/env-and-mode#env-files
- https://ark-ui.com/%5Bframework%5D/docs/components/collapsible#lazy-mount
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

## Commands

```bash
npm install \
@tanstack/react-query \
react \
react-dom \
zod \
&& npm install -D \
@biomejs/biome \
@joaopalmeiro/biome-react-config \
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

### Clean slate

```bash
rm -rf dist/ node_modules/
```
