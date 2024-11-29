import { z } from "zod"
import { userProfileChangeEmailRequestNewSchema } from "../userProfileChangeEmailRequestNewSchema"

export const apiV1UserProfileChangeEmailRequestNewCreate201Schema = z.lazy(() => userProfileChangeEmailRequestNewSchema)
export const apiV1UserProfileChangeEmailRequestNewCreateMutationRequestSchema = z.lazy(() => userProfileChangeEmailRequestNewSchema)
export const apiV1UserProfileChangeEmailRequestNewCreateMutationResponseSchema = z.lazy(() => userProfileChangeEmailRequestNewSchema)
