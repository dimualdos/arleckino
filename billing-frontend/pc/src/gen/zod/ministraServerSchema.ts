import { z } from "zod"

export const ministraServerSchema = z.object({
  id: z.number().readonly().optional(),
  aura_url: z.string().readonly().optional(),
  mag_url: z.string().readonly().optional(),
  android_url: z.string().readonly().optional(),
  stalker_url: z.string().readonly().optional(),
  title: z.string().min(1).max(255),
  dns: z.string().min(1).max(100),
  web_login: z.string().min(1).max(255),
  web_password: z.string().min(1).max(255),
  custom_api_url: z.string().min(1).max(255).optional(),
  custom_api_secret: z.string().min(1).max(255).optional(),
  version: z.enum([`v5.3`, `v5.6`]).optional(),
  created_at: z.string().datetime().readonly().optional(),
  updated_at: z.string().datetime().optional(),
  streaming_server_dns: z.string().min(1).max(150).optional(),
  streaming_server_archive_days: z.number().min(0).max(2147483647).optional(),
  dt_last_synchronization: z.string().datetime().nullish(),
})
