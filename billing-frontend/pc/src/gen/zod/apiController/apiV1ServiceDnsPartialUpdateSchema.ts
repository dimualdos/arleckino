import { z } from "zod"
import { dnsSchema } from "../dnsSchema"

export const apiV1ServiceDnsPartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1ServiceDnsPartialUpdateMutationRequestSchema = z.lazy(() => dnsSchema).schema.and(z.object({ id: z.never(), dns_full: z.never() }))
export const apiV1ServiceDnsPartialUpdateMutationResponseSchema = z.lazy(() => dnsSchema)
