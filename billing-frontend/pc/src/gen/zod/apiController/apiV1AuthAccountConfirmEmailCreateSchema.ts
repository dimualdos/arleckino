import { z } from "zod"
import { verifyEmailSchema } from "../verifyEmailSchema"

export const apiV1AuthAccountConfirmEmailCreate201Schema = z.lazy(() => verifyEmailSchema)
export const apiV1AuthAccountConfirmEmailCreateMutationRequestSchema = z.lazy(() => verifyEmailSchema)
export const apiV1AuthAccountConfirmEmailCreateMutationResponseSchema = z.lazy(() => verifyEmailSchema)
