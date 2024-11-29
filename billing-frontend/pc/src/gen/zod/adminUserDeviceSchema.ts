import { z } from "zod"

export const adminUserDeviceSchema = z.object({
  id: z.number().readonly().optional(),
  pk: z.number().readonly().optional(),
  content: z.string().max(512).nullish(),
  created_date: z.string().datetime().readonly().describe(`Show when an entry was created.`).optional(),
  description: z.string().optional(),
  is_active: z.boolean().describe(`This entry is visible or unvisible for a client part or admin part.`).optional(),
  is_deleted: z.boolean().optional(),
  modified_date: z.string().datetime().readonly().describe(`Show when an entry was updated`).optional(),
  name: z.string().min(1).default("Устройство для просмотра").optional(),
  new_device: z.boolean().optional(),
  order: z.number().min(0).max(2147483647).describe(`We usualy order a model in a client and an admin part.`).optional(),
  purchase_date: z.string().datetime().nullish(),
  renew_subscription: z.boolean().optional(),
  selected: z.boolean().optional(),
  server: z.number().nullish(),
  dns: z.number().nullish(),
  playlist: z.number().nullish(),
  start_date: z.string().datetime().nullish(),
  is_test_period: z.boolean().optional(),
  view_type: z.enum([`portal`, `playlist`]).optional(),
  subscription_type: z.enum([`active`, `inactive`, `ending`]).optional(),
  user: z.number(),
  vip: z.boolean().optional(),
  ott_id: z.string().max(256).nullish(),
  ministra_server: z.number().nullish(),
  ministra_login: z.string().max(255).nullish(),
  ministra_password: z.string().max(255).nullish(),
  subscription: z.string().readonly().optional(),
  playlist_type: z.number().nullish(),
  app_pairing_code: z.string().max(255).nullish(),
  app_hwid: z.string().nullish(),
  app_status: z.string().readonly().optional(),
})
