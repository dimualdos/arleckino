import { z } from "zod"

export const playlistSchema = z.object({ id: z.number().readonly().optional(), title: z.string().min(1).max(255), is_default: z.boolean().optional() })
