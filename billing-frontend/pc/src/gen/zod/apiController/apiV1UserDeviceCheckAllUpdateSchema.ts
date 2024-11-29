import { z } from "zod"
import { checkAllDevicesSchema } from "../checkAllDevicesSchema"

export const apiV1UserDeviceCheckAllUpdateMutationRequestSchema = z.lazy(() => checkAllDevicesSchema)
export const apiV1UserDeviceCheckAllUpdateMutationResponseSchema = z.lazy(() => checkAllDevicesSchema)
