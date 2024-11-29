import { z } from "zod"
import { templateContentTestSendingEmailSchema } from "../templateContentTestSendingEmailSchema"

export const apiV1DbTemplatesAdminTemplatesTestSendingEmailCreate201Schema = z.lazy(() => templateContentTestSendingEmailSchema)
export const apiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationRequestSchema = z.lazy(() => templateContentTestSendingEmailSchema)
export const apiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationResponseSchema = z.lazy(() => templateContentTestSendingEmailSchema)
