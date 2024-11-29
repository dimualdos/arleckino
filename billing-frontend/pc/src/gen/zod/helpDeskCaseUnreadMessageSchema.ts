import { z } from "zod"

export const helpDeskCaseUnreadMessageSchema = z.object({ case_count: z.number() })
