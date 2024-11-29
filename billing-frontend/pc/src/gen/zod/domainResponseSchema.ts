import { dnsSchema } from "./dnsSchema"
import { z } from "zod"

export const domainResponseSchema = z.object({
  id: z.number().readonly().optional(),
  name: z.string().min(1).max(255),
  url: z.string().min(1).max(255),
  dns_list: z.array(z.lazy(() => dnsSchema)).optional(),
})
