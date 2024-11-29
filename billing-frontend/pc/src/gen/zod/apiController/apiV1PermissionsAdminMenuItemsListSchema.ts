import { z } from "zod"
import { adminMenuItemSchema } from "../adminMenuItemSchema"

export const apiV1PermissionsAdminMenuItemsListQueryResponseSchema = z.array(z.lazy(() => adminMenuItemSchema))
