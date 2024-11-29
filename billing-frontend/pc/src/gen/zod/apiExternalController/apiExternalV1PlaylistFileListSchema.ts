import { z } from "zod"

export const apiExternalV1PlaylistFileListPathParamsSchema = z.object({ fmt: z.string(), ott_id: z.string() })
export const apiExternalV1PlaylistFileListQueryResponseSchema = z.any()
