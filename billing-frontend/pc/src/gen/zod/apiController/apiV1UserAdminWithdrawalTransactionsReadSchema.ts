import { z } from "zod"
import { withdrawalTransactionSchema } from "../withdrawalTransactionSchema"

export const apiV1UserAdminWithdrawalTransactionsReadPathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this withdrawal transaction.`) })
export const apiV1UserAdminWithdrawalTransactionsReadQueryResponseSchema = z.lazy(() => withdrawalTransactionSchema)
