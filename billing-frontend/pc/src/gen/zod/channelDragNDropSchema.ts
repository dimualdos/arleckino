import { z } from "zod"

export const channelDragNDropSchema = z.object({ prev_channel_id: z.number().nullable() })
