import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserWithdrawalSystemsListQueryResponse, ApiV1UserWithdrawalSystemsListQueryParams } from "../../../models/ts/apiController/ApiV1UserWithdrawalSystemsList"

/**
 * @description .
 * @summary Список систем для вывода средств
 * @link /api/v1/user/withdrawal/systems */
export async function apiV1UserWithdrawalSystemsList(
  params?: ApiV1UserWithdrawalSystemsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserWithdrawalSystemsListQueryResponse>> {
  const res = await client<ApiV1UserWithdrawalSystemsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/withdrawal/systems`,
    params,
    ...options,
  })
  return res
}
