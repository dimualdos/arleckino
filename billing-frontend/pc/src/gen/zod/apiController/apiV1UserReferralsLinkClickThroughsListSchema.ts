import { z } from "zod"
import { referralLinkClickThroughSchema } from "../referralLinkClickThroughSchema"

export const apiV1UserReferralsLinkClickThroughsListQueryParamsSchema = z
  .object({
    status: z.string().optional(),
    d_begin: z.string().optional(),
    d_end: z.string().optional(),
    page: z.number().describe(`A page number within the paginated result set.`).optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
  })
  .optional()
export const apiV1UserReferralsLinkClickThroughsListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => referralLinkClickThroughSchema)),
})
