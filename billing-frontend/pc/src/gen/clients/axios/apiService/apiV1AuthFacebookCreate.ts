import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1AuthFacebookCreateMutationRequest, ApiV1AuthFacebookCreateMutationResponse } from "../../../models/ts/apiController/ApiV1AuthFacebookCreate"

/**
 * @link /api/v1/auth/facebook/ */
export async function apiV1AuthFacebookCreate(
  data?: ApiV1AuthFacebookCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1AuthFacebookCreateMutationResponse>> {
  const res = await client<ApiV1AuthFacebookCreateMutationResponse, ApiV1AuthFacebookCreateMutationRequest>({
    method: "post",
    url: `/api/v1/auth/facebook/`,
    data,
    ...options,
  })
  return res
}
