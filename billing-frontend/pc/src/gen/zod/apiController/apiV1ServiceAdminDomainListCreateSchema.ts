import { z } from "zod"
import { domainResponseSchema } from "../domainResponseSchema"

export const apiV1ServiceAdminDomainListCreate201Schema = z.lazy(() => domainResponseSchema)
export const apiV1ServiceAdminDomainListCreateMutationRequestSchema = z.lazy(() => domainResponseSchema).schema.and(z.object({ id: z.never(), dns_list: z.never() }))
export const apiV1ServiceAdminDomainListCreateMutationResponseSchema = z.lazy(() => domainResponseSchema)
