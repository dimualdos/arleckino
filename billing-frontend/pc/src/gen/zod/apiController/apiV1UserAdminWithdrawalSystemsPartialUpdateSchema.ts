import { z } from "zod"
import { withdrawalSystemSchema } from "../withdrawalSystemSchema"

export const apiV1UserAdminWithdrawalSystemsPartialUpdatePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Withdrawal system.`) })
export const apiV1UserAdminWithdrawalSystemsPartialUpdateMutationRequestSchema = z.lazy(() => withdrawalSystemSchema).schema.and(z.object({ id: z.never() }))
export const apiV1UserAdminWithdrawalSystemsPartialUpdateMutationResponseSchema = z.lazy(() => withdrawalSystemSchema)
