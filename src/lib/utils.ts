import { parse } from "node:url";
import { BASE_GH_URL } from "@/lib/constants";

export function repo2api(repoUrl: string): URL {
  const parsedUrl = parse(repoUrl);

  switch (parsedUrl?.hostname) {
    case "github.com":
      return new URL(`/repos${parsedUrl.pathname}`, BASE_GH_URL);
    default:
      throw new Error(`Invalid repo URL: ${repoUrl}`);
  }
}
