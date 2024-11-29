import { z } from "zod"
import { appHwidSchema } from "../appHwidSchema"

export const apiExternalV1AppHwidCreate201Schema = z.lazy(() => appHwidSchema)
export const apiExternalV1AppHwidCreateMutationRequestSchema = z.lazy(() => appHwidSchema)
export const apiExternalV1AppHwidCreateMutationResponseSchema = z.lazy(() => appHwidSchema)
