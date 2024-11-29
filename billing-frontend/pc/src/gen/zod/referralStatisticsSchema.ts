import { z } from "zod"

export const referralStatisticsSchema = z.object({
  registered_count: z.number().readonly().optional(),
  replenishment_count: z.number().readonly().optional(),
  replenishment_amount: z.number().readonly().optional(),
  replenishment_avg: z.number().readonly().optional(),
  referral_amount: z.number().readonly().optional(),
})
