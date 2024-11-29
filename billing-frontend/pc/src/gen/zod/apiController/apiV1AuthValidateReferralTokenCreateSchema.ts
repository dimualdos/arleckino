import { z } from "zod"
import { validateReferralTokenSchema } from "../validateReferralTokenSchema"

export const apiV1AuthValidateReferralTokenCreate201Schema = z.lazy(() => validateReferralTokenSchema)
export const apiV1AuthValidateReferralTokenCreateMutationRequestSchema = z.lazy(() => validateReferralTokenSchema)
export const apiV1AuthValidateReferralTokenCreateMutationResponseSchema = z.lazy(() => validateReferralTokenSchema)
