import { z } from "zod";

export const projectSchema = z.object({
  description: z.string(),
  html_url: z.string().url(),
  id: z.number().int(),
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