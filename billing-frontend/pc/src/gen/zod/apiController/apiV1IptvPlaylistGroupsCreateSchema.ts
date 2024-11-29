import { z } from "zod"
import { channelGroupSchema } from "../channelGroupSchema"

export const apiV1IptvPlaylistGroupsCreatePathParamsSchema = z.object({ playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsCreate201Schema = z.lazy(() => channelGroupSchema)
export const apiV1IptvPlaylistGroupsCreateMutationRequestSchema = z
  .lazy(() => channelGroupSchema)
  .schema.and(z.object({ id: z.never(), channels_count: z.never(), count_selected: z.never(), created_date: z.never(), modified_date: z.never() }))
export const apiV1IptvPlaylistGroupsCreateMutationResponseSchema = z.lazy(() => channelGroupSchema)
