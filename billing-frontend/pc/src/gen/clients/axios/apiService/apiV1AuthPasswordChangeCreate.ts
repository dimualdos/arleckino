import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1AuthPasswordChangeCreateMutationRequest,
  ApiV1AuthPasswordChangeCreateMutationResponse,
  ApiV1AuthPasswordChangeCreatePathParams,
} from "../../../models/ts/apiController/ApiV1AuthPasswordChangeCreate"

/**
 * @description .
 * @summary Изменение пароля пользователя
 * @link /api/v1/auth/password/change/:uidb64/:token/ */
export async function apiV1AuthPasswordChangeCreate(
  { token, uidb64 }: ApiV1AuthPasswordChangeCreatePathParams,
  data: ApiV1AuthPasswordChangeCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1AuthPasswordChangeCreateMutationResponse>> {
  const res = await client<ApiV1AuthPasswordChangeCreateMutationResponse, ApiV1AuthPasswordChangeCreateMutationRequest>({
    method: "post",
    url: `/api/v1/auth/password/change/${uidb64}/${token}/`,
    data,
    ...options,
  })
  return res
}
