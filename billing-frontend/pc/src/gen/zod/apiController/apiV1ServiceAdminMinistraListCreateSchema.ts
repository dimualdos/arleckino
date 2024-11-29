import { z } from "zod"
import { ministraServerSchema } from "../ministraServerSchema"

export const apiV1ServiceAdminMinistraListCreate201Schema = z.lazy(() => ministraServerSchema)
export const apiV1ServiceAdminMinistraListCreateMutationRequestSchema = z
  .lazy(() => ministraServerSchema)
  .schema.and(z.object({ id: z.never(), aura_url: z.never(), mag_url: z.never(), android_url: z.never(), stalker_url: z.never(), created_at: z.never() }))
export const apiV1ServiceAdminMinistraListCreateMutationResponseSchema = z.lazy(() => ministraServerSchema)
