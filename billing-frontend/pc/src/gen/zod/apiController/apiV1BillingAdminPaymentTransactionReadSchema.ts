import { z } from "zod"
import { paymentTransactionSchema } from "../paymentTransactionSchema"

export const apiV1BillingAdminPaymentTransactionReadPathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this payment transaction.`) })
export const apiV1BillingAdminPaymentTransactionReadQueryResponseSchema = z.lazy(() => paymentTransactionSchema)
