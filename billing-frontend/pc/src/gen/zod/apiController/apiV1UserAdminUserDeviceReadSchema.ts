import { z } from "zod"
import { adminUserDeviceSchema } from "../adminUserDeviceSchema"

export const apiV1UserAdminUserDeviceReadPathParamsSchema = z.object({ deviceId: z.string(), id: z.string() })
export const apiV1UserAdminUserDeviceReadQueryResponseSchema = z.lazy(() => adminUserDeviceSchema)
