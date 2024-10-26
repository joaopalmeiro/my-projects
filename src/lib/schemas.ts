import { z } from "zod";

export const projectsSchema = z.object({
  records: z.array(
    z.object({
      fields: z.object({
        Repo: z.string().url(),
      }),
      id: z.number().int(),
    }),
  ),
});
export type Projects = z.infer<typeof projectsSchema>;

export const ghRepoSchema = z
  .object({
    description: z.string(),
    html_url: z.string().url(),
    id: z.number().int(),
    issues_url: z.string().url(),
    name: z.string(),
    pushed_at: z.coerce.date(),
  })
  .transform((data) => ({
    description: data.description,
    id: data.id,
    issuesUrl: data.issues_url.replace("{/number}", ""),
    name: data.name,
    updatedAt: data.pushed_at,
    url: data.html_url,
    source: "github" as const,
  }));

export const glRepoSchema = z
  .object({
    _links: z.object({ issues: z.string().url() }),
    description: z.string(),
    id: z.number().int(),
    last_activity_at: z.coerce.date(),
    name: z.string(),
    web_url: z.string().url(),
  })
  .transform((data) => ({
    description: data.description,
    id: data.id,
    issuesUrl: data._links.issues,
    name: data.name,
    updatedAt: data.last_activity_at,
    url: data.web_url,
    source: "gitlab" as const,
  }));

const ghIssueSchema = z.object({
  title: z.string(),
  html_url: z.string().url(),
  id: z.number().int(),
  number: z.number().int(),
});
export const ghIssuesSchema = z.array(ghIssueSchema);

const glIssueSchema = z.object({
  id: z.number().int(),
  iid: z.number().int(),
  title: z.string(),
  web_url: z.string().url(),
});
export const glIssuesSchema = z.array(glIssueSchema);
