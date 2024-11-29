import { z } from "zod"
import { dnsSchema } from "../dnsSchema"

export const apiV1ServiceDnsListCreate201Schema = z.lazy(() => dnsSchema)
export const apiV1ServiceDnsListCreateMutationRequestSchema = z.lazy(() => dnsSchema).schema.and(z.object({ id: z.never(), dns_full: z.never() }))
export const apiV1ServiceDnsListCreateMutationResponseSchema = z.lazy(() => dnsSchema)
