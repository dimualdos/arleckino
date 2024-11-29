import { z } from "zod"

export const userProfileChangeEmailRequestNewSchema = z.object({ email: z.string().email().min(1), uid: z.string().min(1), token: z.string().min(1) })
