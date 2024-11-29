import { z } from "zod"

export const apiV1DbTemplatesAdminEmailTemplatesImagesDelete204Schema = z.any()
export const apiV1DbTemplatesAdminEmailTemplatesImagesDeleteMutationResponseSchema = z.any()
export const apiV1DbTemplatesAdminEmailTemplatesImagesDeletePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this email template content image.`) })
