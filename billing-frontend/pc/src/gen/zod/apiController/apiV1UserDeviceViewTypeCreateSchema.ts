import { z } from "zod"
import { deviceChangeViewTypeSchema } from "../deviceChangeViewTypeSchema"

export const apiV1UserDeviceViewTypeCreatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDeviceViewTypeCreate201Schema = z.lazy(() => deviceChangeViewTypeSchema)
export const apiV1UserDeviceViewTypeCreateMutationRequestSchema = z.lazy(() => deviceChangeViewTypeSchema)
export const apiV1UserDeviceViewTypeCreateMutationResponseSchema = z.lazy(() => deviceChangeViewTypeSchema)
