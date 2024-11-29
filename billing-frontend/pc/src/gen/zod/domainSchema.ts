import { z } from "zod"

export const domainSchema = z.object({
  id: z.number().readonly().optional(),
  order: z.number().min(0).max(2147483647).describe(`We usualy order a model in a client and an admin part.`).optional(),
  is_active: z.boolean().describe(`This entry is visible or unvisible for a client part or admin part.`).optional(),
  is_deleted: z.boolean().optional(),
  created_date: z.string().datetime().readonly().describe(`Show when an entry was created.`).optional(),
  modified_date: z.string().datetime().readonly().describe(`Show when an entry was updated`).optional(),
  name: z.string().min(1).max(255),
  url: z.string().min(1).max(255),
})
