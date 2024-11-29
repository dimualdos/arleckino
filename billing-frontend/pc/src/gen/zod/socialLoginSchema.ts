import { z } from "zod"

export const socialLoginSchema = z.object({ access_token: z.string().optional(), code: z.string().optional() })
