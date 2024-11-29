import { z } from "zod"
import { withdrawalSystemSchema } from "../withdrawalSystemSchema"

export const apiV1UserAdminWithdrawalSystemsReadPathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this Withdrawal system.`) })
export const apiV1UserAdminWithdrawalSystemsReadQueryResponseSchema = z.lazy(() => withdrawalSystemSchema)
