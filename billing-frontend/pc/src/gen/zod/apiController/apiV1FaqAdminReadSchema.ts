import { z } from "zod"
import { faqDetailSchema } from "../faqDetailSchema"

export const apiV1FaqAdminReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1FaqAdminReadQueryResponseSchema = z.lazy(() => faqDetailSchema)
