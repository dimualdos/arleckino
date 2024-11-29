import { z } from "zod"

export const apiV1BillingPaymentTransactionConfirmListPathParamsSchema = z.object({ payment_system_id: z.string() })
export const apiV1BillingPaymentTransactionConfirmListQueryParamsSchema = z
  .object({ limit: z.number().describe(`Number of results to return per page.`).optional(), offset: z.number().describe(`The initial index from which to return the results.`).optional() })
  .optional()
export const apiV1BillingPaymentTransactionConfirmListQueryResponseSchema = z.any()
