import { z } from "zod"

export const apiV1HelpdeskCasesReadingCreate201Schema = z.any()
export const apiV1HelpdeskCasesReadingCreateMutationResponseSchema = z.any()
export const apiV1HelpdeskCasesReadingCreatePathParamsSchema = z.object({ case_id: z.string() })
