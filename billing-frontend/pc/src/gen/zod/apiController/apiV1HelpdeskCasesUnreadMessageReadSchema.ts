import { z } from "zod"
import { helpDeskCaseUnreadMessageSchema } from "../helpDeskCaseUnreadMessageSchema"

export const apiV1HelpdeskCasesUnreadMessageReadQueryResponseSchema = z.lazy(() => helpDeskCaseUnreadMessageSchema)
