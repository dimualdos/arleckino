import { z } from "zod"
import { ministraServerSchema } from "../ministraServerSchema"

export const apiV1ServiceAdminMinistraReadPathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this ministra server.`) })
export const apiV1ServiceAdminMinistraReadQueryResponseSchema = z.lazy(() => ministraServerSchema)
