import { z } from "zod"
import { userSchema } from "../userSchema"

export const apiV1UserInfoReadQueryResponseSchema = z.lazy(() => userSchema)
