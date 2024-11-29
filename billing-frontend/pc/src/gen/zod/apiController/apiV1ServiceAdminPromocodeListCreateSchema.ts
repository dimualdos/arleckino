import { z } from "zod"
import { promocodeCreateSchema } from "../promocodeCreateSchema"

export const apiV1ServiceAdminPromocodeListCreate201Schema = z.lazy(() => promocodeCreateSchema)
export const apiV1ServiceAdminPromocodeListCreateMutationRequestSchema = z.lazy(() => promocodeCreateSchema)
export const apiV1ServiceAdminPromocodeListCreateMutationResponseSchema = z.lazy(() => promocodeCreateSchema)
