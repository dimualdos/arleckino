import { z } from "zod"
import { adminUserSchema } from "../adminUserSchema"

export const apiV1UserAdminUserReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserAdminUserReadQueryResponseSchema = z.lazy(() => adminUserSchema)
