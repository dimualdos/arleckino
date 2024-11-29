import { z } from "zod"

export const verifyEmailSchema = z.object({ key: z.string().min(1) })
