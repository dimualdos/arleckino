import { z } from "zod"

export const hideChannelGroupOnPlaylistSchema = z.object({ is_hidden: z.boolean().optional() })
