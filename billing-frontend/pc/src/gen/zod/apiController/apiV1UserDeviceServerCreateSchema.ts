import { z } from "zod"
import { deviceBindServerSchema } from "../deviceBindServerSchema"

export const apiV1UserDeviceServerCreatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDeviceServerCreate201Schema = z.lazy(() => deviceBindServerSchema)
export const apiV1UserDeviceServerCreateMutationRequestSchema = z.lazy(() => deviceBindServerSchema)
export const apiV1UserDeviceServerCreateMutationResponseSchema = z.lazy(() => deviceBindServerSchema)
