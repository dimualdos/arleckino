import { z } from "zod"

export const validateEmailSchema = z.object({ email: z.string().email().min(1) })
