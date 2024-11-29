import { z } from "zod"
import { domainSchema } from "../domainSchema"

export const apiV1ServiceAdminDomainReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1ServiceAdminDomainReadQueryResponseSchema = z.lazy(() => domainSchema)
