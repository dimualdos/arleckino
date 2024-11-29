import { z } from "zod"

export const apiV1DbTemplatesAdminTemplatesImagesDelete204Schema = z.any()
export const apiV1DbTemplatesAdminTemplatesImagesDeleteMutationResponseSchema = z.any()
export const apiV1DbTemplatesAdminTemplatesImagesDeletePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this template content image.`) })
