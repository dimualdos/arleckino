import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminDomainListListQueryResponse, ApiV1ServiceAdminDomainListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceAdminDomainListList"

/**
 * @description Список доменов, создание нового домена
 * @link /api/v1/service/admin/domain/list/ */
export async function apiV1ServiceAdminDomainListList(
  params?: ApiV1ServiceAdminDomainListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminDomainListListQueryResponse>> {
  const res = await client<ApiV1ServiceAdminDomainListListQueryResponse>({
    method: "get",
    url: `/api/v1/service/admin/domain/list/`,
    params,
    ...options,
  })
  return res
}
