import { z } from "zod"

export const apiV1BillingAdminPaymentSystemEnableCreate201Schema = z.any()
export const apiV1BillingAdminPaymentSystemEnableCreateMutationResponseSchema = z.any()
export const apiV1BillingAdminPaymentSystemEnableCreatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Payment system.`) })
