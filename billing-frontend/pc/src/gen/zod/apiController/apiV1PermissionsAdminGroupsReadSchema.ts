import { z } from "zod"
import { adminGroupSchema } from "../adminGroupSchema"

export const apiV1PermissionsAdminGroupsReadPathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this admin group.`) })
export const apiV1PermissionsAdminGroupsReadQueryResponseSchema = z.lazy(() => adminGroupSchema)
