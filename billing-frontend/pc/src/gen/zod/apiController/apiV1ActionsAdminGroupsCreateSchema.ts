import { z } from "zod"
import { actionGroupSchema } from "../actionGroupSchema"

export const apiV1ActionsAdminGroupsCreate201Schema = z.lazy(() => actionGroupSchema)
export const apiV1ActionsAdminGroupsCreateMutationRequestSchema = z.lazy(() => actionGroupSchema).schema.and(z.object({ id: z.never() }))
export const apiV1ActionsAdminGroupsCreateMutationResponseSchema = z.lazy(() => actionGroupSchema)
