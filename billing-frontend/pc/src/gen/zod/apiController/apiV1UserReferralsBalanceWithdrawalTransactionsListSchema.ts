import { z } from "zod"
import { withdrawalTransactionSchema } from "../withdrawalTransactionSchema"

export const apiV1UserReferralsBalanceWithdrawalTransactionsListQueryParamsSchema = z
  .object({
    status: z.string().optional(),
    withdrawal_system: z.string().optional(),
    d_begin: z.string().optional(),
    d_end: z.string().optional(),
    page: z.number().describe(`A page number within the paginated result set.`).optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
  })
  .optional()
export const apiV1UserReferralsBalanceWithdrawalTransactionsListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => withdrawalTransactionSchema)),
})
