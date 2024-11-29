import { z } from "zod"
import { deviceSubscriptionAutoRenewSchema } from "../deviceSubscriptionAutoRenewSchema"

export const apiV1UserDeviceSubscriptionAutoRenewCreatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDeviceSubscriptionAutoRenewCreate201Schema = z.lazy(() => deviceSubscriptionAutoRenewSchema)
export const apiV1UserDeviceSubscriptionAutoRenewCreateMutationRequestSchema = z.lazy(() => deviceSubscriptionAutoRenewSchema)
export const apiV1UserDeviceSubscriptionAutoRenewCreateMutationResponseSchema = z.lazy(() => deviceSubscriptionAutoRenewSchema)
