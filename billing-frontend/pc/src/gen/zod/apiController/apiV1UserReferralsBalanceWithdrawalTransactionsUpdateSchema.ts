import { z } from "zod"
import { withdrawalTransactionUpdateSchema } from "../withdrawalTransactionUpdateSchema"

export const apiV1UserReferralsBalanceWithdrawalTransactionsUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationRequestSchema = z.lazy(() => withdrawalTransactionUpdateSchema)
export const apiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationResponseSchema = z.lazy(() => withdrawalTransactionUpdateSchema)
