import { z } from "zod"
import { paymentTransactionSchema } from "../paymentTransactionSchema"

export const apiV1BillingAdminPaymentTransactionListListQueryParamsSchema = z
  .object({
    transaction_type: z.string().optional(),
    d_begin: z.string().optional(),
    d_end: z.string().optional(),
    user_id: z.string().optional(),
    q: z.string().optional(),
    ordering: z.string().describe(`Which field to use when ordering the results.`).optional(),
    page: z.number().describe(`A page number within the paginated result set.`).optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
  })
  .optional()
export const apiV1BillingAdminPaymentTransactionListListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => paymentTransactionSchema)),
})
