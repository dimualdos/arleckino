import { z } from "zod"
import { playlistGroupChannelDragNDropSchema } from "../playlistGroupChannelDragNDropSchema"

export const apiV1IptvPlaylistGroupsChannelsDragAndDropCreatePathParamsSchema = z.object({ group_pk: z.string(), id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsChannelsDragAndDropCreate201Schema = z.lazy(() => playlistGroupChannelDragNDropSchema)
export const apiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationRequestSchema = z.lazy(() => playlistGroupChannelDragNDropSchema)
export const apiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationResponseSchema = z.lazy(() => playlistGroupChannelDragNDropSchema)
