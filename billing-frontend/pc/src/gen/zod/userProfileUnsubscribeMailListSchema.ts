import { z } from "zod"

export const userProfileUnsubscribeMailListSchema = z.object({ token: z.string().min(1) })
