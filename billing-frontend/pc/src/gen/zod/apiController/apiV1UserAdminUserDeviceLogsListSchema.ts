import { z } from "zod"

export const apiV1UserAdminUserDeviceLogsListPathParamsSchema = z.object({ deviceId: z.string(), id: z.string() })
export const apiV1UserAdminUserDeviceLogsListQueryParamsSchema = z
  .object({ page: z.number().describe(`A page number within the paginated result set.`).optional(), limit: z.number().describe(`Number of results to return per page.`).optional() })
  .optional()
export const apiV1UserAdminUserDeviceLogsListQueryResponseSchema = z.any()
