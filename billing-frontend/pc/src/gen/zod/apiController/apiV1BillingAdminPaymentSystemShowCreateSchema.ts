import { z } from "zod"

export const apiV1BillingAdminPaymentSystemShowCreate201Schema = z.any()
export const apiV1BillingAdminPaymentSystemShowCreateMutationResponseSchema = z.any()
export const apiV1BillingAdminPaymentSystemShowCreatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Payment system.`) })
