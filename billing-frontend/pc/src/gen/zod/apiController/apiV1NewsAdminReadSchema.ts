import { z } from "zod"
import { newsDetailSchema } from "../newsDetailSchema"

export const apiV1NewsAdminReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1NewsAdminReadQueryResponseSchema = z.lazy(() => newsDetailSchema)
