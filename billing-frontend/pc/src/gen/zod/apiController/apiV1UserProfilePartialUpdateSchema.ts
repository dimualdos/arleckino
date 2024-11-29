import { z } from "zod"
import { userProfileSchema } from "../userProfileSchema"

export const apiV1UserProfilePartialUpdateMutationRequestSchema = z.lazy(() => userProfileSchema)
export const apiV1UserProfilePartialUpdateMutationResponseSchema = z.lazy(() => userProfileSchema)
