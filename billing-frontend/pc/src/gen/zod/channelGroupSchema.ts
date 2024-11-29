import { z } from "zod"

export const channelGroupSchema = z.object({
  id: z.number().readonly().optional(),
  channels_count: z.number().readonly().optional(),
  count_selected: z.number().readonly().optional(),
  order: z.number().min(0).max(2147483647).describe(`We usualy order a model in a client and an admin part.`).optional(),
  is_active: z.boolean().describe(`This entry is visible or unvisible for a client part or admin part.`).optional(),
  is_deleted: z.boolean().optional(),
  created_date: z.string().datetime().readonly().describe(`Show when an entry was created.`).optional(),
  modified_date: z.string().datetime().readonly().describe(`Show when an entry was updated`).optional(),
  csv_group_id: z.number().min(-2147483648).max(2147483647).nullish(),
  name: z.string().min(1).max(255),
  is_hidden: z.boolean().optional(),
  ordering_id: z.number().optional(),
  playlist: z.number(),
})
