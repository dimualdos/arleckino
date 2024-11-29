import { z } from "zod"

export const emailConfirmationSchema = z.object({ email: z.string().email().min(1) })
