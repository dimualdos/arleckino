import { z } from "zod"

export const playlistTypeSchema = z.object({
  id: z.number().readonly().optional(),
  url: z.string().readonly().optional(),
  download_url: z.string().readonly().optional(),
  epg_urls: z.string().readonly().optional(),
  epg_lite_urls: z.string().readonly().optional(),
  picon_urls: z.string().readonly().optional(),
  name: z.string().min(1).max(255),
  format_name: z.string().max(50).nullish(),
  file_name: z.string().max(50).nullish(),
  is_archived: z.boolean().optional(),
  is_mediateka: z.boolean().optional(),
  description: z.string().min(1),
  description_url: z.string().max(300).nullish(),
})
