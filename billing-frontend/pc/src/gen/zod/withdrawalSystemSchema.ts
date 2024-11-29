import { z } from "zod"

export const withdrawalSystemSchema = z.object({
  id: z.number().readonly().optional(),
  name: z.string().min(1).max(255),
  user_identifier_name: z.string().min(1).max(255),
  user_identifier_regexp: z.string().max(255).nullish(),
  user_identifier_example: z.string().max(255).nullish(),
  is_disabled: z.boolean().optional(),
})
