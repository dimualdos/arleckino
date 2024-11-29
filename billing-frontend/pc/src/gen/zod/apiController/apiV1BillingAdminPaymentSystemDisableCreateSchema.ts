import { z } from "zod"

export const apiV1BillingAdminPaymentSystemDisableCreate201Schema = z.any()
export const apiV1BillingAdminPaymentSystemDisableCreateMutationResponseSchema = z.any()
export const apiV1BillingAdminPaymentSystemDisableCreatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Payment system.`) })
