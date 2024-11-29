import { z } from "zod"

export const tagSchema = z.object({ id: z.number().readonly().optional(), title: z.string().min(1).max(255), dt_create: z.string().datetime().optional(), dt_update: z.string().datetime().optional() })
