import { z } from "zod"
import { adminGroupSchema } from "../adminGroupSchema"

export const apiV1PermissionsAdminGroupsUpdatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this admin group.`) })
export const apiV1PermissionsAdminGroupsUpdateMutationRequestSchema = z.lazy(() => adminGroupSchema).schema.and(z.object({ id: z.never() }))
export const apiV1PermissionsAdminGroupsUpdateMutationResponseSchema = z.lazy(() => adminGroupSchema)
