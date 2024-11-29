import { z } from "zod"
import { userProfileSchema } from "../userProfileSchema"

export const apiV1UserProfileUpdateMutationRequestSchema = z.lazy(() => userProfileSchema)
export const apiV1UserProfileUpdateMutationResponseSchema = z.lazy(() => userProfileSchema)
