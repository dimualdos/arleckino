import { z } from "zod"
import { withdrawalTransactionUpdateSchema } from "../withdrawalTransactionUpdateSchema"

export const apiV1UserReferralsBalanceWithdrawalTransactionsReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserReferralsBalanceWithdrawalTransactionsReadQueryResponseSchema = z.lazy(() => withdrawalTransactionUpdateSchema)
