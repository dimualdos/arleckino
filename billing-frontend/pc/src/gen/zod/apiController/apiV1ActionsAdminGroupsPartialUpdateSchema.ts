import { z } from "zod"
import { actionGroupSchema } from "../actionGroupSchema"

export const apiV1ActionsAdminGroupsPartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1ActionsAdminGroupsPartialUpdateMutationRequestSchema = z.lazy(() => actionGroupSchema).schema.and(z.object({ id: z.never() }))
export const apiV1ActionsAdminGroupsPartialUpdateMutationResponseSchema = z.lazy(() => actionGroupSchema)
