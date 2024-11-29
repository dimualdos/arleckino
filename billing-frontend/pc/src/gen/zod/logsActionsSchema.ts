import { z } from "zod"

export const logsActionsSchema = z.object({
  id: z.number().readonly().optional(),
  created_at: z.string().datetime().readonly().optional(),
  user_id: z.number().min(-2147483648).max(2147483647),
  message: z.string().readonly().optional(),
  action_type: z.number().nullish(),
  action_status_type: z.number().nullish(),
  group: z.number().optional(),
  user_ip: z.string().readonly().optional(),
})
