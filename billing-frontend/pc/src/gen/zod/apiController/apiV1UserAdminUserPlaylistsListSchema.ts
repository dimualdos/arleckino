import { z } from "zod"
import { playlistSchema } from "../playlistSchema"

export const apiV1UserAdminUserPlaylistsListPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserAdminUserPlaylistsListQueryResponseSchema = z.array(z.lazy(() => playlistSchema))
