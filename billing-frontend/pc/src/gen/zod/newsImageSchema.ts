import { z } from "zod"

export const newsImageSchema = z.object({ id: z.number().readonly().optional(), image: z.string().readonly().optional(), news: z.number().nullish(), tmp_news_id: z.string().uuid().nullish() })
