import { z } from "zod"
import { adminChannelGroupSchema } from "../adminChannelGroupSchema"

export const apiV1IptvAdminChannelGroupListCreate201Schema = z.lazy(() => adminChannelGroupSchema)
export const apiV1IptvAdminChannelGroupListCreateMutationRequestSchema = z
  .lazy(() => adminChannelGroupSchema)
  .schema.and(z.object({ id: z.never(), channels_count: z.never(), count_selected: z.never(), created_date: z.never(), modified_date: z.never() }))
export const apiV1IptvAdminChannelGroupListCreateMutationResponseSchema = z.lazy(() => adminChannelGroupSchema)
