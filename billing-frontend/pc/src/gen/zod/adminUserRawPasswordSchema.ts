import { z } from "zod"

export const adminUserRawPasswordSchema = z.object({ decode_pin: z.string().min(1) })
