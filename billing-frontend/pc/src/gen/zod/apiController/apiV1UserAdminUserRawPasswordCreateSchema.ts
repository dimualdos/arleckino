import { z } from "zod"
import { adminUserRawPasswordSchema } from "../adminUserRawPasswordSchema"

export const apiV1UserAdminUserRawPasswordCreatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserAdminUserRawPasswordCreate201Schema = z.lazy(() => adminUserRawPasswordSchema)
export const apiV1UserAdminUserRawPasswordCreateMutationRequestSchema = z.lazy(() => adminUserRawPasswordSchema)
export const apiV1UserAdminUserRawPasswordCreateMutationResponseSchema = z.lazy(() => adminUserRawPasswordSchema)
