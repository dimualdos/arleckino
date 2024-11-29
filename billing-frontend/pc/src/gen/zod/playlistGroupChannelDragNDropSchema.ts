import { z } from "zod"

export const playlistGroupChannelDragNDropSchema = z.object({ prev_channel_id: z.number().nullish() })
