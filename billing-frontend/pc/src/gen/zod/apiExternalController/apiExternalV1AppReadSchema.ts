import { z } from "zod"

export const apiExternalV1AppReadPathParamsSchema = z.object({ hwid: z.string() })
export const apiExternalV1AppReadQueryResponseSchema = z.any()
