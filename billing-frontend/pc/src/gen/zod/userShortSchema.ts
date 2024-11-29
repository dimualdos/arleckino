import { z } from "zod"

export const userShortSchema = z.object({
  id: z.number().readonly().optional(),
  first_name: z.string().max(30).optional(),
  last_name: z.string().max(150).optional(),
  email: z.string().email().max(254).optional(),
  is_active: z.boolean().describe(`Отметьте, если пользователь должен считаться активным. Уберите эту отметку вместо удаления учётной записи.`).optional(),
})
