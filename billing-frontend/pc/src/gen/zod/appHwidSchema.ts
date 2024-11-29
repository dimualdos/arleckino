import { z } from "zod"

export const appHwidSchema = z.object({ pairing_code: z.string().min(1), hwid: z.string().min(1) })
