import { z } from "zod"
import { paymentTransactionSchema } from "../paymentTransactionSchema"

export const apiV1BillingPaymentTransactionReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1BillingPaymentTransactionReadQueryResponseSchema = z.lazy(() => paymentTransactionSchema)
