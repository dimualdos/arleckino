import { z } from "zod"

export const helpDeskCaseSchema = z.object({
  is_unread: z.string().readonly().optional(),
  case_id: z.number(),
  case_number: z.string().min(1),
  subject: z.string().min(1),
  user_id: z.number(),
  staff_id: z.number(),
  group_id: z.number(),
  status: z.string().min(1),
  priority: z.string().min(1),
  channel: z.string().min(1),
  recipient: z.string().min(1),
  deleted: z.boolean(),
  spam: z.boolean(),
  parent_case_id: z.number(),
  language_id: z.number(),
  dt_create: z.string().datetime(),
  dt_update: z.string().datetime().nullish(),
  dt_close: z.string().datetime().nullish(),
  dt_last_response: z.string().datetime().nullish(),
})
