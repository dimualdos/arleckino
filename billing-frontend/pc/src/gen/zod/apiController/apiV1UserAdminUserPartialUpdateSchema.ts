import { z } from "zod"
import { adminUpdateUserSchema } from "../adminUpdateUserSchema"

export const apiV1UserAdminUserPartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserAdminUserPartialUpdateMutationRequestSchema = z.lazy(() => adminUpdateUserSchema)
export const apiV1UserAdminUserPartialUpdateMutationResponseSchema = z.lazy(() => adminUpdateUserSchema)
