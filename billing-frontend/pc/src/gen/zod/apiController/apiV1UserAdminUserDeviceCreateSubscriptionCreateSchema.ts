import { z } from "zod"
import { adminUserDeviceAddSubscriptionSchema } from "../adminUserDeviceAddSubscriptionSchema"

export const apiV1UserAdminUserDeviceCreateSubscriptionCreatePathParamsSchema = z.object({ deviceId: z.string(), id: z.string() })
export const apiV1UserAdminUserDeviceCreateSubscriptionCreate201Schema = z.lazy(() => adminUserDeviceAddSubscriptionSchema)
export const apiV1UserAdminUserDeviceCreateSubscriptionCreateMutationRequestSchema = z.lazy(() => adminUserDeviceAddSubscriptionSchema)
export const apiV1UserAdminUserDeviceCreateSubscriptionCreateMutationResponseSchema = z.lazy(() => adminUserDeviceAddSubscriptionSchema)
