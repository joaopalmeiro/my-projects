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
