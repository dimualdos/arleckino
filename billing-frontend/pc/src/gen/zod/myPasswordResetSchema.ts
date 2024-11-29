import { z } from "zod"

export const myPasswordResetSchema = z.object({ email: z.string().email().min(1), fingerprint_token: z.string().min(1).nullish(), captcha_token: z.string().min(1).nullish() })
