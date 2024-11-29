import { z } from "zod"

export const checkAllDevicesSchema = z.object({ condition: z.boolean() })
