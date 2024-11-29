import { z } from "zod"
import { createDeviceSchema } from "../createDeviceSchema"

export const apiV1UserDeviceListCreate201Schema = z.lazy(() => createDeviceSchema)
export const apiV1UserDeviceListCreateMutationRequestSchema = z.lazy(() => createDeviceSchema)
export const apiV1UserDeviceListCreateMutationResponseSchema = z.lazy(() => createDeviceSchema)
