import { z } from "zod"

export const channelGroupDragNDropSchema = z.object({ prev_group_id: z.number().nullable() })
