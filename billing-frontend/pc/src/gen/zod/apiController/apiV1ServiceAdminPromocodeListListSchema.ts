import { z } from "zod"
import { promocodeSchema } from "../promocodeSchema"

export const apiV1ServiceAdminPromocodeListListQueryParamsSchema = z
  .object({
    promocode_type: z.string().optional(),
    is_active: z.string().optional(),
    code: z.string().optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
    offset: z.number().describe(`The initial index from which to return the results.`).optional(),
  })
  .optional()
export const apiV1ServiceAdminPromocodeListListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => promocodeSchema)),
})
