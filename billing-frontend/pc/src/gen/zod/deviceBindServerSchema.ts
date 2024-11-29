import { z } from "zod"

export const deviceBindServerSchema = z.object({ server_id: z.number() })
