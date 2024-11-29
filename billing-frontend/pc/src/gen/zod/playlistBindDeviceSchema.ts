import { z } from "zod"

export const playlistBindDeviceSchema = z.object({ devices: z.string().readonly().optional() })
