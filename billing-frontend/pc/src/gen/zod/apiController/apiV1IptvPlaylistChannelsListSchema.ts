import { z } from "zod"
import { channelSchema } from "../channelSchema"

export const apiV1IptvPlaylistChannelsListQueryResponseSchema = z.array(z.lazy(() => channelSchema))
