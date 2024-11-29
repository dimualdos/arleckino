import { z } from "zod"

export const adminUserDeviceSubscriptionCancelSchema = z.object({ future_type: z.enum([`only_future`, `active_and_future`]).nullable(), type: z.enum([`refund`, `cancel`, `all`]) })
