import { z } from "zod"
import { adminUserDeviceSubscriptionChangeSchema } from "../adminUserDeviceSubscriptionChangeSchema"

export const apiV1UserAdminUserDeviceChangeSubscriptionCreatePathParamsSchema = z.object({ deviceId: z.string(), id: z.string() })
export const apiV1UserAdminUserDeviceChangeSubscriptionCreate201Schema = z.lazy(() => adminUserDeviceSubscriptionChangeSchema)
export const apiV1UserAdminUserDeviceChangeSubscriptionCreateMutationRequestSchema = z.lazy(() => adminUserDeviceSubscriptionChangeSchema)
export const apiV1UserAdminUserDeviceChangeSubscriptionCreateMutationResponseSchema = z.lazy(() => adminUserDeviceSubscriptionChangeSchema)
