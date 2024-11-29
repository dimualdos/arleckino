import { z } from "zod"
import { serverSchema } from "../serverSchema"

export const apiV1ServiceAdminServerListCreate201Schema = z.lazy(() => serverSchema)
export const apiV1ServiceAdminServerListCreateMutationRequestSchema = z.lazy(() => serverSchema).schema.and(z.object({ id: z.never(), created_date: z.never(), modified_date: z.never() }))
export const apiV1ServiceAdminServerListCreateMutationResponseSchema = z.lazy(() => serverSchema)
