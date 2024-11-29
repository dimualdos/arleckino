import { z } from "zod"
import { checkAllDevicesSchema } from "../checkAllDevicesSchema"

export const apiV1UserDeviceCheckAllPartialUpdateMutationRequestSchema = z.lazy(() => checkAllDevicesSchema)
export const apiV1UserDeviceCheckAllPartialUpdateMutationResponseSchema = z.lazy(() => checkAllDevicesSchema)
