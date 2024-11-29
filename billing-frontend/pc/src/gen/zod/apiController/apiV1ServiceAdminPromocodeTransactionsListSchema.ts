import { z } from "zod"
import { promocodeTransactionSchema } from "../promocodeTransactionSchema"

export const apiV1ServiceAdminPromocodeTransactionsListPathParamsSchema = z.object({ id: z.string() })
export const apiV1ServiceAdminPromocodeTransactionsListQueryParamsSchema = z
  .object({ limit: z.number().describe(`Number of results to return per page.`).optional(), offset: z.number().describe(`The initial index from which to return the results.`).optional() })
  .optional()
export const apiV1ServiceAdminPromocodeTransactionsListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => promocodeTransactionSchema)),
})
