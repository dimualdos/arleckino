import { z } from "zod"
import { socialLoginSchema } from "../socialLoginSchema"

export const apiV1AuthFacebookCreate201Schema = z.lazy(() => socialLoginSchema)
export const apiV1AuthFacebookCreateMutationRequestSchema = z.lazy(() => socialLoginSchema)
export const apiV1AuthFacebookCreateMutationResponseSchema = z.lazy(() => socialLoginSchema)
