import { z } from "zod"

export const apiV1ServiceAdminMinistraDelete204Schema = z.any()
export const apiV1ServiceAdminMinistraDeleteMutationResponseSchema = z.any()
export const apiV1ServiceAdminMinistraDeletePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this ministra server.`) })
