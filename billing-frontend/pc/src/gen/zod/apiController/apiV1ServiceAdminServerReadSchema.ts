import { z } from "zod"
import { serverSchema } from "../serverSchema"

export const apiV1ServiceAdminServerReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1ServiceAdminServerReadQueryResponseSchema = z.lazy(() => serverSchema)
