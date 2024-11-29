import { z } from "zod"

export const apiV1ActionsUserLogsAllListQueryParamsSchema = z.object({ task_id: z.string().optional() }).optional()
export const apiV1ActionsUserLogsAllListQueryResponseSchema = z.any()
