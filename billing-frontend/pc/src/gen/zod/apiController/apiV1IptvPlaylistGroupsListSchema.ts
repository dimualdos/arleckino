import { z } from "zod"
import { channelGroupSchema } from "../channelGroupSchema"

export const apiV1IptvPlaylistGroupsListPathParamsSchema = z.object({ playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsListQueryParamsSchema = z
  .object({
    is_hidden: z.string().optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
    offset: z.number().describe(`The initial index from which to return the results.`).optional(),
  })
  .optional()
export const apiV1IptvPlaylistGroupsListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => channelGroupSchema)),
})
