import { z } from "zod"

export const apiV1PermissionsAdminGroupsUsersDelete204Schema = z.any()
export const apiV1PermissionsAdminGroupsUsersDeleteMutationResponseSchema = z.any()
export const apiV1PermissionsAdminGroupsUsersDeletePathParamsSchema = z.object({ group_id: z.string(), id: z.string() })
