import { z } from "zod"

export const serverSchema = z.object({
  id: z.number().readonly().optional(),
  order: z.number().min(0).max(2147483647).describe(`We usualy order a model in a client and an admin part.`).optional(),
  is_active: z.boolean().describe(`This entry is visible or unvisible for a client part or admin part.`).optional(),
  is_deleted: z.boolean().optional(),
  created_date: z.string().datetime().readonly().describe(`Show when an entry was created.`).optional(),
  modified_date: z.string().datetime().readonly().describe(`Show when an entry was updated`).optional(),
  name: z.string().max(255).optional(),
  dns: z.string().max(255).optional(),
  description: z.string().optional(),
  kind: z.enum([`portal`, `playlist`]).describe(`Playlist or Portal`).optional(),
  manual_disable_sale: z.boolean().optional(),
  mbfs: z.boolean().optional(),
  archive_days: z.number().min(-2147483648).max(2147483647).optional(),
  speedtest_download: z.string().max(255).optional(),
  speedtest_ping: z.string().max(255).optional(),
  speedtest_dns: z.string().max(255).optional(),
  is_virtual: z.boolean().optional(),
})
