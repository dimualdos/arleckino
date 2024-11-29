import { z } from "zod"

export const apiV1ServiceAdminMinistraCompareChannelsCreate201Schema = z.any()
export const apiV1ServiceAdminMinistraCompareChannelsCreateMutationResponseSchema = z.any()
export const apiV1ServiceAdminMinistraCompareChannelsCreatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this ministra server.`) })
