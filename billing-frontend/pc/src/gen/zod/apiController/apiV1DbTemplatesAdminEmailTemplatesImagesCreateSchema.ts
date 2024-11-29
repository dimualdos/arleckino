import { z } from "zod"
import { emailTemplateContentImageSchema } from "../emailTemplateContentImageSchema"

export const apiV1DbTemplatesAdminEmailTemplatesImagesCreate201Schema = z.lazy(() => emailTemplateContentImageSchema)
export const apiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationRequestSchema = z.lazy(() => emailTemplateContentImageSchema).schema.and(z.object({ id: z.never(), image: z.never() }))
export const apiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationResponseSchema = z.lazy(() => emailTemplateContentImageSchema)
