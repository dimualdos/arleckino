import { z } from "zod"
import { tagCreateSchema } from "../tagCreateSchema"

export const apiV1FaqAdminTagsUpdatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this tag.`) })
export const apiV1FaqAdminTagsUpdateMutationRequestSchema = z.lazy(() => tagCreateSchema).schema.and(z.object({ id: z.never() }))
export const apiV1FaqAdminTagsUpdateMutationResponseSchema = z.lazy(() => tagCreateSchema)
