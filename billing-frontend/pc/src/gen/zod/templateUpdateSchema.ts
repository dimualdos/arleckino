import { z } from "zod"

export const templateUpdateSchema = z.object({ email_template: z.number().nullish() })
