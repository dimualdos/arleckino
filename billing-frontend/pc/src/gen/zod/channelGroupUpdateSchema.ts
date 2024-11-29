import { z } from "zod"

export const channelGroupUpdateSchema = z.object({ name: z.string().min(1).max(255) })
