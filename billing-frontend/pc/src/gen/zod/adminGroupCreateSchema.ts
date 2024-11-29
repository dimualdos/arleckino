import { z } from "zod"

export const adminGroupCreateSchema = z.object({ id: z.number().readonly().optional(), name: z.string().min(1).max(255), menu_items: z.array(z.number()).optional() })
