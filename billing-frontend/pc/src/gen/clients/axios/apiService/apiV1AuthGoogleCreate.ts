import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1AuthGoogleCreateMutationRequest, ApiV1AuthGoogleCreateMutationResponse } from "../../../models/ts/apiController/ApiV1AuthGoogleCreate"

/**
 * @link /api/v1/auth/google/ */
export async function apiV1AuthGoogleCreate(
  data?: ApiV1AuthGoogleCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1AuthGoogleCreateMutationResponse>> {
  const res = await client<ApiV1AuthGoogleCreateMutationResponse, ApiV1AuthGoogleCreateMutationRequest>({
    method: "post",
    url: `/api/v1/auth/google/`,
    data,
    ...options,
  })
  return res
}
