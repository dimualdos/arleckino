import { z } from "zod"
import { paymentSystemDetailSchema } from "../paymentSystemDetailSchema"

export const apiV1BillingAdminPaymentSystemCreateCreate201Schema = z.lazy(() => paymentSystemDetailSchema)
export const apiV1BillingAdminPaymentSystemCreateCreateMutationRequestSchema = z.lazy(() => paymentSystemDetailSchema).schema.and(z.object({ id: z.never() }))
export const apiV1BillingAdminPaymentSystemCreateCreateMutationResponseSchema = z.lazy(() => paymentSystemDetailSchema)
