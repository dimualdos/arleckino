import { z } from "zod"
import { actionTypeSchema } from "../actionTypeSchema"

export const apiV1ActionsAdminTypesReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1ActionsAdminTypesReadQueryResponseSchema = z.lazy(() => actionTypeSchema)
