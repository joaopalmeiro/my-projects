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

export const repoSchema = z.object({
  description: z.string(),
  html_url: z.string().url(),
  id: z.number().int(),
  issues_url: z
    .string()
    .url()
    .transform((url) => url.replace("{/number}", "")),
  name: z.string(),
  pushed_at: z.coerce.date(),
});

const issueSchema = z.object({
  title: z.string(),
  html_url: z.string().url(),
  id: z.number().int(),
  number: z.number().int(),
});
export const issuesSchema = z.array(issueSchema);
