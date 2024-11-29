import { z } from "zod"

export const promocodeApplySchema = z.object({ code: z.string().min(1) })
