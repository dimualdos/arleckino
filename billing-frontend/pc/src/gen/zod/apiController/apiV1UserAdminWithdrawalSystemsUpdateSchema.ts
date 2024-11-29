import { z } from "zod"
import { withdrawalSystemSchema } from "../withdrawalSystemSchema"

export const apiV1UserAdminWithdrawalSystemsUpdatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Withdrawal system.`) })
export const apiV1UserAdminWithdrawalSystemsUpdateMutationRequestSchema = z.lazy(() => withdrawalSystemSchema).schema.and(z.object({ id: z.never() }))
export const apiV1UserAdminWithdrawalSystemsUpdateMutationResponseSchema = z.lazy(() => withdrawalSystemSchema)
