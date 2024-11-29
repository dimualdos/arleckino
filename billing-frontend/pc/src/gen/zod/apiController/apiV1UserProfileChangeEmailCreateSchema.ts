import { z } from "zod"
import { userProfileChangeEmailSchema } from "../userProfileChangeEmailSchema"

export const apiV1UserProfileChangeEmailCreate201Schema = z.lazy(() => userProfileChangeEmailSchema)
export const apiV1UserProfileChangeEmailCreateMutationRequestSchema = z.lazy(() => userProfileChangeEmailSchema)
export const apiV1UserProfileChangeEmailCreateMutationResponseSchema = z.lazy(() => userProfileChangeEmailSchema)
