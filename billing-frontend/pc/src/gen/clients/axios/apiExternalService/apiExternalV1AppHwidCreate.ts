import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiExternalV1AppHwidCreateMutationRequest, ApiExternalV1AppHwidCreateMutationResponse } from "../../../models/ts/apiExternalController/ApiExternalV1AppHwidCreate"

/**
 * @description Привязка приложения с указанным HWID к устройству пользователя по коду сопряжения.
 * @link /api_external/v1/app/hwid/ */
export async function apiExternalV1AppHwidCreate(
  data: ApiExternalV1AppHwidCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiExternalV1AppHwidCreateMutationResponse>> {
  const res = await client<ApiExternalV1AppHwidCreateMutationResponse, ApiExternalV1AppHwidCreateMutationRequest>({
    method: "post",
    url: `/api_external/v1/app/hwid/`,
    data,
    ...options,
  })
  return res
}
