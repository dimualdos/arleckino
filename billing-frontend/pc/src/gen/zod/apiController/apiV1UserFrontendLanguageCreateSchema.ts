import { z } from "zod"
import { userFrontendLanguageSchema } from "../userFrontendLanguageSchema"

export const apiV1UserFrontendLanguageCreate201Schema = z.lazy(() => userFrontendLanguageSchema)
export const apiV1UserFrontendLanguageCreateMutationRequestSchema = z.lazy(() => userFrontendLanguageSchema)
export const apiV1UserFrontendLanguageCreateMutationResponseSchema = z.lazy(() => userFrontendLanguageSchema)
