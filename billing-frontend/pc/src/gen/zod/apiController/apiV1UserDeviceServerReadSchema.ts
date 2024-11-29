import { z } from "zod"
import { deviceBindServerSchema } from "../deviceBindServerSchema"

export const apiV1UserDeviceServerReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDeviceServerReadQueryResponseSchema = z.lazy(() => deviceBindServerSchema)
