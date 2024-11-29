import { z } from "zod"

export const userProfileChangeEmailSchema = z.object({ token: z.string().min(1) })
