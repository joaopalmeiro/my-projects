import { parse } from "node:url";
import type { Projects } from "@/lib/schemas";
import { Collapsible } from "@ark-ui/react/collapsible";
import { Dialog } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { compareAsc, intlFormatDistance } from "date-fns";

import {
  BASE_CB_URL,
  BASE_GH_URL,
  BASE_GL_URL,
  CB_HOST,
  DEV_CACHE,
  GH_HOST,
  GL_HOST,
} from "@/lib/constants";
import {
  cbIssuesSchema,
  cbRepoSchema,
  ghIssuesSchema,
  ghRepoSchema,
  glIssuesSchema,
  glRepoSchema,
  projectsSchema,
} from "@/lib/schemas";

export default async function Home() {
  const response = await fetch(
    `http://localhost:8484/api/docs/${process.env.DOC_ID}/tables/${process.env.TABLE_ID}/records`,
    {
      headers: [["Authorization", `Bearer ${process.env.GRIST_API_KEY}`]],
      ...DEV_CACHE,
    },
  );

  const rawData = await response.json();
  const data = projectsSchema.parse(rawData);

  return (
    <>
      <header className="flex items-center justify-between px-4 pb-12 pt-24 text-gray-900">
        <h1 className="font-semibold">My Projects</h1>

        <Dialog.Root preventScroll={true}>
          <Dialog.Trigger className="group -m-2 rounded p-2 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px] focus-visible:outline-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="size-5 fill-gray-700 group-hover:fill-gray-900 group-focus-visible:fill-gray-900"
              aria-hidden="true"
            >
              <path
                d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                opacity="0.1"
              />
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z" />
            </svg>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop className="fixed left-0 top-0 h-screen w-screen" />
            <Dialog.Positioner className="fixed right-0 top-0 flex h-dvh w-screen items-center justify-center sm:w-96">
              <Dialog.Content className="grid size-full divide-y bg-white text-gray-900 shadow-lg grid-drawer data-[state=closed]:animate-drawer-out-right data-[state=open]:animate-drawer-in-right [&[hidden]]:hidden">
                <ark.div className="grid items-center gap-1 p-4 grid-drawer-header [grid-area:header] sm:p-6">
                  <Dialog.Title className="font-semibold [grid-area:title]">
                    Configuration
                  </Dialog.Title>
                  <Dialog.Description className="text-sm text-gray-700 [grid-area:description]">
                    Adjust project layout.
                  </Dialog.Description>
                  <Dialog.CloseTrigger className="group -m-2 rounded p-2 [grid-area:close] hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px] focus-visible:outline-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 fill-gray-700 group-hover:fill-gray-900 group-focus-visible:fill-gray-900"
                      viewBox="0 0 256 256"
                      aria-hidden="true"
                    >
                      <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                    </svg>
                  </Dialog.CloseTrigger>
                </ark.div>
                <ark.div className="flex flex-col overflow-auto p-4 [grid-area:body] sm:p-6">
                  TODO
                </ark.div>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </header>

      <main className="px-4 pb-24 text-gray-900">
        <ProjectList data={data} />
      </main>
    </>
  );
}

interface ProjectListProps {
  data: Projects;
}

