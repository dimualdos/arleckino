import { z } from "zod"

export const adminUserDeviceSubscriptionChangeSchema = z.object({ date_end: z.string() })
