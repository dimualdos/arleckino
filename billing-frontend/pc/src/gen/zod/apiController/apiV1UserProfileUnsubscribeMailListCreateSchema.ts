import { z } from "zod"
import { userProfileUnsubscribeMailListSchema } from "../userProfileUnsubscribeMailListSchema"

export const apiV1UserProfileUnsubscribeMailListCreate201Schema = z.lazy(() => userProfileUnsubscribeMailListSchema)
export const apiV1UserProfileUnsubscribeMailListCreateMutationRequestSchema = z.lazy(() => userProfileUnsubscribeMailListSchema)
export const apiV1UserProfileUnsubscribeMailListCreateMutationResponseSchema = z.lazy(() => userProfileUnsubscribeMailListSchema)
