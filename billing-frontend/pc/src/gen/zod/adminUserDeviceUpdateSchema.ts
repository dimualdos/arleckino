import { z } from "zod"

export const adminUserDeviceUpdateSchema = z.object({
  server_id: z.number().nullable(),
  playlist_id: z.number().nullable(),
  ott_id: z.string().min(1),
  view_type: z.enum([`portal`, `playlist`]),
  ministra_server: z.number().nullable(),
  ministra_login: z.string().min(1).nullable(),
  ministra_password: z.string().min(1).nullable(),
})
