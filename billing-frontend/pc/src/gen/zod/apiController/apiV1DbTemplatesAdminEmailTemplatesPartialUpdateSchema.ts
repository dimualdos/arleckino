import { z } from "zod"
import { emailTemplateUpdateSchema } from "../emailTemplateUpdateSchema"

export const apiV1DbTemplatesAdminEmailTemplatesPartialUpdatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this email template.`) })
export const apiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationRequestSchema = z.lazy(() => emailTemplateUpdateSchema).schema.and(z.object({ id: z.never() }))
export const apiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationResponseSchema = z.lazy(() => emailTemplateUpdateSchema)
