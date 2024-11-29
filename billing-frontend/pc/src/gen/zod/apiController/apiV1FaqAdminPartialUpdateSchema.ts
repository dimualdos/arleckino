import { z } from "zod"
import { faqCreateSchema } from "../faqCreateSchema"

export const apiV1FaqAdminPartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1FaqAdminPartialUpdateMutationRequestSchema = z.lazy(() => faqCreateSchema)
export const apiV1FaqAdminPartialUpdateMutationResponseSchema = z.lazy(() => faqCreateSchema)
