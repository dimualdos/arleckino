import { z } from "zod"
import { deviceBindDnsSchema } from "../deviceBindDnsSchema"

export const apiV1UserDeviceDnsReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDeviceDnsReadQueryResponseSchema = z.lazy(() => deviceBindDnsSchema)
