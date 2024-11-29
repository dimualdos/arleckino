import { z } from "zod"
import { actionGroupSchema } from "../actionGroupSchema"

export const apiV1ActionsAdminGroupsListQueryParamsSchema = z
  .object({ limit: z.number().describe(`Number of results to return per page.`).optional(), offset: z.number().describe(`The initial index from which to return the results.`).optional() })
  .optional()
export const apiV1ActionsAdminGroupsListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => actionGroupSchema)),
})
