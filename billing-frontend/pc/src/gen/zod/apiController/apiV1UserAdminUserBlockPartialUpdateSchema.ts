import { z } from "zod"
import { adminUserBlockSchema } from "../adminUserBlockSchema"

export const apiV1UserAdminUserBlockPartialUpdatePathParamsSchema = z.object({ block_pk: z.string(), id: z.string() })
export const apiV1UserAdminUserBlockPartialUpdateMutationRequestSchema = z.lazy(() => adminUserBlockSchema).schema.and(z.object({ id: z.never() }))
export const apiV1UserAdminUserBlockPartialUpdateMutationResponseSchema = z.lazy(() => adminUserBlockSchema)
