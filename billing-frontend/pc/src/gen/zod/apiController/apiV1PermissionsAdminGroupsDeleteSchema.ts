import { z } from "zod"

export const apiV1PermissionsAdminGroupsDelete204Schema = z.any()
export const apiV1PermissionsAdminGroupsDeleteMutationResponseSchema = z.any()
export const apiV1PermissionsAdminGroupsDeletePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this admin group.`) })
