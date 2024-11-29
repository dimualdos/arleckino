import { z } from "zod"
import { actionTypeSchema } from "../actionTypeSchema"

export const apiV1ActionsAdminTypesUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1ActionsAdminTypesUpdateMutationRequestSchema = z.lazy(() => actionTypeSchema).schema.and(z.object({ id: z.never(), statuses: z.never(), label: z.never() }))
export const apiV1ActionsAdminTypesUpdateMutationResponseSchema = z.lazy(() => actionTypeSchema)
