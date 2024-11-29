import { z } from "zod"
import { userBlockSchema } from "../userBlockSchema"

export const apiV1UserBlockReadQueryResponseSchema = z.lazy(() => userBlockSchema)
