import { z } from "zod"
import { withdrawalTransactionSchema } from "../withdrawalTransactionSchema"

export const apiV1UserReferralsBalanceTransactionsListQueryParamsSchema = z
  .object({ page: z.number().describe(`A page number within the paginated result set.`).optional(), limit: z.number().describe(`Number of results to return per page.`).optional() })
  .optional()
export const apiV1UserReferralsBalanceTransactionsListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => withdrawalTransactionSchema)),
})
