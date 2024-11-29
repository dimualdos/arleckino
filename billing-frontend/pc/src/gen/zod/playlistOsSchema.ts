import { playlistTypeSchema } from "./playlistTypeSchema"
import { z } from "zod"

export const playlistOsSchema = z.object({ name: z.string().min(1).max(255), playlist_types: z.array(z.lazy(() => playlistTypeSchema)).optional() })
