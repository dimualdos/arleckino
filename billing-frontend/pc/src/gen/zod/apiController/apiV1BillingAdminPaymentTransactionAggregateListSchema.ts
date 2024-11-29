import { z } from "zod"

export const apiV1BillingAdminPaymentTransactionAggregateListQueryParamsSchema = z.object({ d_begin: z.string().optional(), d_end: z.string().optional(), user_id: z.string().optional() }).optional()
export const apiV1BillingAdminPaymentTransactionAggregateListQueryResponseSchema = z.any()
