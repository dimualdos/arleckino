import { z } from "zod"
import { templateUpdateSchema } from "../templateUpdateSchema"

export const apiV1DbTemplatesAdminTemplatesUpdatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this template.`) })
export const apiV1DbTemplatesAdminTemplatesUpdateMutationRequestSchema = z.lazy(() => templateUpdateSchema)
export const apiV1DbTemplatesAdminTemplatesUpdateMutationResponseSchema = z.lazy(() => templateUpdateSchema)
