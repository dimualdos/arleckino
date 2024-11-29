import { z } from "zod"
import { paymentSystemSchema } from "../paymentSystemSchema"

export const apiV1BillingPaymentSystemReadPathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Payment system.`) })
export const apiV1BillingPaymentSystemReadQueryResponseSchema = z.lazy(() => paymentSystemSchema)
