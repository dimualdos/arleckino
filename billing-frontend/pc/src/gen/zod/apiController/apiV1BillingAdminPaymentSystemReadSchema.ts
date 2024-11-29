import { z } from "zod"
import { paymentSystemDetailSchema } from "../paymentSystemDetailSchema"

export const apiV1BillingAdminPaymentSystemReadPathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Payment system.`) })
export const apiV1BillingAdminPaymentSystemReadQueryResponseSchema = z.lazy(() => paymentSystemDetailSchema)
