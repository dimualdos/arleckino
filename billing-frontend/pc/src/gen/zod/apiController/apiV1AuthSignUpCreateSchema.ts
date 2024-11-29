import { z } from "zod"
import { userRegistrationSchema } from "../userRegistrationSchema"

export const apiV1AuthSignUpCreate201Schema = z.lazy(() => userRegistrationSchema)
export const apiV1AuthSignUpCreateMutationRequestSchema = z.lazy(() => userRegistrationSchema)
export const apiV1AuthSignUpCreateMutationResponseSchema = z.lazy(() => userRegistrationSchema)
