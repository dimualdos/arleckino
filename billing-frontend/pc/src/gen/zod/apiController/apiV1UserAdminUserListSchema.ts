import { z } from "zod"
import { adminUserListSchema } from "../adminUserListSchema"

export const apiV1UserAdminUserListQueryParamsSchema = z
  .object({
    q: z.string().optional(),
    ordering: z.string().describe(`Which field to use when ordering the results.`).optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
    offset: z.number().describe(`The initial index from which to return the results.`).optional(),
  })
  .optional()
export const apiV1UserAdminUserListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => adminUserListSchema)),
})
