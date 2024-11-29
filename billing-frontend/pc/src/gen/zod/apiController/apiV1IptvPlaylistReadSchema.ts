import { z } from "zod"
import { playlistSchema } from "../playlistSchema"

export const apiV1IptvPlaylistReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1IptvPlaylistReadQueryResponseSchema = z.lazy(() => playlistSchema)
