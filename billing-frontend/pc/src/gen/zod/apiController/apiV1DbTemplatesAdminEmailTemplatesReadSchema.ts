import { z } from "zod"
import { emailTemplateDetailSchema } from "../emailTemplateDetailSchema"

export const apiV1DbTemplatesAdminEmailTemplatesReadPathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this email template.`) })
export const apiV1DbTemplatesAdminEmailTemplatesReadQueryResponseSchema = z.lazy(() => emailTemplateDetailSchema)
