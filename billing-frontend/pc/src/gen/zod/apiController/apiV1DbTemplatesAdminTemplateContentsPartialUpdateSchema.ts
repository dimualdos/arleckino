import { z } from "zod"
import { templateContentSchema } from "../templateContentSchema"

export const apiV1DbTemplatesAdminTemplateContentsPartialUpdatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this template content.`) })
export const apiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationRequestSchema = z.lazy(() => templateContentSchema).schema.and(z.object({ id: z.never(), images: z.never() }))
export const apiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationResponseSchema = z.lazy(() => templateContentSchema)
