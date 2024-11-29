import { z } from "zod"
import { adminUpdateChannelSchema } from "../adminUpdateChannelSchema"

export const apiV1IptvAdminChannelPartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1IptvAdminChannelPartialUpdateMutationRequestSchema = z
  .lazy(() => adminUpdateChannelSchema)
  .schema.and(z.object({ id: z.never(), group_name: z.never(), created_date: z.never(), modified_date: z.never(), csv_channel_id: z.never(), url: z.never() }))
export const apiV1IptvAdminChannelPartialUpdateMutationResponseSchema = z.lazy(() => adminUpdateChannelSchema)
