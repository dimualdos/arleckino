import { z } from "zod"

export const myPasswordResetConfirmSchema = z.object({ new_password1: z.string().min(1).max(128), new_password2: z.string().min(1).max(128), uid: z.string().min(1), token: z.string().min(1) })
