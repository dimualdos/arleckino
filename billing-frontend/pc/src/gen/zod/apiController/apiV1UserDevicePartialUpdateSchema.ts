import { z } from "zod"
import { updateDeviceSchema } from "../updateDeviceSchema"

export const apiV1UserDevicePartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDevicePartialUpdateMutationRequestSchema = z.lazy(() => updateDeviceSchema).schema.and(z.object({ created_date: z.never(), modified_date: z.never(), subscription: z.never() }))
export const apiV1UserDevicePartialUpdateMutationResponseSchema = z.lazy(() => updateDeviceSchema)
