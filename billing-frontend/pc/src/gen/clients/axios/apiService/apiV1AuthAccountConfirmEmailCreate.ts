import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1AuthAccountConfirmEmailCreateMutationRequest, ApiV1AuthAccountConfirmEmailCreateMutationResponse } from "../../../models/ts/apiController/ApiV1AuthAccountConfirmEmailCreate"

/**
 * @link /api/v1/auth/account-confirm-email/ */
export async function apiV1AuthAccountConfirmEmailCreate(
  data: ApiV1AuthAccountConfirmEmailCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1AuthAccountConfirmEmailCreateMutationResponse>> {
  const res = await client<ApiV1AuthAccountConfirmEmailCreateMutationResponse, ApiV1AuthAccountConfirmEmailCreateMutationRequest>({
    method: "post",
    url: `/api/v1/auth/account-confirm-email/`,
    data,
    ...options,
  })
  return res
}
