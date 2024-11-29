import { z } from "zod"
import { playlistDragNDropGroupSchema } from "../playlistDragNDropGroupSchema"

export const apiV1IptvPlaylistGroupsDragAndDropCreatePathParamsSchema = z.object({ id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsDragAndDropCreate201Schema = z.lazy(() => playlistDragNDropGroupSchema)
export const apiV1IptvPlaylistGroupsDragAndDropCreateMutationRequestSchema = z.lazy(() => playlistDragNDropGroupSchema)
export const apiV1IptvPlaylistGroupsDragAndDropCreateMutationResponseSchema = z.lazy(() => playlistDragNDropGroupSchema)
