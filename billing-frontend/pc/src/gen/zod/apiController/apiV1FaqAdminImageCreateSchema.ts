import { z } from "zod"
import { faqImageSchema } from "../faqImageSchema"

export const apiV1FaqAdminImageCreate201Schema = z.lazy(() => faqImageSchema)
export const apiV1FaqAdminImageCreateMutationRequestSchema = z.lazy(() => faqImageSchema).schema.and(z.object({ id: z.never(), image: z.never() }))
export const apiV1FaqAdminImageCreateMutationResponseSchema = z.lazy(() => faqImageSchema)
