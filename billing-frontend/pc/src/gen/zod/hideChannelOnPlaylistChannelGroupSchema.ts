import { z } from "zod"

export const hideChannelOnPlaylistChannelGroupSchema = z.object({ is_hidden: z.boolean().optional() })
