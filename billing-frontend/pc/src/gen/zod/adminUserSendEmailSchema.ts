import { z } from "zod"

export const adminUserSendEmailSchema = z.object({ subject: z.string().min(1), message: z.string().min(1) })
