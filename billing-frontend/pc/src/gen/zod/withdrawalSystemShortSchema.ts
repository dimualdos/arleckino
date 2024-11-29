import { z } from "zod"

export const withdrawalSystemShortSchema = z.object({ id: z.number().readonly().optional(), name: z.string().min(1).max(255), is_disabled: z.boolean().optional() })
