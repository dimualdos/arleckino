import { z } from "zod"
import { playlistGroupChannelMoveSchema } from "../playlistGroupChannelMoveSchema"

export const apiV1IptvPlaylistGroupsChannelsMoveUpdatePathParamsSchema = z.object({ group_pk: z.string(), id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsChannelsMoveUpdateMutationRequestSchema = z.lazy(() => playlistGroupChannelMoveSchema)
export const apiV1IptvPlaylistGroupsChannelsMoveUpdateMutationResponseSchema = z.lazy(() => playlistGroupChannelMoveSchema)
