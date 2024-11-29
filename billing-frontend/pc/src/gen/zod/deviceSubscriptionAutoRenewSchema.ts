import { z } from "zod"

export const deviceSubscriptionAutoRenewSchema = z.object({ auto_renew: z.boolean() })
