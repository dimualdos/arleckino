import { z } from "zod"
import { adminUserBlockSchema } from "../adminUserBlockSchema"

export const apiV1UserAdminUserBlockCreatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserAdminUserBlockCreate201Schema = z.lazy(() => adminUserBlockSchema)
export const apiV1UserAdminUserBlockCreateMutationRequestSchema = z.lazy(() => adminUserBlockSchema).schema.and(z.object({ id: z.never() }))
export const apiV1UserAdminUserBlockCreateMutationResponseSchema = z.lazy(() => adminUserBlockSchema)
