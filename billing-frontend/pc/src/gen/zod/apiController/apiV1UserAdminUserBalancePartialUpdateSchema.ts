import { z } from "zod"
import { adminUserBalanceChangeSchema } from "../adminUserBalanceChangeSchema"

export const apiV1UserAdminUserBalancePartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserAdminUserBalancePartialUpdateMutationRequestSchema = z.lazy(() => adminUserBalanceChangeSchema)
export const apiV1UserAdminUserBalancePartialUpdateMutationResponseSchema = z.lazy(() => adminUserBalanceChangeSchema)
