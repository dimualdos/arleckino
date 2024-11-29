import { z } from "zod"
import { deviceSubscriptionToPremiumSchema } from "../deviceSubscriptionToPremiumSchema"

export const apiV1UserDeviceSubscriptionToPremiumCreatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDeviceSubscriptionToPremiumCreate201Schema = z.lazy(() => deviceSubscriptionToPremiumSchema)
export const apiV1UserDeviceSubscriptionToPremiumCreateMutationRequestSchema = z.lazy(() => deviceSubscriptionToPremiumSchema)
export const apiV1UserDeviceSubscriptionToPremiumCreateMutationResponseSchema = z.lazy(() => deviceSubscriptionToPremiumSchema)
