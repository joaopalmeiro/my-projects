import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import * as React from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "My Projects",
      },
      {
        name: "author",
        content: "João Palmeiro",
      },
      {
        name: "description",
        content: "An overview of my projects to manage their maintenance.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body className="px-6 py-12 text-mist-700 selection:bg-mist-900 selection:text-white">
        <div className="mx-auto flex max-w-prose flex-col gap-8">
          {children}
        </div>
        <Scripts />
      </body>
    </html>
  );
}
