import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiExternalV1DasDataListQueryResponse } from "../../../models/ts/apiExternalController/ApiExternalV1DasDataList"

/**
 * @description Отбираются активные устройства активных пользователей с активной подпиской.
 * @summary Данные для внешнего сервиса авторизации устройств.
 * @link /api_external/v1/das-data/ */
export async function apiExternalV1DasDataList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiExternalV1DasDataListQueryResponse>> {
  const res = await client<ApiExternalV1DasDataListQueryResponse>({
    method: "get",
    url: `/api_external/v1/das-data/`,
    ...options,
  })
  return res
}
