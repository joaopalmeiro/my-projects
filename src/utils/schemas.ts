import { z } from "zod";

// GitHub:

export const ghRepoSchema = z.object({
  id: z.number().int(),
  open_issues_count: z.number().int(),
  pushed_at: z.coerce.date(),
});

const ghIssueSchema = z.object({
  pull_request: z
    .object({
      merged_at: z.string().nullable().optional(),
      diff_url: z.string().nullable(),
      html_url: z.string().nullable(),
      patch_url: z.string().nullable(),
      url: z.string().nullable(),
    })
    .optional(),
  closed_at: z.coerce.date(),
  repository: z.object({
    name: z.string(),
    html_url: z.httpUrl(),
  }),
});

export const ghIssuesSchema = z.array(ghIssueSchema);

// GitLab:

export const glRepoSchema = z.object({
  id: z.number().int(),
  open_issues_count: z.number().int(),
  last_activity_at: z.coerce.date(),
});

const glIssueSchema = z.object({
  closed_at: z.coerce.date(),
  web_url: z.httpUrl(),
});

export const glIssuesSchema = z.array(glIssueSchema);
