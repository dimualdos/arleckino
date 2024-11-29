import { z } from "zod"
import { playlistSchema } from "../playlistSchema"

export const apiV1IptvPlaylistPartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1IptvPlaylistPartialUpdateMutationRequestSchema = z.lazy(() => playlistSchema).schema.and(z.object({ id: z.never() }))
export const apiV1IptvPlaylistPartialUpdateMutationResponseSchema = z.lazy(() => playlistSchema)
