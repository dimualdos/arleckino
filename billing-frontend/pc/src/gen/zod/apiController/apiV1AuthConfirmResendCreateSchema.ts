import { z } from "zod"
import { emailConfirmationSchema } from "../emailConfirmationSchema"

export const apiV1AuthConfirmResendCreate201Schema = z.lazy(() => emailConfirmationSchema)
export const apiV1AuthConfirmResendCreateMutationRequestSchema = z.lazy(() => emailConfirmationSchema)
export const apiV1AuthConfirmResendCreateMutationResponseSchema = z.lazy(() => emailConfirmationSchema)
