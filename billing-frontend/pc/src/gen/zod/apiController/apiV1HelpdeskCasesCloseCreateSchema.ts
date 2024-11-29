import { z } from "zod"

export const apiV1HelpdeskCasesCloseCreate201Schema = z.any()
export const apiV1HelpdeskCasesCloseCreateMutationResponseSchema = z.any()
export const apiV1HelpdeskCasesCloseCreatePathParamsSchema = z.object({ case_id: z.string() })
