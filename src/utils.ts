import { BASE_GH_URL } from "./constants";

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
