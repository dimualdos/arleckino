import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiExternalV1AppReadQueryResponse, ApiExternalV1AppReadPathParams } from "../../../models/ts/apiExternalController/ApiExternalV1AppRead"

/**
 * @description Получение информации для приложения с указанным HWID.
 * @link /api_external/v1/app/:hwid/ */
export async function apiExternalV1AppRead({ hwid }: ApiExternalV1AppReadPathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiExternalV1AppReadQueryResponse>> {
  const res = await client<ApiExternalV1AppReadQueryResponse>({
    method: "get",
    url: `/api_external/v1/app/${hwid}/`,
    ...options,
  })
  return res
}
