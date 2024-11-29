import { z } from "zod"
import { referralStatisticsSchema } from "../referralStatisticsSchema"

export const apiV1UserReferralsStatisticsReadQueryResponseSchema = z.lazy(() => referralStatisticsSchema)
