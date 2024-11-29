import { z } from "zod"

export const deviceBindPlaylistTypeSchema = z.object({ playlist_type_id: z.number() })
