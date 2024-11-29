import { z } from "zod"
import { newsImageSchema } from "../newsImageSchema"

export const apiV1NewsAdminImageCreate201Schema = z.lazy(() => newsImageSchema)
export const apiV1NewsAdminImageCreateMutationRequestSchema = z.lazy(() => newsImageSchema).schema.and(z.object({ id: z.never(), image: z.never() }))
export const apiV1NewsAdminImageCreateMutationResponseSchema = z.lazy(() => newsImageSchema)
