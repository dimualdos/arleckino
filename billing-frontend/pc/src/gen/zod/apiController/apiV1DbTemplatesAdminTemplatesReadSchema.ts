import { z } from "zod"
import { templateDetailSchema } from "../templateDetailSchema"

export const apiV1DbTemplatesAdminTemplatesReadPathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this template.`) })
export const apiV1DbTemplatesAdminTemplatesReadQueryResponseSchema = z.lazy(() => templateDetailSchema)
