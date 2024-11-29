import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminDomainListCreateMutationRequest, ApiV1ServiceAdminDomainListCreateMutationResponse } from "../../../models/ts/apiController/ApiV1ServiceAdminDomainListCreate"

/**
 * @description Список доменов, создание нового домена
 * @link /api/v1/service/admin/domain/list/ */
export async function apiV1ServiceAdminDomainListCreate(
  data: ApiV1ServiceAdminDomainListCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminDomainListCreateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminDomainListCreateMutationResponse, ApiV1ServiceAdminDomainListCreateMutationRequest>({
    method: "post",
    url: `/api/v1/service/admin/domain/list/`,
    data,
    ...options,
  })
  return res
}
