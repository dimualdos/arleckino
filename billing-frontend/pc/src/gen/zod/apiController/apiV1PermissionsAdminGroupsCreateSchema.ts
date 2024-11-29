import { z } from "zod"
import { adminGroupCreateSchema } from "../adminGroupCreateSchema"

export const apiV1PermissionsAdminGroupsCreate201Schema = z.lazy(() => adminGroupCreateSchema)
export const apiV1PermissionsAdminGroupsCreateMutationRequestSchema = z.lazy(() => adminGroupCreateSchema).schema.and(z.object({ id: z.never() }))
export const apiV1PermissionsAdminGroupsCreateMutationResponseSchema = z.lazy(() => adminGroupCreateSchema)
