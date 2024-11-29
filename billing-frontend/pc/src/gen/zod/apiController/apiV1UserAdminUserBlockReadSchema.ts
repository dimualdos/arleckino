import { z } from "zod"
import { adminUserBlockSchema } from "../adminUserBlockSchema"

export const apiV1UserAdminUserBlockReadPathParamsSchema = z.object({ block_pk: z.string(), id: z.string() })
export const apiV1UserAdminUserBlockReadQueryResponseSchema = z.lazy(() => adminUserBlockSchema)
