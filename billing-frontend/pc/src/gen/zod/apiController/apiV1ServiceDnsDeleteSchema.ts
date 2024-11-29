import { z } from "zod"

export const apiV1ServiceDnsDelete204Schema = z.any()
export const apiV1ServiceDnsDeleteMutationResponseSchema = z.any()
export const apiV1ServiceDnsDeletePathParamsSchema = z.object({ id: z.string() })
