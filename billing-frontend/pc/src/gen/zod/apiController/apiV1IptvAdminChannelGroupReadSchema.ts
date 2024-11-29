import { z } from "zod"
import { adminChannelGroupSchema } from "../adminChannelGroupSchema"

export const apiV1IptvAdminChannelGroupReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1IptvAdminChannelGroupReadQueryResponseSchema = z.lazy(() => adminChannelGroupSchema)
