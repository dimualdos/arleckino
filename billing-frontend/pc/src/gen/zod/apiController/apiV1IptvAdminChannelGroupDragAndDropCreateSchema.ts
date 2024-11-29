import { z } from "zod"
import { channelGroupDragNDropSchema } from "../channelGroupDragNDropSchema"

export const apiV1IptvAdminChannelGroupDragAndDropCreatePathParamsSchema = z.object({ id: z.string() })
export const apiV1IptvAdminChannelGroupDragAndDropCreate201Schema = z.lazy(() => channelGroupDragNDropSchema)
export const apiV1IptvAdminChannelGroupDragAndDropCreateMutationRequestSchema = z.lazy(() => channelGroupDragNDropSchema)
export const apiV1IptvAdminChannelGroupDragAndDropCreateMutationResponseSchema = z.lazy(() => channelGroupDragNDropSchema)
