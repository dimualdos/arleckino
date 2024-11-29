import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserAdminWithdrawalSystemsListQueryResponse, ApiV1UserAdminWithdrawalSystemsListQueryParams } from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalSystemsList"

/**
 * @description .
 * @summary Список систем для вывода средств, создание новой системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems */
export async function apiV1UserAdminWithdrawalSystemsList(
  params?: ApiV1UserAdminWithdrawalSystemsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminWithdrawalSystemsListQueryResponse>> {
  const res = await client<ApiV1UserAdminWithdrawalSystemsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/withdrawal/systems`,
    params,
    ...options,
  })
  return res
}
