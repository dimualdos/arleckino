import { z } from "zod"
import { dnsSchema } from "../dnsSchema"

export const apiV1ServiceDnsUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1ServiceDnsUpdateMutationRequestSchema = z.lazy(() => dnsSchema).schema.and(z.object({ id: z.never(), dns_full: z.never() }))
export const apiV1ServiceDnsUpdateMutationResponseSchema = z.lazy(() => dnsSchema)
