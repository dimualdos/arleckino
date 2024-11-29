import { z } from "zod"
import { adminGroupUserSchema } from "../adminGroupUserSchema"

export const apiV1PermissionsAdminGroupsUsersListPathParamsSchema = z.object({ group_id: z.string() })
export const apiV1PermissionsAdminGroupsUsersListQueryParamsSchema = z
  .object({
    email: z.string().email().optional(),
    limit: z.number().describe(`Number of results to return per page.`).optional(),
    offset: z.number().describe(`The initial index from which to return the results.`).optional(),
  })
  .optional()
export const apiV1PermissionsAdminGroupsUsersListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => adminGroupUserSchema)),
})
