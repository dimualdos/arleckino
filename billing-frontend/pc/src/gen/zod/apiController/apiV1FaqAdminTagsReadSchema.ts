import { z } from "zod"
import { tagSchema } from "../tagSchema"

export const apiV1FaqAdminTagsReadPathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this tag.`) })
export const apiV1FaqAdminTagsReadQueryResponseSchema = z.lazy(() => tagSchema)
