import { z } from "zod"
import { myPasswordResetConfirmSchema } from "../myPasswordResetConfirmSchema"

export const apiV1AuthPasswordChangeCreatePathParamsSchema = z.object({ token: z.string(), uidb64: z.string() })
export const apiV1AuthPasswordChangeCreate201Schema = z.lazy(() => myPasswordResetConfirmSchema)
export const apiV1AuthPasswordChangeCreateMutationRequestSchema = z.lazy(() => myPasswordResetConfirmSchema)
export const apiV1AuthPasswordChangeCreateMutationResponseSchema = z.lazy(() => myPasswordResetConfirmSchema)
