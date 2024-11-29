import { z } from "zod"

export const paymentSystemDetailSchema = z.object({
  id: z.number().readonly().optional(),
  title: z.string().min(1).max(255),
  payment_url: z.string().max(200).nullish(),
  callback_url: z.string().max(200).nullish(),
  status_url: z.string().max(200).nullish(),
  login: z.string().max(255).nullish(),
  password: z.string().max(255).nullish(),
  is_disabled: z.boolean().optional(),
  is_hidden: z.boolean().optional(),
  is_hidden_date: z.string().datetime().optional(),
  bonus_percent: z.number().optional(),
  settings: z.string().min(1).nullish(),
})
