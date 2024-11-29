import { z } from "zod"
import { signInSchema } from "../signInSchema"

export const apiV1AuthSignInCreate201Schema = z.lazy(() => signInSchema)
export const apiV1AuthSignInCreateMutationRequestSchema = z.lazy(() => signInSchema)
export const apiV1AuthSignInCreateMutationResponseSchema = z.lazy(() => signInSchema)
