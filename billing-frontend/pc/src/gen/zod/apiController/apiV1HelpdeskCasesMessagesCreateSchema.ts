import { z } from "zod"
import { helpDeskCaseMessageCreateSchema } from "../helpDeskCaseMessageCreateSchema"

export const apiV1HelpdeskCasesMessagesCreatePathParamsSchema = z.object({ case_id: z.string() })
export const apiV1HelpdeskCasesMessagesCreate201Schema = z.lazy(() => helpDeskCaseMessageCreateSchema)
export const apiV1HelpdeskCasesMessagesCreateMutationRequestSchema = z.lazy(() => helpDeskCaseMessageCreateSchema)
export const apiV1HelpdeskCasesMessagesCreateMutationResponseSchema = z.lazy(() => helpDeskCaseMessageCreateSchema)
