import { z } from "zod"

export const apiV1UserAdminStatisticsFinanceListQueryParamsSchema = z
  .object({
    d_begin: z.string().optional(),
    d_end: z.string().optional(),
    t_type: z.string().optional(),
    q: z.string().optional(),
    ordering: z.string().describe(`Which field to use when ordering the results.`).optional(),
    page: z.number().describe(`A page number within the paginated result set.`).optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
  })
  .optional()
export const apiV1UserAdminStatisticsFinanceListQueryResponseSchema = z.any()
