import { z } from "zod"

export const apiV1UserAdminWithdrawalSystemsDelete204Schema = z.any()
export const apiV1UserAdminWithdrawalSystemsDeleteMutationResponseSchema = z.any()
export const apiV1UserAdminWithdrawalSystemsDeletePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Withdrawal system.`) })
