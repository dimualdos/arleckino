import { z } from "zod"
import { socialLoginSchema } from "../socialLoginSchema"

export const apiV1AuthGoogleCreate201Schema = z.lazy(() => socialLoginSchema)
export const apiV1AuthGoogleCreateMutationRequestSchema = z.lazy(() => socialLoginSchema)
export const apiV1AuthGoogleCreateMutationResponseSchema = z.lazy(() => socialLoginSchema)
