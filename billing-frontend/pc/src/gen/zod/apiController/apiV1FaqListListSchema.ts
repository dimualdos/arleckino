import { z } from "zod"
import { faqListSchema } from "../faqListSchema"

export const apiV1FaqListListQueryParamsSchema = z
  .object({
    language: z.string().optional(),
    tag: z.string().optional(),
    search: z.string().describe(`A search term.`).optional(),
    ordering: z.string().describe(`Which field to use when ordering the results.`).optional(),
  })
  .optional()
export const apiV1FaqListListQueryResponseSchema = z.array(z.lazy(() => faqListSchema))
