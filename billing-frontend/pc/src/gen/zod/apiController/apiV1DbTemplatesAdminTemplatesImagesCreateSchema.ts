import { z } from "zod"
import { templateContentImageSchema } from "../templateContentImageSchema"

export const apiV1DbTemplatesAdminTemplatesImagesCreate201Schema = z.lazy(() => templateContentImageSchema)
export const apiV1DbTemplatesAdminTemplatesImagesCreateMutationRequestSchema = z.lazy(() => templateContentImageSchema).schema.and(z.object({ id: z.never(), image: z.never() }))
export const apiV1DbTemplatesAdminTemplatesImagesCreateMutationResponseSchema = z.lazy(() => templateContentImageSchema)
