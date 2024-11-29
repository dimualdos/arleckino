import { z } from "zod"
import { helpDeskCaseMessageSchema } from "../helpDeskCaseMessageSchema"

export const apiV1HelpdeskCasesMessagesListPathParamsSchema = z.object({ case_id: z.string() })
export const apiV1HelpdeskCasesMessagesListQueryResponseSchema = z.array(z.lazy(() => helpDeskCaseMessageSchema))
