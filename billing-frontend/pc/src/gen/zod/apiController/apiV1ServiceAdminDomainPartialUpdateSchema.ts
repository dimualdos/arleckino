import { z } from "zod"
import { domainSchema } from "../domainSchema"

export const apiV1ServiceAdminDomainPartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1ServiceAdminDomainPartialUpdateMutationRequestSchema = z.lazy(() => domainSchema).schema.and(z.object({ id: z.never(), created_date: z.never(), modified_date: z.never() }))
export const apiV1ServiceAdminDomainPartialUpdateMutationResponseSchema = z.lazy(() => domainSchema)
