import { z } from "zod"
import { promocodeApplySchema } from "../promocodeApplySchema"

export const apiV1ServicePromocodeApplyCreate201Schema = z.lazy(() => promocodeApplySchema)
export const apiV1ServicePromocodeApplyCreateMutationRequestSchema = z.lazy(() => promocodeApplySchema)
export const apiV1ServicePromocodeApplyCreateMutationResponseSchema = z.lazy(() => promocodeApplySchema)
