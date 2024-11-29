import { z } from "zod"
import { withdrawalTransactionCreateSchema } from "../withdrawalTransactionCreateSchema"

export const apiV1UserReferralsBalanceWithdrawalTransactionsCreate201Schema = z.lazy(() => withdrawalTransactionCreateSchema)
export const apiV1UserReferralsBalanceWithdrawalTransactionsCreateMutationRequestSchema = z.lazy(() => withdrawalTransactionCreateSchema)
export const apiV1UserReferralsBalanceWithdrawalTransactionsCreateMutationResponseSchema = z.lazy(() => withdrawalTransactionCreateSchema)
