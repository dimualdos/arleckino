import { z } from "zod"
import { deviceBindDnsSchema } from "../deviceBindDnsSchema"

export const apiV1UserDeviceDnsCreatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDeviceDnsCreate201Schema = z.lazy(() => deviceBindDnsSchema)
export const apiV1UserDeviceDnsCreateMutationRequestSchema = z.lazy(() => deviceBindDnsSchema)
export const apiV1UserDeviceDnsCreateMutationResponseSchema = z.lazy(() => deviceBindDnsSchema)
