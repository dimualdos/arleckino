import { z } from "zod"
import { paymentSystemDetailSchema } from "../paymentSystemDetailSchema"

export const apiV1BillingAdminPaymentSystemUpdatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Payment system.`) })
export const apiV1BillingAdminPaymentSystemUpdateMutationRequestSchema = z.lazy(() => paymentSystemDetailSchema).schema.and(z.object({ id: z.never() }))
export const apiV1BillingAdminPaymentSystemUpdateMutationResponseSchema = z.lazy(() => paymentSystemDetailSchema)
