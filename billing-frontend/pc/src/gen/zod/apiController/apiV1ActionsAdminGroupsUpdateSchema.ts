import { z } from "zod"
import { actionGroupSchema } from "../actionGroupSchema"

export const apiV1ActionsAdminGroupsUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1ActionsAdminGroupsUpdateMutationRequestSchema = z.lazy(() => actionGroupSchema).schema.and(z.object({ id: z.never() }))
export const apiV1ActionsAdminGroupsUpdateMutationResponseSchema = z.lazy(() => actionGroupSchema)
