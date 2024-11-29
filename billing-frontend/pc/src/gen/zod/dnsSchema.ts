import { z } from "zod"

export const dnsSchema = z.object({
  id: z.number().readonly().optional(),
  user_id: z.number(),
  domain_id: z.number(),
  server_id: z.number(),
  dns: z.string().min(1).max(255),
  dns_full: z.string().readonly().optional(),
})
