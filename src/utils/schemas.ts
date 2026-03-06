import { z } from "zod";

export const ghRepoSchema = z.object({
  id: z.number().int(),
  open_issues_count: z.number().int(),
  pushed_at: z.coerce.date(),
});
