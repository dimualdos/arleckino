import { z } from "zod"
import { dnsSchema } from "../dnsSchema"

export const apiV1ServiceDnsReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1ServiceDnsReadQueryResponseSchema = z.lazy(() => dnsSchema)
