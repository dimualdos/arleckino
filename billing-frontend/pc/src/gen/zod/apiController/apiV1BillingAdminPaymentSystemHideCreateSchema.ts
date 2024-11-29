import { z } from "zod"

export const apiV1BillingAdminPaymentSystemHideCreate201Schema = z.any()
export const apiV1BillingAdminPaymentSystemHideCreateMutationResponseSchema = z.any()
export const apiV1BillingAdminPaymentSystemHideCreatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Payment system.`) })
