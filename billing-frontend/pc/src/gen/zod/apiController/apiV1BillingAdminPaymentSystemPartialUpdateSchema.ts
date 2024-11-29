import { z } from "zod"
import { paymentSystemDetailSchema } from "../paymentSystemDetailSchema"

export const apiV1BillingAdminPaymentSystemPartialUpdatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Payment system.`) })
export const apiV1BillingAdminPaymentSystemPartialUpdateMutationRequestSchema = z.lazy(() => paymentSystemDetailSchema).schema.and(z.object({ id: z.never() }))
export const apiV1BillingAdminPaymentSystemPartialUpdateMutationResponseSchema = z.lazy(() => paymentSystemDetailSchema)
