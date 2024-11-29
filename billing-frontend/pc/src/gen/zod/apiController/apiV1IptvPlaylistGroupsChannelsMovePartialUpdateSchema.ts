import { z } from "zod"
import { playlistGroupChannelMoveSchema } from "../playlistGroupChannelMoveSchema"

export const apiV1IptvPlaylistGroupsChannelsMovePartialUpdatePathParamsSchema = z.object({ group_pk: z.string(), id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationRequestSchema = z.lazy(() => playlistGroupChannelMoveSchema)
export const apiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationResponseSchema = z.lazy(() => playlistGroupChannelMoveSchema)
