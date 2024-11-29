import { z } from "zod"

export const createDeviceSchema = z.object({ name: z.string().min(1).default("Устройство для просмотра").optional(), description: z.string().optional() })
