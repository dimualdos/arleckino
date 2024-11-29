import { z } from "zod"

export const apiExternalV1PlaylistReadPathParamsSchema = z.object({ fmt: z.string(), ott_id: z.string() })
export const apiExternalV1PlaylistReadQueryResponseSchema = z.any()
