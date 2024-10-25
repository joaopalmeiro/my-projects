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
