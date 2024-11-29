import { z } from "zod"

export const tagCreateSchema = z.object({ id: z.number().readonly().optional(), title: z.string().min(1).max(255) })
