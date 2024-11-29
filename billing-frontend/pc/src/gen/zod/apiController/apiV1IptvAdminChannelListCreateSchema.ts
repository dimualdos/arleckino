import { z } from "zod"
import { adminCreateChannelSchema } from "../adminCreateChannelSchema"

export const apiV1IptvAdminChannelListCreate201Schema = z.lazy(() => adminCreateChannelSchema)
export const apiV1IptvAdminChannelListCreateMutationRequestSchema = z
  .lazy(() => adminCreateChannelSchema)
  .schema.and(z.object({ id: z.never(), group_name: z.never(), created_date: z.never(), modified_date: z.never(), csv_channel_id: z.never(), url: z.never() }))
export const apiV1IptvAdminChannelListCreateMutationResponseSchema = z.lazy(() => adminCreateChannelSchema)
