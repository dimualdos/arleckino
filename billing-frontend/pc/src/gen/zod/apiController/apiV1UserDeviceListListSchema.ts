import { z } from "zod"
import { deviceSchema } from "../deviceSchema"

export const apiV1UserDeviceListListQueryParamsSchema = z
  .object({
    search: z.string().optional(),
    subscription_type: z.string().optional(),
    server_id: z.string().optional(),
    selected: z.string().optional(),
    page: z.number().describe(`A page number within the paginated result set.`).optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
  })
  .optional()
export const apiV1UserDeviceListListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => deviceSchema)),
})
