import { z } from "zod"
import { adminUserBlockSchema } from "../adminUserBlockSchema"

export const apiV1UserAdminUserBlockUpdatePathParamsSchema = z.object({ block_pk: z.string(), id: z.string() })
export const apiV1UserAdminUserBlockUpdateMutationRequestSchema = z.lazy(() => adminUserBlockSchema).schema.and(z.object({ id: z.never() }))
export const apiV1UserAdminUserBlockUpdateMutationResponseSchema = z.lazy(() => adminUserBlockSchema)
