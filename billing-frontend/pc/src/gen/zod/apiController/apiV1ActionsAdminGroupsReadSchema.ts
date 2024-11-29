import { z } from "zod"
import { actionGroupSchema } from "../actionGroupSchema"

export const apiV1ActionsAdminGroupsReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1ActionsAdminGroupsReadQueryResponseSchema = z.lazy(() => actionGroupSchema)
