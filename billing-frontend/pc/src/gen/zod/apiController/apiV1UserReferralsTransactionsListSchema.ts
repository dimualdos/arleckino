import { z } from "zod"
import { referralTransactionSchema } from "../referralTransactionSchema"

export const apiV1UserReferralsTransactionsListQueryParamsSchema = z
  .object({
    d_begin: z.string().optional(),
    d_end: z.string().optional(),
    page: z.number().describe(`A page number within the paginated result set.`).optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
  })
  .optional()
export const apiV1UserReferralsTransactionsListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => referralTransactionSchema)),
})
