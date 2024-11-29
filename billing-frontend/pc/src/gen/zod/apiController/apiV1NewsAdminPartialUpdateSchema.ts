import { z } from "zod"
import { newsDetailSchema } from "../newsDetailSchema"

export const apiV1NewsAdminPartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1NewsAdminPartialUpdateMutationRequestSchema = z.lazy(() => newsDetailSchema).schema.and(z.object({ id: z.never(), created_date: z.never(), images: z.never() }))
export const apiV1NewsAdminPartialUpdateMutationResponseSchema = z.lazy(() => newsDetailSchema)
