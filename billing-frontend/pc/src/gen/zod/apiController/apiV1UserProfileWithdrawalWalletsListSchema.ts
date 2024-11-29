import { z } from "zod"
import { withdrawalWalletSchema } from "../withdrawalWalletSchema"

export const apiV1UserProfileWithdrawalWalletsListQueryParamsSchema = z
  .object({ page: z.number().describe(`A page number within the paginated result set.`).optional(), limit: z.number().describe(`Number of results to return per page.`).optional() })
  .optional()
export const apiV1UserProfileWithdrawalWalletsListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => withdrawalWalletSchema)),
})
