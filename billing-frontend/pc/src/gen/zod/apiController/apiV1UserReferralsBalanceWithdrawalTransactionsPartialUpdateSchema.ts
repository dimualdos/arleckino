import { z } from "zod"
import { withdrawalTransactionUpdateSchema } from "../withdrawalTransactionUpdateSchema"

export const apiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdateMutationRequestSchema = z.lazy(() => withdrawalTransactionUpdateSchema)
export const apiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdateMutationResponseSchema = z.lazy(() => withdrawalTransactionUpdateSchema)
