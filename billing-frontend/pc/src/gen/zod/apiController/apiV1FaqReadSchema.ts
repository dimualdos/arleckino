import { z } from "zod"
import { faqDetailSchema } from "../faqDetailSchema"

export const apiV1FaqReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1FaqReadQueryResponseSchema = z.lazy(() => faqDetailSchema)
