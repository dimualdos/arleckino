import { z } from "zod"
import { dnsSchema } from "../dnsSchema"

export const apiV1ServiceAdminDnsListCreate201Schema = z.lazy(() => dnsSchema)
export const apiV1ServiceAdminDnsListCreateMutationRequestSchema = z.lazy(() => dnsSchema).schema.and(z.object({ id: z.never(), dns_full: z.never() }))
export const apiV1ServiceAdminDnsListCreateMutationResponseSchema = z.lazy(() => dnsSchema)
