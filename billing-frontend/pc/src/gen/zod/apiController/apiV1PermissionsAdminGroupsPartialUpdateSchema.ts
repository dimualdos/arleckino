import { z } from "zod"
import { adminGroupSchema } from "../adminGroupSchema"

export const apiV1PermissionsAdminGroupsPartialUpdatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this admin group.`) })
export const apiV1PermissionsAdminGroupsPartialUpdateMutationRequestSchema = z.lazy(() => adminGroupSchema).schema.and(z.object({ id: z.never() }))
export const apiV1PermissionsAdminGroupsPartialUpdateMutationResponseSchema = z.lazy(() => adminGroupSchema)
