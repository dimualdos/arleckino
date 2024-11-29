import { z } from "zod"
import { deviceSchema } from "../deviceSchema"

export const apiV1UserDeviceReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDeviceReadQueryResponseSchema = z.lazy(() => deviceSchema)
