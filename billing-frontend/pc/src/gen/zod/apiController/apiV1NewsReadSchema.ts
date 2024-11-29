import { z } from "zod"
import { newsDetailSchema } from "../newsDetailSchema"

export const apiV1NewsReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1NewsReadQueryResponseSchema = z.lazy(() => newsDetailSchema)
