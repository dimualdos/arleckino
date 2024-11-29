import { z } from "zod"
import { channelDragNDropSchema } from "../channelDragNDropSchema"

export const apiV1IptvAdminChannelDragAndDropCreatePathParamsSchema = z.object({ id: z.string() })
export const apiV1IptvAdminChannelDragAndDropCreate201Schema = z.lazy(() => channelDragNDropSchema)
export const apiV1IptvAdminChannelDragAndDropCreateMutationRequestSchema = z.lazy(() => channelDragNDropSchema)
export const apiV1IptvAdminChannelDragAndDropCreateMutationResponseSchema = z.lazy(() => channelDragNDropSchema)
