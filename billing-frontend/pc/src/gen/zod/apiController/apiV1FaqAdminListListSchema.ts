import { z } from "zod"
import { faqListSchema } from "../faqListSchema"

export const apiV1FaqAdminListListQueryParamsSchema = z
  .object({
    is_published: z.string().optional(),
    language: z.string().optional(),
    search: z.string().describe(`A search term.`).optional(),
    page: z.number().describe(`A page number within the paginated result set.`).optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
  })
  .optional()
export const apiV1FaqAdminListListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => faqListSchema)),
})
