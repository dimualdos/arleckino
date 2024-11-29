import { z } from "zod"
import { adminUserDeviceSchema } from "../adminUserDeviceSchema"

export const apiV1UserAdminUserDeviceListPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserAdminUserDeviceListQueryParamsSchema = z
  .object({ limit: z.number().describe(`Number of results to return per page.`).optional(), offset: z.number().describe(`The initial index from which to return the results.`).optional() })
  .optional()
export const apiV1UserAdminUserDeviceListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => adminUserDeviceSchema)),
})
