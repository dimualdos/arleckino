import { z } from "zod"

export const deviceCheckSchema = z.object({ selected: z.boolean() })
