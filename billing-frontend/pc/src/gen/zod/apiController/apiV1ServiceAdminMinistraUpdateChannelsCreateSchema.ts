import { z } from "zod"

export const apiV1ServiceAdminMinistraUpdateChannelsCreate201Schema = z.any()
export const apiV1ServiceAdminMinistraUpdateChannelsCreateMutationResponseSchema = z.any()
export const apiV1ServiceAdminMinistraUpdateChannelsCreatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this ministra server.`) })
