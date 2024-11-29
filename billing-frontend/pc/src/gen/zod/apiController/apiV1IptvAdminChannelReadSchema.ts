import { z } from "zod"
import { adminChannelSchema } from "../adminChannelSchema"

export const apiV1IptvAdminChannelReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1IptvAdminChannelReadQueryResponseSchema = z.lazy(() => adminChannelSchema)
