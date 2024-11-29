import { z } from "zod"
import { domainResponseSchema } from "../domainResponseSchema"

export const apiV1ServiceAdminDomainListListQueryParamsSchema = z
  .object({ page: z.number().describe(`A page number within the paginated result set.`).optional(), limit: z.number().describe(`Number of results to return per page.`).optional() })
  .optional()
export const apiV1ServiceAdminDomainListListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => domainResponseSchema)),
})
