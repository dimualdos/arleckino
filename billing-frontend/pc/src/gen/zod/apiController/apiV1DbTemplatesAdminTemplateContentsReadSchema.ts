import { z } from "zod"
import { templateContentSchema } from "../templateContentSchema"

export const apiV1DbTemplatesAdminTemplateContentsReadPathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this template content.`) })
export const apiV1DbTemplatesAdminTemplateContentsReadQueryResponseSchema = z.lazy(() => templateContentSchema)
