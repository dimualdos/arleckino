import { z } from "zod"
import { validatePasswordChangeTokenSchema } from "../validatePasswordChangeTokenSchema"

export const apiV1AuthValidatePasswordChangeTokenCreate201Schema = z.lazy(() => validatePasswordChangeTokenSchema)
export const apiV1AuthValidatePasswordChangeTokenCreateMutationRequestSchema = z.lazy(() => validatePasswordChangeTokenSchema)
export const apiV1AuthValidatePasswordChangeTokenCreateMutationResponseSchema = z.lazy(() => validatePasswordChangeTokenSchema)
