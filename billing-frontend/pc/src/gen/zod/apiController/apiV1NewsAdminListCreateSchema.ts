import { z } from "zod"
import { newsCreateSchema } from "../newsCreateSchema"

export const apiV1NewsAdminListCreate201Schema = z.lazy(() => newsCreateSchema)
export const apiV1NewsAdminListCreateMutationRequestSchema = z.lazy(() => newsCreateSchema).schema.and(z.object({ id: z.never(), created_date: z.never() }))
export const apiV1NewsAdminListCreateMutationResponseSchema = z.lazy(() => newsCreateSchema)
