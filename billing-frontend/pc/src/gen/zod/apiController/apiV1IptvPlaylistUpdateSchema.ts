import { z } from "zod"
import { playlistSchema } from "../playlistSchema"

export const apiV1IptvPlaylistUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1IptvPlaylistUpdateMutationRequestSchema = z.lazy(() => playlistSchema).schema.and(z.object({ id: z.never() }))
export const apiV1IptvPlaylistUpdateMutationResponseSchema = z.lazy(() => playlistSchema)
