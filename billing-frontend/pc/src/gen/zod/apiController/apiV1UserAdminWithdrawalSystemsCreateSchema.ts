import { z } from "zod"
import { withdrawalSystemSchema } from "../withdrawalSystemSchema"

export const apiV1UserAdminWithdrawalSystemsCreate201Schema = z.lazy(() => withdrawalSystemSchema)
export const apiV1UserAdminWithdrawalSystemsCreateMutationRequestSchema = z.lazy(() => withdrawalSystemSchema).schema.and(z.object({ id: z.never() }))
export const apiV1UserAdminWithdrawalSystemsCreateMutationResponseSchema = z.lazy(() => withdrawalSystemSchema)
