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
- https://www.npmjs.com/package/create-cloudflare
- https://developers.cloudflare.com/pages/get-started/c3/
- https://github.com/cloudflare/workers-sdk/tree/main/packages/create-cloudflare/templates/tanstack-start
- https://www.npmjs.com/package/@cloudflare/workers-types:
  - "We now recommend using the Wrangler CLI and the `wrangler types` command to generate types based on your compatibility date and compatibility flags."
  - "Remember to rerun 'wrangler types' after you change your wrangler.json file."
- https://adamkinney.com/writing/cloudflare-d1-setup/
- https://developers.cloudflare.com/workers/framework-guides/web-apps/tanstack-start/
  - https://developers.cloudflare.com/workers/framework-guides/web-apps/tanstack-start/#bindings:
    - "Access bindings by importing the `env` object in your server-side code:"
    - `import { env } from "cloudflare:workers";`
- https://tanstack.com/start/latest/docs/framework/react/guide/hosting#cloudflare-workers--official-partner
- https://developers.cloudflare.com/workers/configuration/environment-variables/#local-development-with-secrets
  - "Put secrets for use in local development in either a `.dev.vars` file or a `.env` file, in the same directory as the Wrangler configuration file."
- https://developers.cloudflare.com/workers/configuration/environment-variables/#environment-variables-and-nodejs-compatibility: "When you enable `nodejs_compat` and the `nodejs_compat_populate_process_env` compatibility flag (enabled by default for compatibility dates on or after 2025-04-01), environment variables are available via the global `process.env`."
- https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api?apiVersion=2022-11-28#user-agent:
  - "By default, GitHub CLI sends a valid `User-Agent` header. However, GitHub recommends using your GitHub username, or the name of your application, for the `User-Agent` header value. This allows GitHub to contact you if there are problems."
  - "Requests with no `User-Agent` header will be rejected. If you provide an invalid `User-Agent` header, you will receive a `403 Forbidden` response."
- https://nodejs.org/en/learn/getting-started/fetch
  - https://github.com/nodejs/undici/blob/v7.22.0/docs/docs/best-practices/crawling.md: "In undici, the default user agent is `'undici'`. Since undici is integrated into Node.js core as the implementation of `fetch()`, requests made via `fetch()` use `'node'` as the default user agent."
