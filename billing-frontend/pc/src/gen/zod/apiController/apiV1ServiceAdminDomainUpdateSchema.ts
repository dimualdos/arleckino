import { z } from "zod"
import { domainSchema } from "../domainSchema"

export const apiV1ServiceAdminDomainUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1ServiceAdminDomainUpdateMutationRequestSchema = z.lazy(() => domainSchema).schema.and(z.object({ id: z.never(), created_date: z.never(), modified_date: z.never() }))
export const apiV1ServiceAdminDomainUpdateMutationResponseSchema = z.lazy(() => domainSchema)
