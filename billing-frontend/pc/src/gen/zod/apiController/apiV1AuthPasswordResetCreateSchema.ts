import { z } from "zod"
import { myPasswordResetSchema } from "../myPasswordResetSchema"

export const apiV1AuthPasswordResetCreate201Schema = z.lazy(() => myPasswordResetSchema)
export const apiV1AuthPasswordResetCreateMutationRequestSchema = z.lazy(() => myPasswordResetSchema)
export const apiV1AuthPasswordResetCreateMutationResponseSchema = z.lazy(() => myPasswordResetSchema)
