import { z } from "zod"
import { serverSchema } from "../serverSchema"

export const apiV1ServiceAdminServerPartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1ServiceAdminServerPartialUpdateMutationRequestSchema = z.lazy(() => serverSchema).schema.and(z.object({ id: z.never(), created_date: z.never(), modified_date: z.never() }))
export const apiV1ServiceAdminServerPartialUpdateMutationResponseSchema = z.lazy(() => serverSchema)
