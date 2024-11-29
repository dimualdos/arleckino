import { z } from "zod"
import { logsActionsSchema } from "../logsActionsSchema"

export const apiV1ActionsAdminLogsTypeReadPathParamsSchema = z.object({ actionTypeId: z.string() })
export const apiV1ActionsAdminLogsTypeReadQueryParamsSchema = z
  .object({ limit: z.number().describe(`Number of results to return per page.`).optional(), offset: z.number().describe(`The initial index from which to return the results.`).optional() })
  .optional()
export const apiV1ActionsAdminLogsTypeReadQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => logsActionsSchema)),
})
