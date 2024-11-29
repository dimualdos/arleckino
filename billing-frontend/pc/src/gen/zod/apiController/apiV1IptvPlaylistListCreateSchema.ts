import { z } from "zod"
import { createPlaylistSchema } from "../createPlaylistSchema"

export const apiV1IptvPlaylistListCreate201Schema = z.lazy(() => createPlaylistSchema)
export const apiV1IptvPlaylistListCreateMutationRequestSchema = z.lazy(() => createPlaylistSchema).schema.and(z.object({ id: z.never() }))
export const apiV1IptvPlaylistListCreateMutationResponseSchema = z.lazy(() => createPlaylistSchema)
