import { z } from "zod"
import { faqCreateSchema } from "../faqCreateSchema"

export const apiV1FaqAdminUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1FaqAdminUpdateMutationRequestSchema = z.lazy(() => faqCreateSchema)
export const apiV1FaqAdminUpdateMutationResponseSchema = z.lazy(() => faqCreateSchema)
