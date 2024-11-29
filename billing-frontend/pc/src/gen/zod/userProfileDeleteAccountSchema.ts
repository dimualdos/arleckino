import { z } from "zod"

export const userProfileDeleteAccountSchema = z.object({ token: z.string().min(1) })
