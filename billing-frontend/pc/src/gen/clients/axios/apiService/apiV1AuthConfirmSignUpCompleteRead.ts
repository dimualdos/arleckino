import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1AuthConfirmSignUpCompleteReadQueryResponse, ApiV1AuthConfirmSignUpCompleteReadPathParams } from "../../../models/ts/apiController/ApiV1AuthConfirmSignUpCompleteRead"

/**
 * @link /api/v1/auth/confirm/sign-up-complete/:key/ */
export async function apiV1AuthConfirmSignUpCompleteRead(
  { key }: ApiV1AuthConfirmSignUpCompleteReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1AuthConfirmSignUpCompleteReadQueryResponse>> {
  const res = await client<ApiV1AuthConfirmSignUpCompleteReadQueryResponse>({
    method: "get",
    url: `/api/v1/auth/confirm/sign-up-complete/${key}/`,
    ...options,
  })
  return res
}
