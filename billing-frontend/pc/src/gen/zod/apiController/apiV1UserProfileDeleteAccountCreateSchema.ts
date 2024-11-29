import { z } from "zod"
import { userProfileDeleteAccountSchema } from "../userProfileDeleteAccountSchema"

export const apiV1UserProfileDeleteAccountCreate201Schema = z.lazy(() => userProfileDeleteAccountSchema)
export const apiV1UserProfileDeleteAccountCreateMutationRequestSchema = z.lazy(() => userProfileDeleteAccountSchema)
export const apiV1UserProfileDeleteAccountCreateMutationResponseSchema = z.lazy(() => userProfileDeleteAccountSchema)
