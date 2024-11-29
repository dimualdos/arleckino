import { z } from "zod"
import { channelGroupUpdateSchema } from "../channelGroupUpdateSchema"

export const apiV1IptvPlaylistGroupsUpdatePathParamsSchema = z.object({ id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsUpdateMutationRequestSchema = z.lazy(() => channelGroupUpdateSchema)
export const apiV1IptvPlaylistGroupsUpdateMutationResponseSchema = z.lazy(() => channelGroupUpdateSchema)
