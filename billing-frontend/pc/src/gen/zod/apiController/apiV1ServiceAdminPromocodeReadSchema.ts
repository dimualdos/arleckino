import { z } from "zod"
import { promocodeSchema } from "../promocodeSchema"

export const apiV1ServiceAdminPromocodeReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1ServiceAdminPromocodeReadQueryResponseSchema = z.lazy(() => promocodeSchema)
