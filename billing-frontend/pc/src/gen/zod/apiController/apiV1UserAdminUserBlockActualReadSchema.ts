import { z } from "zod"
import { adminUserBlockSchema } from "../adminUserBlockSchema"

export const apiV1UserAdminUserBlockActualReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserAdminUserBlockActualReadQueryResponseSchema = z.lazy(() => adminUserBlockSchema)
