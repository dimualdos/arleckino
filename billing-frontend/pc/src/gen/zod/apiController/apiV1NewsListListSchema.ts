import { z } from "zod"
import { newsListSchema } from "../newsListSchema"

export const apiV1NewsListListQueryParamsSchema = z
  .object({
    is_news_pages: z.string().optional(),
    is_pushes: z.string().optional(),
    search: z.string().describe(`A search term.`).optional(),
    page: z.number().describe(`A page number within the paginated result set.`).optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
  })
  .optional()
export const apiV1NewsListListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => newsListSchema)),
})
