import { z } from "zod"
import { referralStatisticsSchema } from "../referralStatisticsSchema"

export const apiV1UserAdminUserReferralsBalanceReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserAdminUserReferralsBalanceReadQueryResponseSchema = z.lazy(() => referralStatisticsSchema)
