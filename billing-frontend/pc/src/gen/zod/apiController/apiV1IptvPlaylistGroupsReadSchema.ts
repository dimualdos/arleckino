import { z } from "zod"
import { channelGroupAndChannelsSchema } from "../channelGroupAndChannelsSchema"

export const apiV1IptvPlaylistGroupsReadPathParamsSchema = z.object({ id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsReadQueryResponseSchema = z.lazy(() => channelGroupAndChannelsSchema)
