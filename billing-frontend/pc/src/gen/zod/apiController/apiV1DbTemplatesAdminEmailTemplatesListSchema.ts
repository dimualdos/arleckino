import { z } from "zod"
import { emailTemplateSchema } from "../emailTemplateSchema"

export const apiV1DbTemplatesAdminEmailTemplatesListQueryParamsSchema = z
  .object({
    q: z.string().optional(),
    page: z.number().describe(`A page number within the paginated result set.`).optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
  })
  .optional()
export const apiV1DbTemplatesAdminEmailTemplatesListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => emailTemplateSchema)),
})
