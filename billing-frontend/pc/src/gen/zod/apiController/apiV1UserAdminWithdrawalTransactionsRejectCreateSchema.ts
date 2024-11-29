import { z } from "zod"
import { withdrawalTransactionRejectSchema } from "../withdrawalTransactionRejectSchema"

export const apiV1UserAdminWithdrawalTransactionsRejectCreatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this withdrawal transaction.`) })
export const apiV1UserAdminWithdrawalTransactionsRejectCreate201Schema = z.lazy(() => withdrawalTransactionRejectSchema)
export const apiV1UserAdminWithdrawalTransactionsRejectCreateMutationRequestSchema = z.lazy(() => withdrawalTransactionRejectSchema)
export const apiV1UserAdminWithdrawalTransactionsRejectCreateMutationResponseSchema = z.lazy(() => withdrawalTransactionRejectSchema)
