import { z } from "zod"
import { adminUserDeviceSubscriptionCancelSchema } from "../adminUserDeviceSubscriptionCancelSchema"

export const apiV1UserAdminUserDeviceCancelSubscriptionCreatePathParamsSchema = z.object({ deviceId: z.string(), id: z.string() })
export const apiV1UserAdminUserDeviceCancelSubscriptionCreate201Schema = z.lazy(() => adminUserDeviceSubscriptionCancelSchema)
export const apiV1UserAdminUserDeviceCancelSubscriptionCreateMutationRequestSchema = z.lazy(() => adminUserDeviceSubscriptionCancelSchema)
export const apiV1UserAdminUserDeviceCancelSubscriptionCreateMutationResponseSchema = z.lazy(() => adminUserDeviceSubscriptionCancelSchema)
