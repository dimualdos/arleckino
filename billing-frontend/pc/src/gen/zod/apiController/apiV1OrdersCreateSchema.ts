import { z } from "zod"
import { createOrderSchema } from "../createOrderSchema"

export const apiV1OrdersCreate201Schema = z.lazy(() => createOrderSchema)
export const apiV1OrdersCreateMutationRequestSchema = z.lazy(() => createOrderSchema)
export const apiV1OrdersCreateMutationResponseSchema = z.lazy(() => createOrderSchema)
