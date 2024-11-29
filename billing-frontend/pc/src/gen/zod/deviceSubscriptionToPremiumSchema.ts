import { z } from "zod"

export const deviceSubscriptionToPremiumSchema = z.object({ force: z.boolean().default(false).optional() })
