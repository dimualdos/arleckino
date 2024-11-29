import { z } from "zod"

export const adminGroupUserCreateSchema = z.object({ email: z.string().email().min(1) })
