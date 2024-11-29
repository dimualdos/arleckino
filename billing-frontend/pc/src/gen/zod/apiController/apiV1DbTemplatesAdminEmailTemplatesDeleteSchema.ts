import { z } from "zod"

export const apiV1DbTemplatesAdminEmailTemplatesDelete204Schema = z.any()
export const apiV1DbTemplatesAdminEmailTemplatesDeleteMutationResponseSchema = z.any()
export const apiV1DbTemplatesAdminEmailTemplatesDeletePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this email template.`) })
