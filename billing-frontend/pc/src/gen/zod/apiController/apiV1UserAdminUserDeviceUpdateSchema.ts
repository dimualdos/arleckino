import { z } from "zod"
import { adminUserDeviceUpdateSchema } from "../adminUserDeviceUpdateSchema"

export const apiV1UserAdminUserDeviceUpdatePathParamsSchema = z.object({ deviceId: z.string(), id: z.string() })
export const apiV1UserAdminUserDeviceUpdateMutationRequestSchema = z.lazy(() => adminUserDeviceUpdateSchema)
export const apiV1UserAdminUserDeviceUpdateMutationResponseSchema = z.lazy(() => adminUserDeviceUpdateSchema)
