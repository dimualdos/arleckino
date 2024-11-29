import { z } from "zod"

export const validatePasswordChangeTokenSchema = z.object({ uid: z.string().min(1), token: z.string().min(1) })
