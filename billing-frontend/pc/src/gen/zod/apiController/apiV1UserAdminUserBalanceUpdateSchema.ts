import { z } from "zod"
import { adminUserBalanceChangeSchema } from "../adminUserBalanceChangeSchema"

export const apiV1UserAdminUserBalanceUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserAdminUserBalanceUpdateMutationRequestSchema = z.lazy(() => adminUserBalanceChangeSchema)
export const apiV1UserAdminUserBalanceUpdateMutationResponseSchema = z.lazy(() => adminUserBalanceChangeSchema)
