import { actionGroupSchema } from "./actionGroupSchema"
import { z } from "zod"

export const actionTypeSchema = z.object({
  id: z.number().readonly().optional(),
  statuses: z.string().readonly().optional(),
  group: z.lazy(() => actionGroupSchema),
  title: z.string().min(1).max(255),
  label: z.string().min(1).readonly().optional(),
})
