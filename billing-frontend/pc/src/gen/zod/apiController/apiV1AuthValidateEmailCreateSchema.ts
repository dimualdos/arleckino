import { z } from "zod"
import { validateEmailSchema } from "../validateEmailSchema"

export const apiV1AuthValidateEmailCreate201Schema = z.lazy(() => validateEmailSchema)
export const apiV1AuthValidateEmailCreateMutationRequestSchema = z.lazy(() => validateEmailSchema)
export const apiV1AuthValidateEmailCreateMutationResponseSchema = z.lazy(() => validateEmailSchema)
