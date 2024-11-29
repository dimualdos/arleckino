import { z } from "zod"
import { adminChannelSchema } from "../adminChannelSchema"

export const apiV1IptvAdminChannelListListQueryParamsSchema = z
  .object({
    group_id: z.string().optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
    offset: z.number().describe(`The initial index from which to return the results.`).optional(),
  })
  .optional()
export const apiV1IptvAdminChannelListListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => adminChannelSchema)),
})
