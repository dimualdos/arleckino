import { z } from "zod"

export const userFrontendLanguageSchema = z.object({ frontend_language: z.string().min(1) })