- https://ui.nuxt.com/docs/components/table#columns
- https://flowbite.com/docs/components/tables/
- https://github.com/paper-design/paper-mono
- https://shaders.com/
- https://shaders.paper.design/
- [Vite hot reload with bindings causes "promise was resolved or rejected from a different request context"](https://github.com/cloudflare/workers-sdk/issues/12731) issue
- https://www.chakra-ui.com/docs/components/table
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border-radius: "The `border-radius` property does not apply to table elements when `border-collapse` is `collapse`."
- https://tanstack.com/builder?file=src%2Froutes%2F__root.tsx&pm=npm&features=cloudflare%2Cstart%2Cdrizzle%2Cbetter-auth&drizzle.database=sqlite
- https://better-auth.com/docs/authentication/email-password#configuration
- https://kevinkipp.com/blog/going-full-stack-on-astro-with-cloudflare-d1-and-drizzle/
  - https://github.com/third774/astro-d1-drizzle-demo
- https://orm.drizzle.team/docs/guides/d1-http-with-drizzle-kit
- https://github.com/cloudflare/workers-sdk/issues/12769: "I'm curious why you want to treat the `database_id` as a secret? They are not sensitive and can be included directly in the config."
- https://ygwyg.org/local-d1-drizzle-studio
- https://developers.cloudflare.com/d1/get-started/#3-bind-your-worker-to-your-d1-database: `"binding": "prod_d1_tutorial", // available in your Worker on env.DB`
- [1.3.10 and later does not work on zod 3 projects](https://github.com/better-auth/better-auth/issues/4837) issue
- https://better-auth.com/docs/reference/options#emailandpassword
  - "`minPasswordLength`: Minimum password length (default: `8`)"
  - "`maxPasswordLength`: Maximum password length (default: `128`)"
- https://better-auth.com/docs/reference/options#baseurl
- https://developers.cloudflare.com/workers/development-testing/local-data/#how-it-works: "When you run either `wrangler dev` or `vite`, Miniflare automatically creates local versions of your resources (like KV, D1, or R2). This means you don't need to manually set up separate local instances for each service. However, newly created local resources won't contain any data — you'll need to use Wrangler commands with the `--local` flag to populate them. Changes made to local resources won't affect production data."
  - https://developers.cloudflare.com/workers/development-testing/local-data/#d1-databases
- https://mastra.ai/reference/storage/cloudflare-d1
- https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs
- https://www.youtube.com/watch?v=wpaioC9RtOA
  - Use `debugger;` instead of `console.log();`
- https://ente.io/blog/ensu
- https://www.cloudflare.com/en-gb/developer-platform/products/workers-ai/
- https://rsbuild.rs/guide/advanced/env-vars#processenvnode_env
- https://betterstack.com/community/guides/scaling-nodejs/node-environment-variables/
- https://aiwan.run/posts/cloudflare-d1-local-dev
- https://github.com/Simo10469/tanstack-start-better-auth
- https://andrewdavidkay.com/blog/level/tanstack-start-better-auth
- https://github.com/nrjdalal/better-start
- https://better-auth.com/docs/basic-usage#server-side-authentication: "To authenticate a user on the server, you can use the `auth.api` methods." + `import { auth } from "./auth"; // path to your Better Auth server instance`
- https://better-auth.com/docs/installation#create-client-instance
- https://github.com/better-auth/better-auth/blob/v1.5.5/packages/better-auth/src/crypto/password.ts
  - https://www.npmjs.com/package/@noble/hashes
- https://better-auth.com/docs/authentication/email-password#configuration
  - https://github.com/better-auth/better-auth/blob/v1.5.5/packages/better-auth/src/context/create-context.ts#L339-L340
  - `import { hashPassword, verifyPassword } from "../crypto/password";`
- [Default user](https://github.com/better-auth/better-auth/issues/3323) issue
- `disableSignUp: process.env.NODE_ENV !== "development"`
- https://helium.computer/ (browser)
  - https://github.com/imputnet/helium
  - https://formulae.brew.sh/cask/helium-browser
- https://akselmo.dev/posts/they-broke-my-server/
  - https://linkhut.org/
    - https://sr.ht/~mlb/linkhut/
  - https://scalie.computer/
- `Error [ERR_UNSUPPORTED_ESM_URL_SCHEME]: Only URLs with a scheme in: file, data, and node are supported by the default ESM loader. Received protocol 'cloudflare:'`
- https://better-auth.com/docs/concepts/database#option-1-let-database-generate-ids or https://better-auth.com/docs/concepts/database#option-3-consistent-custom-id-generator
- https://awjunaid.com/sqlite/the-autoincrement-keyword-in-sqlite/
- https://github.com/better-auth/better-auth/blob/764f63e1278aa8a1ab1c7a33c752ff045ed7bf75/packages/core/src/db/get-tables.ts
  - `✘ [ERROR] NOT NULL constraint failed: account.updated_at: SQLITE_CONSTRAINT`
- https://tanstack.com/form/latest/docs/overview
  - https://tanstack.com/form/latest/docs/framework/react/guides/ssr#using-tanstack-form-in-tanstack-start
  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype: "`multipart/form-data`: The type that allows file `<input>` element(s) to upload file data."
- https://github.com/better-auth/examples/tree/main/tanstack-example
- https://www.youtube.com/watch?v=Xn-gtHDsaPY
  - https://github.com/msitarzewski/agency-agents
  - https://www.promptfoo.dev/
    - https://www.promptfoo.dev/blog/promptfoo-joining-openai/
  - https://github.com/666ghj/MiroFish
  - https://github.com/pbakaus/impeccable
  - https://github.com/volcengine/OpenViking
  - https://github.com/p-e-w/heretic
    - https://github.com/YingfanWang/PaCMAP
  - https://github.com/karpathy/nanochat
  - https://www.recall.ai/
- https://tomasaltrui.dev/blog/tanstack-start-app-with-better-auth/: "The official recommendation by the better-auth team (and mine, of course) is to handle auth flow in the client side."
- https://github.com/TheOrcDev/tanstack-start-better-auth-starter
- https://github.com/mugnavo/tanstarter
  - https://github.com/mugnavo/tanstarter/blob/bae60cf90fcdc76ed87f14056e1869911697b6b4/src/routes/_guest/login.tsx
- https://catalins.tech/better-auth-with-hono-bun-typescript-react-vite/
- https://github.com/badlogic/pi-mono
- https://ui.shadcn.com/blocks/login
- https://react.dev/reference/react-dom/components/form#handle-form-submission-on-the-client
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input
- https://www.w3.org/WAI/tutorials/forms/labels/
- https://www.deque.com/blog/anatomy-of-accessible-forms-best-practices/
- https://a11y-guidelines.orange.com/en/articles/form/part1/
- https://barker.codes/blog/forms-in-react-19/#form-actions
- https://www.robinwieruch.de/react-form-data/
- `navigate({ to: "/" });` or `await navigate({ to: "/" });`
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
- https://upscrolled.com/en/
- https://repomix.com/
- https://better-auth.com/docs/authentication/email-password#sign-in
  - `const { data, error } = await authClient.signIn.email({`
  - `callbackURL: "https://example.com/callback"` + "An optional URL to redirect to after the user signs in. (optional)"
- https://tanstack.com/router/latest/docs/guide/data-loading#showing-a-pending-component:
  - "By default, TanStack Router will show a pending component for loaders that take longer than 1 second to resolve. This is an optimistic threshold that can be configured via: `routeOptions.pendingMs` or `routerOptions.defaultPendingMs`"
- https://tanstack.com/router/latest/docs/guide/data-loading#avoiding-pending-component-flash: "If you're using a pending component, the last thing you want is for your pending time threshold to be met, then have your data resolve immediately after, resulting in a jarring flash of your pending component. To avoid this, TanStack Router by default will show your pending component for at least 500ms."
- https://tanstack.com/router/latest/docs/api/router/RouterType#invalidate-method
  - "if `sync` is true, the promise returned by this function will only resolve once all loaders have finished."
- https://tanstack.com/router/latest/docs/api/router/matchRouteComponent
- https://robbiebartlett.github.io/a11y/html/development/links-and-buttons.html
- `const { user } = Route.useRouteContext();`
- https://better-auth.com/docs/authentication/email-password#sign-out
- https://www.youtube.com/watch?v=EUE8N6mqtGg
  - https://ghostty.org/docs/config/keybind: `ghostty +list-keybinds --default`
  - <kbd>cmd+d</kbd>: new_split:right
    - https://github.com/ghostty-org/ghostty/discussions/6687
    - <kbd>cmd+w</kbd>: close_surface (a.k.a. close split)
  - https://manaflow.com/
    - https://www.cmux.dev/
      - https://github.com/manaflow-ai/cmux
  - https://github.com/niri-wm/niri
    - https://niri-wm.github.io/niri/Getting-Started.html
  - https://github.com/mogenson/PaperWM.spoon
- https://getuikit.com/docs/description-list
- `<dl className="flex gap-2 flex-wrap">` + `<div className="rounded-md border-mist-200 border py-1 px-2 flex gap-2 whitespace-nowrap">`
- https://react-aria.adobe.com/Button
- https://headlessui.com/react/button
- https://catalyst.tailwindui.com/docs/button
- https://catalyst.tailwindui.com/docs/auth-layout
  - https://catalyst.tailwindui.com/demos/auth/login
  - "Welcome back"
  - "Sign in to your account"
- https://react-aria.adobe.com/Link
- https://www.canirun.ai/
  - https://ollama.com/library/qwen2.5-coder
  - https://ollama.com/library/qwen3.5: `ollama launch opencode --model qwen3.5:4b-q4_K_M`
  - https://www.canirun.ai/model/qwen2.5-coder-1.5b
  - https://www.canirun.ai/why
- https://www.youtube.com/watch?v=l8pQeVVaqpY
  - https://www.blacksmith.sh/
  - https://github.com/mitchellh/vouch
  - https://github.com/peakoss/anti-slop
  - https://github.com/AnswerOverflow/AnswerOverflow
  - https://agentscan.netlify.app/
- https://github.com/charmbracelet/crush
  - https://synthetic.new/landing/home
  - https://z.ai/subscribe
- https://rattler-build.prefix.dev/latest/: Moranga and Inter
- https://fonts.google.com/specimen/Podkova
- https://www.youtube.com/watch?v=ZM2c33qy16U
  - https://x.com/thdxr/status/2022574719694758147
  - https://en.wikipedia.org/wiki/Jevons_paradox
  - https://www.youtube.com/shorts/9EofCAVqghI
  - https://fortune.com/2026/02/13/tech-giant-ibm-tripling-gen-z-entry-level-hiring-according-to-chro-rewriting-jobs-ai-era/: "IBM is tripling the number of Gen Z entry-level jobs after finding the limits of AI adoption"
  - https://fortune.com/2026/02/19/sam-altman-confirms-ai-washing-job-displacement-layoffs/: "Sam Altman says the quiet part out loud, confirming some companies are 'AI washing' by blaming unrelated layoffs on the technology"
- https://fontsource.org/docs/getting-started/faq#cannot-find-module-fontsourcefont-name-or-its-corresponding-type-declarations
  - https://www.typescriptlang.org/tsconfig/#noUncheckedSideEffectImports
  - https://tanstack.com/start/latest/docs/framework/react/migrate-from-next-js#fonts
- https://tableplus.com/blog/2018/04/sqlite-delete-all-records-table.html: `DELETE FROM table_name;`
- https://www.youtube.com/watch?v=iG4AGQqbA6I:
  - https://chrome.dev/css-wrapped-2025/
  - https://open-ui.org/components/popover-hint.research.explainer/
  - https://developer.chrome.com/blog/popover-hint (for tooltips)
- https://piccalil.li/blog/squishy-button/: `.button:active { transform: scale(0.95); }`
- https://react-aria.adobe.com/usePress
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/hover#examples: `@media (hover: hover)`
  - https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference: "`hover`: `@media (hover: hover) { &:hover }`"
- https://tailwindcss.com/docs/outline-style#hiding-an-outline: `<input class="focus:border-indigo-600 focus:outline-hidden ..." type="text" />`
- `<div className="flex flex-col gap-1">`
- https://next.chakra-ui.com/docs/components/password-input
  - https://github.com/chakra-ui/chakra-ui/blob/771457bfa86ea45c4c3a0f17a10256d16db090cc/apps/compositions/src/ui/password-input.tsx#L68
  - `type={visible ? "text" : "password"}`
- https://bomb.sh/docs/clack/guides/examples/#form-validation-with-complex-types
- https://bomb.sh/docs/clack/packages/prompts/#password-input
- https://www.loadership.com/
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:autofill: "Note that the user agent style sheets of many browsers use `!important` in their style declarations, making some styles non-overridable. For example, Chrome has the following in its internal stylesheet: (...) This means that you cannot override the default `background-color`, `background-image`, or `color` values on selected autofilled input elements in your own rules, but you can override the `appearance`, and you can override these properties for the autofilled elements that aren't currently focused."
- `transform: scale(.98);`
- `hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-shadow duration-150`
- https://huggingface.co/Tesslate/OmniCoder-9B
- https://evilmartians.com/chronicles/hire-better-10x-faster-how-we-screen-50-engineers-weekly-with-no-hr
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete
  - https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
- https://kittygiraudel.com/2024/03/29/on-disabled-and-aria-disabled-attributes/
  - https://www.stefanjudis.com/notes/disabled-vs-aria-disabled-on-form-elements/
- https://css-tricks.com/making-disabled-buttons-more-inclusive/
- https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter
- https://docs.cypress.io/app/guides/accessibility-testing
  - https://docs.cypress.io/app/guides/accessibility-testing#In-test-plugins
  - https://www.npmjs.com/package/wick-a11y
  - https://github.com/sclavijosuero/wick-a11y
- https://github.com/dequelabs/axe-core-npm
  - https://www.npmjs.com/package/@axe-core/cli
  - https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md
  - https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md
  - https://playwright.dev/docs/accessibility-testing
  - https://playwright.dev/docs/auth
- https://react.dev/reference/react/useActionState#use-with-a-form
- https://www.sajadevo.com/blog/form-handling-in-react-19
- https://reactuse.com/blog/react-19-hooks-guide/
- https://github.com/childrentime/reactuse
- https://github.com/emilkowalski/skill/blob/7ebc9b7a6c62a027caf6f4eafede288495c05dda/skills/emil-design-eng/SKILL.md
  - "| No `:active` state on button | `transform: scale(0.97)` on `:active` | Buttons must feel responsive to press |"
  - "Add `transform: scale(0.97)` on `:active`. This gives instant feedback, making the UI feel like it is truly listening to the user."
    - `.button { transition: transform 160ms ease-out; }`
    - `.button:active { transform: scale(0.97); }`
  - `.button { transition: transform 160ms ease-out; } .button:active { transform: scale(0.97); } .button-content { transition: filter 200ms ease, opacity 200ms ease; } .button-content.transitioning { filter: blur(2px); opacity: 0.7; }`
  - "| Button press feedback | 100-160ms |"
- https://github.com/lirantal/npm-security-best-practices?tab=readme-ov-file#1-disable-post-install-scripts
- https://www.npmjs.com/package/cross-keychain
  - https://github.com/magarcia/cross-keychain
- https://www.npmjs.com/package/native-keychain
  - https://github.com/Mikescops/node-native-keychain
- https://github.com/dotenvx/dotenvx
- https://developer.1password.com/docs/cli/secret-references/
  - https://github.com/lirantal/npm-security-best-practices?tab=readme-ov-file#7-no-plaintext-secrets-in-env-files
  - https://developer.1password.com/docs/cli/get-started/
  - https://developers.cloudflare.com/workers/configuration/environment-variables/#local-development-with-secrets

## Commands

```bash
npx gitpick TanStack/router/tree/main/examples/react/start-bare start-bare
```

```bash
npx gitpick TanStack/router/tree/main/examples/react/start-tailwind-v4 start-tailwind-v4
```

```bash
npx gitpick TanStack/router/tree/main/examples/react/start-basic-cloudflare start-basic-cloudflare
```

```bash
npm create cloudflare@latest start-cloudflare -- --framework=tanstack-start
```

```bash
npm install zod@3
```

```bash
npm install \
@better-auth/drizzle-adapter \
@fontsource-variable/inter \
@tanstack/react-router \
@tanstack/react-start \
better-auth \
date-fns \
drizzle-orm \
react \
react-dom \
zod \
&& npm install -D \
@clack/prompts \
@cloudflare/vite-plugin \
@tailwindcss/vite \
@types/react \
@types/react-dom \
@vitejs/plugin-react@4 \
auth \
better-sqlite3 \
drizzle-kit \
tailwindcss \
typescript \
vite \
vite-tsconfig-paths@5 \
wrangler
```

```bash
npm install -D "@types/node@$(cat .nvmrc | cut -d . -f 1)"
```

```bash
npm install -D "@types/node@$(cat .nvmrc | cut -d . -f 1-2)"
```

```bash
openssl rand -base64 32
```

```bash
npx @better-auth/cli secret
```

```bash
rsync -a --exclude={'.git','.DS_Store','.env'} ~/Documents/GitHub/my-projects/ ~/Documents/my-projects-open-code
```

## Snippets

```html
<table
  class="block w-full overflow-x-auto md:table min-w-full border-separate border-spacing-0 rounded-lg border border-gray-300 text-left text-sm text-gray-700"
>
  <thead class="bg-gray-100">
    <tr>
      <th
        scope="col"
        class="rounded-tl-lg border-b border-gray-300 px-6 py-4 font-medium whitespace-nowrap"
      >
        Name
      </th>
      <th
        scope="col"
        class="border-b border-gray-300 px-6 py-4 font-medium whitespace-nowrap"
      >
        Role
      </th>
      <th
        scope="col"
        class="rounded-tr-lg border-b border-gray-300 px-6 py-4 font-medium whitespace-nowrap"
      >
        Email
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border-b border-gray-200 px-6 py-4 whitespace-nowrap">
        Alice Johnson
      </td>
      <td class="border-b border-gray-200 px-6 py-4 whitespace-nowrap">
        Developer
      </td>
      <td class="border-b border-gray-200 px-6 py-4 whitespace-nowrap">
        alice@example.com
      </td>
    </tr>
    <tr>
      <td class="rounded-bl-lg px-6 py-4 whitespace-nowrap">Bob Smith</td>
      <td class="px-6 py-4 whitespace-nowrap">Designer</td>
      <td class="rounded-br-lg px-6 py-4 whitespace-nowrap">bob@example.com</td>
    </tr>
  </tbody>
</table>
```

- https://github.com/daniel-d7a/hono-drizzle-cloudflare_d1-better_auth-starter/blob/8ee4cc366c7eecfefa4120e0330d83f3ecce4b0f/drizzle.config.ts

```ts
import { Config, defineConfig } from "drizzle-kit";
import fs from "fs";
import path from "path";
import { env } from "./src/env";

function getLocalD1DB() {
  try {
    const basePath = path.resolve(
      ".wrangler/state/v3/d1/miniflare-D1DatabaseObject",
    );
    const dbFile = fs.readdirSync(basePath).find((x) => x.endsWith(".sqlite"));

    if (!dbFile) {
      throw new Error(`.sqlite file not found in ${basePath}`);
    }

    const url = path.resolve(basePath, dbFile);
    return url;
  } catch (err: any) {
    console.log(`Error resolving local D1 DB: ${err.message}`);
    return "";
  }
}

const devConfig = {
  schema: "./src/db/schema/*",
  out: "./src/db/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: getLocalD1DB(),
  },
} satisfies Config;

const prodConfig = {
  schema: "./src/db/schema/*",
  out: "./src/db/migrations",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: env.CLOUDFLARE_ACCOUNT_ID,
    databaseId: env.CLOUDFLARE_D1_DB_ID,
    token: env.CLOUDFLARE_API_TOKEN,
  },
} satisfies Config;

const testConfig = {
  schema: "./src/db/schema/*",
  out: "./src/db/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: env.TEST_DB_URL || "testing.sqlite",
  },
} satisfies Config;

export default defineConfig(
  env.NODE_ENV === "test"
    ? testConfig
    : env.NODE_ENV === "dev"
      ? devConfig
      : prodConfig,
);
```

- https://github.com/stolinski/graffiti/blob/b949842b74d7a5f7a58467e7f185143d18b41af0/src/lib/drop-in.css#L218-L227
- https://graffiti-ui.com/base

```css
--teal: oklch(0.82 0.08 185);

/* Teal scale */
--teal-1: oklch(from var(--teal) l c h / 0.1);
--teal-2: oklch(from var(--teal) l c h / 0.2);
--teal-3: oklch(from var(--teal) l c h / 0.3);
--teal-4: oklch(from var(--teal) l c h / 0.4);
--teal-5: oklch(from var(--teal) l c h / 0.5);
--teal-6: oklch(from var(--teal) l c h / 0.6);
--teal-7: oklch(from var(--teal) l c h / 0.75);
--teal-8: oklch(from var(--teal) l c h / 0.9);
--teal-9: var(--teal);
```

- https://graffiti-ui.com/ui-blocks

```css
--timeline-marker-color: var(--success);
background: linear-gradient(
  to bottom,
  oklch(from var(--success) calc(l + 0.08) c h),
  var(--success)
);
border-color: oklch(from var(--success) calc(l - 0.08) calc(c * 1.1) h);
color: var(--white);
box-shadow:
  inset 0 1px 2px #ffffff4d,
  0 0 0 3px color-mix(in oklch, var(--success) 20%, transparent),
  0 4px 12px -2px color-mix(in oklch, var(--success) 40%, transparent),
  0 8px 20px -4px color-mix(in oklch, var(--success) 25%, transparent);
```

- https://react.dev/reference/react-dom/components/form#display-a-pending-state-during-form-submission

```jsx
import { useFormStatus } from "react-dom";
import { submitForm } from "./actions.js";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function Form({ action }) {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}

export default function App() {
  return <Form action={submitForm} />;
}
```

```tsx
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { useFormStatus } from "react-dom";

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
  const navigate = useNavigate();

  async function handleSignIn(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { authClient } = await import("~/utils/auth-client");

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
    <main className="flex min-h-screen items-center justify-center">
      <form
        action={handleSignIn}
        className="flex w-full max-w-xs flex-col gap-4 rounded-lg border p-6"
      >
        <h1 className="text-2xl font-bold">Login</h1>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded border p-2"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="rounded border p-2"
            aria-describedby="password-help"
          />
          <span id="password-help" className="text-sm text-gray-600">
            Must be at least 8 characters
          </span>
        </div>

        <SubmitButton />
      </form>
    </main>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-400"
    >
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}
```

```tsx
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { useTransition } from "react";

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
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  async function handleSignIn(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { authClient } = await import("~/utils/auth-client");

    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          startTransition(() => {
            navigate({ to: "/" });
          });
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      },
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form
        action={handleSignIn}
        className="flex w-full max-w-xs flex-col gap-4 rounded-lg border p-6"
      >
        <h1 className="text-2xl font-bold">Login</h1>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded border p-2"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="rounded border p-2"
            aria-describedby="password-help"
          />
          <span id="password-help" className="text-sm text-gray-600">
            Must be at least 8 characters
          </span>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </main>
  );
}
```

```tsx
import { createFileRoute, redirect } from "@tanstack/react-router";
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

    // 1. Await the authentication request instead of using callbacks
    // (Assuming you are using Better Auth which returns { data, error })
    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return; // Exits early on error, which sets 'pending' back to false
    }

    // 2. Await the navigation
    // This keeps the form action "pending" until the '/' route loaders finish.
    await navigate({ to: "/" });
  }

  return (
    <main>
      <form action={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </div>

        <SubmitButton />
      </form>
    </main>
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
```

```tsx
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
  pendingComponent: () => (
    <main>
      <p>Loading...</p>
    </main>
  ),
  pendingMs: 0,
});
```

```tsx
async function handleLogin(formData: FormData): Promise<void> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await authClient.signIn.email({
    email,
    password,
  });

  console.log(data, error);

  await navigate({ to: "/" });
}
```

```tsx
import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
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
  const router = useRouter();

  async function handleLogin(formData: FormData): Promise<void> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: async () => {
          await router.invalidate({ sync: true });
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      },
    );
  }

  return (
    <main>
      <form action={handleLogin}>
        <h1>Login</h1>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </div>

        <SubmitButton />
      </form>
    </main>
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
```

```tsx
function Login() {
  const navigate = Route.useNavigate();
  const [userName, setUserName] = useState<string | undefined>();

  async function handleLogin(formData: FormData): Promise<void> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: (ctx) => {
          setUserName(ctx.data.user.name);
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
          <HomeLoading name={userName} />
        ) : (
          <main>
            <form action={handleLogin}>{/* ... */}</form>
          </main>
        )
      }
    </MatchRoute>
  );
}

function Login() {
  const navigate = Route.useNavigate();
  let userName: string | undefined;

  async function handleLogin(formData: FormData): Promise<void> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: (ctx) => {
          userName = ctx.data.user.name;
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
          <HomeLoading name={userName} />
        ) : (
          <main>
            <form action={handleLogin}>{/* ... */}</form>
          </main>
        )
      }
    </MatchRoute>
  );
}
```

```css
@layer utilities {
  /* utility that creates a button-like element, which can be optionally selected */
  .button-base {
    --button-color: var(--tint);
    --button-background: oklch(
      from var(--button-color) var(--lightness-100) var(--chroma-100) h
    );
    --button-gradient: oklch(
      from var(--button-color) var(--lightness-200) var(--chroma-200) h
    );
    --button-border: oklch(
      from var(--button-color) var(--lightness-300) var(--chroma-300) h
    );
    --button-highlight: rgb(255 255 255 / 0.8);
    --button-shadow: oklch(
      from var(--button-color) var(--lightness-400) var(--chroma-400) h
    );
    --button-border-size: 1px;
    --button-text: oklch(
      from var(--button-color) var(--lightness-1400) var(--chroma-1400) h
    );
    --button-gradient-size: 8px;

    background: var(--button-background);
    color: var(--button-text);
    box-shadow:
      inset 0 -1px 0 var(--button-shadow),
      /* bottom shadow */ inset 0 0 0 var(--button-border-size)
        var(--button-border),
      /* border */ inset 0px calc(var(--button-border-size) + 1px) 0px
        var(--button-highlight),
      /* top specular highlight */ inset 0px
        calc(-1 * var(--button-gradient-size)) var(--button-gradient-size) -2px
        var(--button-gradient); /* inner gradient */
    outline: none;
    transition-property: background, color, scale, box-shadow;
    transition-duration: 200ms;
    will-change: scale;
    forced-color-adjust: none;
    -webkit-tap-highlight-color: transparent;

    @media (prefers-color-scheme: dark) {
      --button-shadow: oklch(
        from var(--button-color) var(--lightness-200) var(--chroma-200) h
      );
      --button-highlight: rgb(255 255 255 / 0.15);
      box-shadow:
        inset 0 var(--button-border-size) 0 var(--button-highlight),
        /* top specular highlight */ inset 0
          calc(-1 * var(--button-border-size)) 0 var(--button-shadow),
        /* bottom shadow */ inset 0 0 0 var(--button-border-size)
          var(--button-border),
        /* border */ inset 0 var(--button-gradient-size)
          var(--button-gradient-size) -2px var(--button-gradient); /* inner gradient */
    }

    &:where([data-pressed]) {
      --button-background: oklch(
        from var(--button-color) var(--lightness-200) var(--chroma-200) h
      );
    }

    &:where([data-focus-visible]) {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: 2px;
    }

    &:where([data-variant="secondary"]) {
      --button-color: var(--gray);
    }

    &:where([data-variant="quiet"]) {
      --button-background: none;
      --button-text: var(--text-color);
      box-shadow: 0 0 0 1px transparent;

      &:where([data-hovered], [data-pressed]) {
        --button-background: var(--tint-200);
        --button-text: var(--tint-1400);
        box-shadow: 0 0 0 1px var(--tint-200);
      }
    }

    &:where([data-selected]) {
      --button-background: oklch(from var(--button-color) 55% c h);
      --button-border: oklch(from var(--button-color) 50% c h);
      --button-gradient: var(--button-border);
      --button-highlight: rgb(255 255 255 / 0.2);
      --button-shadow: oklch(from var(--button-color) 30% c h);
      --button-text: var(--highlight-foreground);

      box-shadow:
        inset 0 -1px 0 var(--button-shadow),
        /* bottom shadow */ inset 0 0 0 1px var(--button-border),
        /* border */ inset 0 2px 0 var(--button-highlight),
        /* top specular highlight */ inset 0
          calc(-1 * var(--button-gradient-size)) var(--button-gradient-size)
          var(--button-gradient); /* inner gradient */

      @media (prefers-color-scheme: dark) {
        --button-highlight: rgb(255 255 255 / 0.4);
        --button-gradient: rgb(255 255 255 / 0.2);
        --button-shadow: var(--button-border);
        box-shadow:
          inset 0 1px 0 var(--button-highlight),
          /* top specular highlight */ inset 0 var(--button-gradient-size)
            var(--button-gradient-size) var(--button-gradient),
          /* inner gradient */ inset 0 0 0 1px var(--button-border); /* border */
      }

      &:where([data-pressed]) {
        --button-background: oklch(from var(--button-color) 50% c h);
      }
    }

    &:where([data-disabled]) {
      box-shadow: none;
      --button-background: var(--border-color-disabled);
      --button-text: var(--text-color-disabled);

      &:where([data-variant="quiet"]) {
        --button-background: none;
      }
    }

    @media (forced-colors: active) {
      --button-background: ButtonFace;
      --button-text: ButtonText;
      --button-border: ButtonBorder;
      box-shadow: inset 0 0 0 var(--button-border-size) var(--button-border);

      &:where([data-variant="quiet"]) {
        --button-border: transparent;
        &:where([data-hovered], [data-pressed]) {
          --button-border: ButtonBorder;
        }
      }

      &:where([data-selected]) {
        --button-background: Highlight;
        --button-text: HighlightText;
        --button-border: Highlight;
      }

      &:where([data-disabled]) {
        --button-background: ButtonFace;
        --button-text: GrayText;
        --button-border: GrayText;

        &:where([data-variant="quiet"]) {
          --button-border: transparent;
        }
      }
    }
  }

  /* utility that creates a small indicator, such as a checkbox, radio, switch, or slider thumb */
  .indicator {
    --indicator-color: var(--gray);
    --indicator-background: oklch(
      from var(--indicator-color) var(--lightness-100) var(--chroma-100) h
    );
    --indicator-border: oklch(
      from var(--indicator-color) var(--lightness-800) var(--chroma-800) h
    );
    --indicator-drop-shadow: 0 0;

    background: var(--indicator-background);
    box-shadow:
      inset 0 0 0 1px var(--indicator-border),
      /* border */ inset 0 2px 0 white,
      /* top specular highlight */ inset 0 -4px 2px
        oklch(from var(--indicator-color) 30% c h / 0.08),
      /* inner gradient */ var(--indicator-drop-shadow); /* optional drop shadow */
    will-change: scale;

    @media (prefers-color-scheme: dark) {
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.4),
        /* top specular highlight */ inset 0 4px 2px rgb(255 255 255 / 0.1),
        /* inner shadow */ inset 0 0 0 1px var(--indicator-border),
        /* border */ var(--indicator-drop-shadow); /* optional drop shadow */
    }

    @media (forced-colors: active) {
      --indicator-background: ButtonFace;
      --indicator-border: ButtonBorder;
      box-shadow: inset 0 0 0 1px var(--indicator-border);
    }

    &[data-pressed],
    [data-pressed] & {
      scale: 0.9;
    }

    [data-selected] > &,
    [data-indeterminate] > & {
      --indicator-color: var(--highlight-background);
      --indicator-background: var(--indicator-color);
      --indicator-highlight: rgb(255 255 255 / 0.3);
      --indicator-shadow: oklch(from var(--indicator-color) 45% c h);
      --indicator-border: var(--indicator-background);
      box-shadow:
        inset 0 -1px 0 var(--indicator-shadow),
        /* bottom shadow */ inset 0 0 0 1px var(--indicator-border),
        /* border */ inset 0 2px 0 var(--indicator-highlight),
        /* top specular highlight */ var(--indicator-drop-shadow); /* optional drop shadow */

      @media (prefers-color-scheme: dark) {
        --indicator-highlight: rgb(255 255 255 / 0.5);
        --indicator-gradient: rgb(255 255 255 / 0.12);
        box-shadow:
          inset 0 1px 0 var(--indicator-highlight),
          /* top specular highlight */ inset 0 4px 2px var(--indicator-gradient),
          /* inner gradient */ inset 0 0 0 1px var(--indicator-border),
          /* border */ var(--indicator-drop-shadow); /* optional drop shadow */
      }

      @media (forced-colors: active) {
        box-shadow: none;
      }
    }

    &[data-invalid],
    [data-invalid] > & {
      --indicator-color: var(--invalid-color);

      @media (forced-colors: active) {
        --indicator-border: var(--invalid-color);
      }
    }

    &[data-focus-visible],
    [data-focus-visible] > & {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: 2px;
    }

    &[data-disabled],
    [data-disabled] > & {
      background: var(--field-background);
      box-shadow: inset 0 0 0 1px var(--border-color-disabled);
    }
  }

  /* utility that creates an inset effect, used for form fields, slider/progress tracks, etc. */
  .inset {
    --inset-background: var(--field-background);
    --inset-border: var(--border-color);
    --inset-border-size: 1px;
    --inset-shadow-offset: 2px;
    --inset-shadow-size: 4px;

    background: var(--inset-background);
    box-shadow:
      inset 0 0 0 var(--inset-border-size) var(--inset-border),
      /* border */ inset 0 var(--inset-shadow-offset) var(--inset-shadow-size)
        rgb(0 0 0 / 0.15),
      /* inner shadow */ 0 1px 0 var(--gray-50); /* bottom specular highlight */
    transition: box-shadow 200ms;
    forced-color-adjust: none;

    @media (prefers-color-scheme: dark) {
      --inset-border: var(--gray-200);
      --border-color-hover: var(--gray-300);
      --inset-highlight: var(--gray-400);
      --inset-shadow-size: 6px;
      box-shadow:
        inset 0 calc(-1 * var(--inset-border-size)) 0 var(--inset-highlight),
        /* bottom specular highlight */ inset 0 0 0 var(--inset-border-size)
          var(--inset-border),
        /* border */ inset 0 1px var(--inset-shadow-size) rgb(0 0 0); /* inner shadow */
    }

    &:where([data-hovered], [data-pressed]) {
      --inset-border: var(--border-color-hover);
    }

    @media (forced-colors: active) {
      --inset-border: ButtonBorder;
      box-shadow: inset 0 0 0 var(--inset-border-size) var(--inset-border);
    }

    &:where([data-invalid]) {
      --inset-border: var(--invalid-color);
      --inset-highlight: var(--inset-border);
    }

    &:where([data-disabled]) {
      box-shadow: inset 0 0 0 1px var(--border-color-disabled);
    }

    &.track {
      --inset-shadow-offset: 1px;
      --inset-shadow-size: 3px;

      @media (prefers-color-scheme: light) {
        --inset-background: var(--gray-300);
        --inset-border: var(--gray-500);
        --inset-border-size: 0.5px;
      }

      @media (forced-colors: active) {
        --inset-background: Field;
        --inset-border: ButtonBorder;
        --inset-border-size: 1px;
      }
    }
  }
}
```

```css
@import "./theme.css";
@import "./utilities.css";

.react-aria-Button {
  border: none;
  border-radius: var(--radius);
  appearance: none;
  font: var(--font-size) system-ui;
  font-weight: 500;
  margin: 0;
  height: var(--spacing-8);
  padding: 0 var(--spacing-3);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
  -webkit-tap-highlight-color: transparent;

  > svg {
    width: calc(var(--spacing) * 4.5);
    height: calc(var(--spacing) * 4.5);
  }

  &:has(> svg:only-child) {
    width: var(--spacing-8);
    flex-shrink: 0;
    padding: 0;
    border-radius: 9999px;
  }

  &[data-pressed] {
    scale: 0.95;
  }

  .react-aria-ProgressBar {
    @media (prefers-color-scheme: dark) {
      --highlight-background: var(--gray-1600);
    }
  }

  kbd {
    font: var(--font-size-sm) system-ui;
    background: var(--highlight-hover);
    border: 0.5px solid var(--tint-500);
    padding: 0 var(--spacing-1);
    border-radius: var(--radius-sm);
    margin-inline-start: var(--spacing-3);
  }
}
```

- https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after

```html
<input
  type="email"
  id="email-3"
  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline focus:outline-sky-500 sm:text-sm"
  placeholder="you@example.com"
  name="email"
/>
```

```tsx
import { createFileRoute, redirect } from "@tanstack/react-router";
import { intlFormatDistance } from "date-fns";

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
          className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded py-1 px-2 -my-1 -mx-2 hover:bg-mist-950/5 transition-transform duration-200 active:scale-95 will-change-[scale]"
        >
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
                className="border-b border-mist-200 font-medium text-right px-6 py-3"
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
                    <a
                      href={repo.url}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-xs"
                    >
                      {repo.name}
                    </a>
                  </th>
                  <td className="text-left px-6 py-4">
                    <time dateTime={repo.updatedAt.toISOString()}>
                      {intlFormatDistance(repo.updatedAt, today, {
                        locale: "en-US",
                      })}
                    </time>
                  </td>
                  <td className="text-right px-6 py-4 tabular-nums">
                    {repo.openIssues}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}
```

```tsx
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
                    className="w-full rounded-lg py-2 px-4 placeholder:text-mist-400 border focus:border-blue-500 focus:outline focus:outline-blue-500 border-mist-200"
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
                    className="w-full rounded-lg py-2 px-4 placeholder:text-mist-400 border focus:border-blue-500 focus:outline focus:outline-blue-500 border-mist-200"
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
      className="mt-2 w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-lg py-2 hover:bg-mist-900/95 bg-mist-900 font-medium text-white transition-transform duration-200 active:scale-95 will-change-[scale]"
    >
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}
```

```tsx
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 w-full cursor-pointer disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 py-2 hover:bg-mist-900/95 bg-mist-900 font-medium text-white active:scale-[0.97] transition-transform duration-100 ease-out will-change-transform"
    >
      <span
        className={`transition-[filter,opacity] duration-150 ease-out ${
          pending ? "blur-sm opacity-50" : "blur-0 opacity-100"
        }`}
      >
        {pending ? "Logging in..." : "Login"}
      </span>
    </button>
  );
}
```
