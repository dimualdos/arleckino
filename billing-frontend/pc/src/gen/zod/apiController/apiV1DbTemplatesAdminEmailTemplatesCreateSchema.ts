import { z } from "zod"
import { emailTemplateCreateSchema } from "../emailTemplateCreateSchema"

export const apiV1DbTemplatesAdminEmailTemplatesCreate201Schema = z.lazy(() => emailTemplateCreateSchema)
export const apiV1DbTemplatesAdminEmailTemplatesCreateMutationRequestSchema = z.lazy(() => emailTemplateCreateSchema).schema.and(z.object({ id: z.never() }))
export const apiV1DbTemplatesAdminEmailTemplatesCreateMutationResponseSchema = z.lazy(() => emailTemplateCreateSchema)
