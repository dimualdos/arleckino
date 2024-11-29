import { z } from "zod"
import { withdrawalTransactionApproveSchema } from "../withdrawalTransactionApproveSchema"

export const apiV1UserAdminWithdrawalTransactionsApproveCreatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this withdrawal transaction.`) })
export const apiV1UserAdminWithdrawalTransactionsApproveCreate201Schema = z.lazy(() => withdrawalTransactionApproveSchema)
export const apiV1UserAdminWithdrawalTransactionsApproveCreateMutationRequestSchema = z.lazy(() => withdrawalTransactionApproveSchema)
export const apiV1UserAdminWithdrawalTransactionsApproveCreateMutationResponseSchema = z.lazy(() => withdrawalTransactionApproveSchema)
