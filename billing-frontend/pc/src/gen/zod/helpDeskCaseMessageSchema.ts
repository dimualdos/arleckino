import { dataclassSchema } from "./dataclassSchema"
import { z } from "zod"

export const helpDeskCaseMessageSchema = z.object({
  is_unread: z.string().readonly().optional(),
  message_id: z.number(),
  user_id: z.number(),
  staff_id: z.number(),
  content: z.string().min(1),
  note: z.boolean(),
  sent_via_rule: z.boolean(),
  dt_create: z.string().datetime(),
  attachments: z.array(z.lazy(() => dataclassSchema)),
  content_html: z.string().min(1).nullish(),
  rating: z.string().min(1).nullish(),
  rating_comment: z.string().min(1).nullish(),
  rated_staff_id: z.number().nullish(),
})
