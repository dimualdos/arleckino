import { z } from "zod"

export const faqImageSchema = z.object({ id: z.number().readonly().optional(), image: z.string().readonly().optional(), faq: z.number().nullish(), tmp_faq_id: z.string().uuid().nullish() })
