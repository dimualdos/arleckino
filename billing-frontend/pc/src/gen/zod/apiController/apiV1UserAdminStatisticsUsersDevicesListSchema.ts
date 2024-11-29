import { z } from "zod"

export const apiV1UserAdminStatisticsUsersDevicesListQueryParamsSchema = z
  .object({ d_begin: z.string().optional(), d_end: z.string().optional(), ordering: z.string().describe(`Which field to use when ordering the results.`).optional() })
  .optional()
export const apiV1UserAdminStatisticsUsersDevicesListQueryResponseSchema = z.any()
