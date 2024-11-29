import { z } from "zod"
import { updateDeviceSchema } from "../updateDeviceSchema"

export const apiV1UserDeviceUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDeviceUpdateMutationRequestSchema = z.lazy(() => updateDeviceSchema).schema.and(z.object({ created_date: z.never(), modified_date: z.never(), subscription: z.never() }))
export const apiV1UserDeviceUpdateMutationResponseSchema = z.lazy(() => updateDeviceSchema)
