import { z } from "zod"
import { referralSchema } from "../referralSchema"

export const apiV1UserAdminUserReferralsListPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserAdminUserReferralsListQueryParamsSchema = z
  .object({ limit: z.number().describe(`Number of results to return per page.`).optional(), offset: z.number().describe(`The initial index from which to return the results.`).optional() })
  .optional()
export const apiV1UserAdminUserReferralsListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => referralSchema)),
})
