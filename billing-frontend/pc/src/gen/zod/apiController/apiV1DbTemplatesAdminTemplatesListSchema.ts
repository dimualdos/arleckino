import { z } from "zod"
import { templateSchema } from "../templateSchema"

export const apiV1DbTemplatesAdminTemplatesListQueryParamsSchema = z
  .object({
    type: z.string().optional(),
    q: z.string().optional(),
    page: z.number().describe(`A page number within the paginated result set.`).optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
  })
  .optional()
export const apiV1DbTemplatesAdminTemplatesListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => templateSchema)),
})
