import { z } from "zod"

export const playlistDragNDropGroupSchema = z.object({ prev_group_id: z.number().nullish() })
