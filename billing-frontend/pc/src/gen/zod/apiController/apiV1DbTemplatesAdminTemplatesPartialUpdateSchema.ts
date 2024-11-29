import { z } from "zod"
import { templateUpdateSchema } from "../templateUpdateSchema"

export const apiV1DbTemplatesAdminTemplatesPartialUpdatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this template.`) })
export const apiV1DbTemplatesAdminTemplatesPartialUpdateMutationRequestSchema = z.lazy(() => templateUpdateSchema)
export const apiV1DbTemplatesAdminTemplatesPartialUpdateMutationResponseSchema = z.lazy(() => templateUpdateSchema)
