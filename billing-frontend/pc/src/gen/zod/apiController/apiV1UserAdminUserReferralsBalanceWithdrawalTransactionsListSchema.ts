import { z } from "zod"
import { withdrawalTransactionSchema } from "../withdrawalTransactionSchema"

export const apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryParamsSchema = z
  .object({ limit: z.number().describe(`Number of results to return per page.`).optional(), offset: z.number().describe(`The initial index from which to return the results.`).optional() })
  .optional()
export const apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => withdrawalTransactionSchema)),
})
