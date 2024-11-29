import { z } from "zod"
import { ministraServerSchema } from "../ministraServerSchema"

export const apiV1ServiceAdminMinistraUpdatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this ministra server.`) })
export const apiV1ServiceAdminMinistraUpdateMutationRequestSchema = z
  .lazy(() => ministraServerSchema)
  .schema.and(z.object({ id: z.never(), aura_url: z.never(), mag_url: z.never(), android_url: z.never(), stalker_url: z.never(), created_at: z.never() }))
export const apiV1ServiceAdminMinistraUpdateMutationResponseSchema = z.lazy(() => ministraServerSchema)
