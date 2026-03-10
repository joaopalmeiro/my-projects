# Notes

- https://github.com/nrjdalal/gitpick
- https://tanstack.com/start/latest/docs/framework/react/guide/tailwind-integration
- https://tailwindcss.com/docs/installation/framework-guides/tanstack-start
- https://nuqs.dev/docs/adapters#tanstack-router: "TanStack Router support is experimental and does not yet cover TanStack Start."
- https://tkdodo.eu/blog/the-beauty-of-tan-stack-router#search-param-state-management
- https://tanstack.com/start/latest/docs/framework/react/tutorial/fetching-external-api#conclusion: "While fetching data at build time in TanStack Start is perfect for static content like blog posts or product pages, it's not ideal for interactive apps. If you need features like real-time updates, caching, or infinite scrolling, you'll want to use TanStack Query on the client side instead. TanStack Query makes it easy to handle dynamic data with built-in caching, background updates, and smooth user interactions."
- https://tanstack.com/start/latest/docs/framework/react/guide/server-functions
- Templates:
  - https://github.com/TanStack/router/tree/main/examples/react/start-tailwind-v4
  - https://github.com/TanStack/router/tree/main/examples/react/start-bare
    - `"include": ["**/*.ts", "**/*.tsx", "public/script*.js"],`
    - `"start": "pnpx srvx --prod -s ../client dist/server/server.js"`
    - `"@tanstack/react-router-devtools": "^1.163.3",`
- [Can't use zod v4](https://github.com/TanStack/router/issues/6138) issue
  - https://v3.zod.dev/
- https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-repository-content
- https://www.youtube.com/watch?v=sFEDAkJy9Dc:
  - https://t3.gg/sponsors
  - "Every single tool call sends the whole history back. (...) The agent is just autocomplete. It's just generating words. It doesn't know what's happening. It doesn't know what system it is. It doesn't know how long it will take. (...) A tool call means the generation finished."
  - "(...) the cache is just compute reduction method. It is not changing what traffic has to be sent at all."
  - https://github.com/openresponses/openresponses
- https://www.greptile.com/state-of-ai-coding-2025
- https://tanstack.com/store
- https://www.tremor.so/
  - https://blocks.tremor.so/
  - https://blocks.tremor.so/blocks/kpi-cards
    - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl
  - https://blocks.tremor.so/blocks/badges
- "TanStack Query would cache results in each user's browser, so repeated requests within the same session won't hit the server function again. But since each new user or browser session would still trigger the server function and hit the GitHub API, TanStack Query alone won't fully solve the rate-limiting issue—you'd need server-side caching for that. That said, TanStack Query does help by reducing redundant requests from the same client."
- https://tanstack.com/start/latest/docs/framework/react/guide/isr#cache-header-strategies
  - https://tanstack.com/start/latest/docs/framework/react/guide/isr#cloudflare-workers
- https://tanstack.com/start/latest/docs/framework/react/start-vs-nextjs#tanstack-start-rscs-are-just-data
- https://tanstack.com/start/latest/docs/framework/react/examples/start-basic-auth
- https://tailwindcss.com/plus/ui-blocks/application-ui/lists/tables
- https://www.monomodular.de/wim-r12.html
- https://date-fns.org/v4.1.0/docs/startOfWeek
- https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api?apiVersion=2022-11-28
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Link
- https://sweetfont.com/
- https://cloudfour.com/topics/accessibility/
  - https://cloudfour.com/thinks/write-alt-text-like-youre-talking-to-a-friend/
  - https://thoughtbot.com/blog/add-punctuation-to-your-alt-text
    - Add a period even in single-sentence descriptions.
- https://tanstack.com/start/latest/docs/framework/react/guide/server-functions#basic-parameters
- https://stackoverflow.com/questions/55057200/is-the-set-has-method-o1-and-array-indexof-on
- https://www.youtube.com/watch?v=hDn8-fK3XaU:
  - https://t3.codes/
    - https://github.com/pingdotgg/t3code: "T3 Code is a minimal web GUI for coding agents."
    - https://www.npmjs.com/package/t3
    - https://openai.com/codex/
      - https://developers.openai.com/codex/
      - https://developers.openai.com/codex/pricing
    - https://github.com/anomalyco/opencode
      - https://opencode.ai/zen
  - https://macroscope.com/
- https://www.youtube.com/watch?v=Atev8Nxpw7c
  - https://github.com/jherr/tanstack-better-auth
  - https://better-auth.com/docs/installation
  - https://better-auth.com/docs/integrations/tanstack
- https://github.com/daveyplate/better-auth-tanstack-starter
- https://github.com/chao800404/better-auth-d1-cloudflare-tanstack-start
- https://github.com/zpg6/better-auth-cloudflare
- https://orm.drizzle.team/docs/get-started-sqlite#better-sqlite3
- https://orm.drizzle.team/docs/connect-cloudflare-d1
- https://orm.drizzle.team/docs/get-started/d1-new
- https://developers.cloudflare.com/d1/get-started/
  - https://developers.cloudflare.com/d1/best-practices/local-development/
- https://better-auth.com/docs/concepts/database#core-schema
- https://better-auth.com/docs/adapters/drizzle
- https://www.youtube.com/watch?v=M6Xwl7IyRpI
  - https://orm.drizzle.team/drizzle-studio/overview
- https://honwhy.wang/posts/2025-08-18-cf-worker-full-stack-en/: `import { db } from "@/db"; // your drizzle instance`
- https://www.firdausng.com/posts/integrating-better-auth-better-sqlite3-drizzle-pnpm
- https://orm.drizzle.team/docs/connect-cloudflare-do

## Commands

```bash
npx gitpick TanStack/router/tree/main/examples/react/start-bare start-bare
```

```bash
npx gitpick TanStack/router/tree/main/examples/react/start-tailwind-v4 start-tailwind-v4
```

```bash
npm install \
@tanstack/react-router \
@tanstack/react-start \
date-fns \
react \
react-dom \
zod@3 \
&& npm install -D \
@tailwindcss/vite \
@types/react \
@types/react-dom \
@vitejs/plugin-react@4 \
tailwindcss \
typescript \
vite \
vite-tsconfig-paths@5
```

```bash
npm install -D "@types/node@$(cat .nvmrc | cut -d . -f 1)"
```

```bash
npm install -D "@types/node@$(cat .nvmrc | cut -d . -f 1-2)"
```
