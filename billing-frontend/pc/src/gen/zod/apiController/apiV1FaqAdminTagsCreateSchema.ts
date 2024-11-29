import { z } from "zod"
import { tagCreateSchema } from "../tagCreateSchema"

export const apiV1FaqAdminTagsCreate201Schema = z.lazy(() => tagCreateSchema)
export const apiV1FaqAdminTagsCreateMutationRequestSchema = z.lazy(() => tagCreateSchema).schema.and(z.object({ id: z.never() }))
export const apiV1FaqAdminTagsCreateMutationResponseSchema = z.lazy(() => tagCreateSchema)
