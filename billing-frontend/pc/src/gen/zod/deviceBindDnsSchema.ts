import { z } from "zod"

export const deviceBindDnsSchema = z.object({ dns_id: z.number() })
