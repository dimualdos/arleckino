import { z } from "zod"
import { adminUserSendEmailSchema } from "../adminUserSendEmailSchema"

export const apiV1UserAdminUserSendEmailCreatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Users.`) })
export const apiV1UserAdminUserSendEmailCreate201Schema = z.lazy(() => adminUserSendEmailSchema)
export const apiV1UserAdminUserSendEmailCreateMutationRequestSchema = z.lazy(() => adminUserSendEmailSchema)
export const apiV1UserAdminUserSendEmailCreateMutationResponseSchema = z.lazy(() => adminUserSendEmailSchema)
