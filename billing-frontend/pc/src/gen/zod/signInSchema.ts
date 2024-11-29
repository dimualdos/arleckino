import { z } from "zod"

export const signInSchema = z.object({ username: z.string().email().min(1), password: z.string().min(1), fingerprint_token: z.string().min(1).nullish(), captcha_token: z.string().min(1).nullish() })