async function ProjectList(props: ProjectListProps) {
  const repos = await Promise.all(
    props.data.records.map(async (project) => {
      const parsedUrl = parse(project.fields.Repo);

      if (parsedUrl.hostname === GH_HOST && parsedUrl.pathname) {
        const apiUrl = new URL(`repos${parsedUrl.pathname}`, BASE_GH_URL);

        const response = await fetch(apiUrl, {
          headers: [
            ["Accept", "application/vnd.github+json"],
            ["Authorization", `Bearer ${process.env.GH_PAT}`],
            ["X-GitHub-Api-Version", "2022-11-28"],
          ],
          ...DEV_CACHE,
        });

        const rawData = await response.json();
        return ghRepoSchema.parse(rawData);
      }

      if (parsedUrl.hostname === GL_HOST && parsedUrl.pathname) {
        const projectId = encodeURIComponent(parsedUrl.pathname.slice(1));
        const apiUrl = new URL(`projects/${projectId}`, BASE_GL_URL);

        const response = await fetch(apiUrl, {
          headers: [["Authorization", `Bearer ${process.env.GL_PAT}`]],
          ...DEV_CACHE,
        });

        const rawData = await response.json();
        return glRepoSchema.parse(rawData);
      }

      if (parsedUrl.hostname === CB_HOST && parsedUrl.pathname) {
        const apiUrl = new URL(`repos${parsedUrl.pathname}`, BASE_CB_URL);

        const response = await fetch(apiUrl, {
          headers: [["Authorization", `token ${process.env.CB_PAT}`]],
          ...DEV_CACHE,
        });

        const rawData = await response.json();
        return cbRepoSchema.parse(rawData);
      }

      throw new Error(`Invalid repo URL: ${project.fields.Repo}`);
    }),
  );

  const today = new Date();
  const sortedRepos = repos.toSorted((a, b) => {
    return compareAsc(a.updatedAt, b.updatedAt);
  });

  return (
    <ul className="space-y-6">
      {sortedRepos.map((repo) => {
        return (
          <li key={repo.id}>
            <Collapsible.Root>
              <h3 className="mb-1 text-lg font-medium">
                <Collapsible.Trigger>{repo.name}</Collapsible.Trigger>
              </h3>

              <div className="flex gap-2">
                <time
                  dateTime={repo.updatedAt.toISOString()}
                  className="flex items-center gap-1 text-sm text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    className="size-3.5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  {intlFormatDistance(repo.updatedAt, today, { locale: "en-GB" })}
                </time>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-1 text-gray-700 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900 focus-visible:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px] focus-visible:outline-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    className="size-3.5"
                    aria-hidden="true"
                  >
                    <path d="M8 7c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z" />
                    <path d="M8 8.5c1.84 0 3.579-.37 4.914-1.037A6.33 6.33 0 0 0 14 6.78V8c0 1.657-2.686 3-6 3S2 9.657 2 8V6.78c.346.273.72.5 1.087.683C4.42 8.131 6.16 8.5 8 8.5Z" />
                    <path d="M8 12.5c1.84 0 3.579-.37 4.914-1.037.366-.183.74-.41 1.086-.684V12c0 1.657-2.686 3-6 3s-6-1.343-6-3v-1.22c.346.273.72.5 1.087.683C4.42 12.131 6.16 12.5 8 12.5Z" />
                  </svg>

                  <span className="text-sm">Repo</span>
                </a>
              </div>

              <Collapsible.Content>
                <Issues url={repo.issuesUrl} />
              </Collapsible.Content>
            </Collapsible.Root>
          </li>
        );
      })}
    </ul>
  );
}

interface Props {
  url: string;
}

async function fetchIssues(url: string) {
  if (url.startsWith(BASE_GH_URL)) {
    const response = await fetch(url, {
      headers: [
        ["Accept", "application/vnd.github+json"],
        ["Authorization", `Bearer ${process.env.GH_PAT}`],
        ["X-GitHub-Api-Version", "2022-11-28"],
      ],
      ...DEV_CACHE,
    });

    const rawData = await response.json();
    return ghIssuesSchema.parse(rawData);
  }

  if (url.startsWith(BASE_GL_URL)) {
    const response = await fetch(`${url}?state=opened`, {
      headers: [["Authorization", `Bearer ${process.env.GL_PAT}`]],
      ...DEV_CACHE,
    });

    const rawData = await response.json();
    return glIssuesSchema.parse(rawData);
  }

  if (url.startsWith(BASE_CB_URL)) {
    const response = await fetch(`${url}?state=open`, {
      headers: [["Authorization", `token ${process.env.CB_PAT}`]],
      ...DEV_CACHE,
    });

    const rawData = await response.json();
    return cbIssuesSchema.parse(rawData);
  }

  throw new Error(`Invalid issue API URL: ${url}`);
}

async function Issues(props: Props) {
  const issues = await fetchIssues(props.url);

  if (issues.length === 0) {
    return (
      <p className="italic line-through decoration-gray-400 decoration-from-font">
        No open issues.
      </p>
    );
  }

  const maxNumberDigits = Math.max(...issues.map((issue) => issue.number)).toString().length;

  return (
    <ul className="mt-2 space-y-0.5">
      {issues.map((issue) => {
        return (
          <li key={issue.id}>
            <a
              href={issue.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-start gap-1 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
            >
              <div className="mt-1 rounded border border-gray-100 bg-gradient-to-r from-gray-100 to-gray-50 px-0.5 font-mono text-xs text-gray-700">
                <span>#</span>
                <span className="text-gray-300">
                  {"0".repeat(maxNumberDigits - issue.number.toString().length)}
                </span>
                <span>{issue.number}</span>
              </div>

              <p className="text-balance">
                <span className="decoration-from-font underline-offset-2 break-anywhere group-hover:underline group-focus-visible:no-underline">
                  {issue.title}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="ml-px inline-block size-3.5 fill-gray-400 align-baseline group-hover:fill-gray-900"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
