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
    issues_url: z
      .string()
      .url()
      // TODO: Move to transformed schema
      .transform((url) => url.replace("{/number}", "")),
    name: z.string(),
    pushed_at: z.coerce.date(),
  })
  .transform((data) => ({
    description: data.description,
    id: data.id,
    name: data.name,
    updatedAt: data.pushed_at,
    url: data.html_url,
    source: "github" as const,
  }));

export const glRepoSchema = z
  .object({
    description: z.string(),
    id: z.number().int(),
    name: z.string(),
    web_url: z.string().url(),
    last_activity_at: z.coerce.date(),
  })
  .transform((data) => ({
    description: data.description,
    id: data.id,
    name: data.name,
    updatedAt: data.last_activity_at,
    url: data.web_url,
    source: "gitlab" as const,
  }));

const issueSchema = z.object({
  title: z.string(),
  html_url: z.string().url(),
  id: z.number().int(),
  number: z.number().int(),
});
export const issuesSchema = z.array(issueSchema);
