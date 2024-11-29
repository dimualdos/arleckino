import { z } from "zod"

export const referralLinkClickThroughSchema = z.object({
  id: z.number().readonly().optional(),
  username: z.string().min(1).readonly().optional(),
  email: z.string().email().min(1).readonly().optional(),
  status: z.enum([`transition`, `registration`]).optional(),
  referer_url: z.string().min(1).max(255),
  dt_create: z.string().datetime().optional(),
  dt_update: z.string().datetime().optional(),
})
