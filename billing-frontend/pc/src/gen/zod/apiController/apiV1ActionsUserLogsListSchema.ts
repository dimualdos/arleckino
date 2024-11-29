import { z } from "zod"
import { logsActionsSchema } from "../logsActionsSchema"

export const apiV1ActionsUserLogsListQueryParamsSchema = z
  .object({
    group: z.string().optional(),
    d_begin: z.string().optional(),
    d_end: z.string().optional(),
    q: z.string().optional(),
    page: z.number().describe(`A page number within the paginated result set.`).optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
  })
  .optional()
export const apiV1ActionsUserLogsListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => logsActionsSchema)),
})
