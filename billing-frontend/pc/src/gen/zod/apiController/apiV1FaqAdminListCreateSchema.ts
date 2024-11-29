import { z } from "zod"
import { faqCreateSchema } from "../faqCreateSchema"

export const apiV1FaqAdminListCreate201Schema = z.lazy(() => faqCreateSchema)
export const apiV1FaqAdminListCreateMutationRequestSchema = z.lazy(() => faqCreateSchema)
export const apiV1FaqAdminListCreateMutationResponseSchema = z.lazy(() => faqCreateSchema)
