import { z } from "zod"

export const templateContentImageSchema = z.object({ id: z.number().readonly().optional(), image: z.string().readonly().optional(), template_content: z.number() })
