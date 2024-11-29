import { z } from "zod"

export const deviceChangeViewTypeSchema = z.object({
  view_type: z.enum([`portal`, `playlist`]),
  ministra_server: z.number().nullish(),
  ministra_login: z.string().min(1).nullish(),
  ministra_password: z.string().min(1).nullish(),
})
