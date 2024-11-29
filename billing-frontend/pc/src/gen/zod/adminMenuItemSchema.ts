import { z } from "zod"

export const adminMenuItemSchema = z.object({ id: z.number().readonly().optional(), code: z.string().min(1).max(150), name: z.string().min(1).max(255), is_hidden: z.boolean().optional() })
