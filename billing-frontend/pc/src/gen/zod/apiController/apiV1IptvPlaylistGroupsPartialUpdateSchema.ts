import { z } from "zod"
import { channelGroupUpdateSchema } from "../channelGroupUpdateSchema"

export const apiV1IptvPlaylistGroupsPartialUpdatePathParamsSchema = z.object({ id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsPartialUpdateMutationRequestSchema = z.lazy(() => channelGroupUpdateSchema)
export const apiV1IptvPlaylistGroupsPartialUpdateMutationResponseSchema = z.lazy(() => channelGroupUpdateSchema)
