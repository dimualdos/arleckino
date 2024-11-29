import { z } from "zod"
import { adminGroupUserCreateSchema } from "../adminGroupUserCreateSchema"

export const apiV1PermissionsAdminGroupsUsersCreatePathParamsSchema = z.object({ group_id: z.string() })
export const apiV1PermissionsAdminGroupsUsersCreate201Schema = z.lazy(() => adminGroupUserCreateSchema)
export const apiV1PermissionsAdminGroupsUsersCreateMutationRequestSchema = z.lazy(() => adminGroupUserCreateSchema)
export const apiV1PermissionsAdminGroupsUsersCreateMutationResponseSchema = z.lazy(() => adminGroupUserCreateSchema)
