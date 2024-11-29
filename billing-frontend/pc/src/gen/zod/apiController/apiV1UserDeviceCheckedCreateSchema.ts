import { z } from "zod"
import { deviceCheckSchema } from "../deviceCheckSchema"

export const apiV1UserDeviceCheckedCreatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDeviceCheckedCreate201Schema = z.lazy(() => deviceCheckSchema)
export const apiV1UserDeviceCheckedCreateMutationRequestSchema = z.lazy(() => deviceCheckSchema)
export const apiV1UserDeviceCheckedCreateMutationResponseSchema = z.lazy(() => deviceCheckSchema)
