import { z } from "zod"

export const actionGroupSchema = z.object({ id: z.number().readonly().optional(), title: z.string().min(1).max(255), label: z.string().min(1).max(255), public: z.boolean().optional() })
