import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserAdminWithdrawalSystemsReadQueryResponse, ApiV1UserAdminWithdrawalSystemsReadPathParams } from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalSystemsRead"

/**
 * @description .
 * @summary Просмотр, изменение и удаление системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems/:id */
export async function apiV1UserAdminWithdrawalSystemsRead(
  { id }: ApiV1UserAdminWithdrawalSystemsReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminWithdrawalSystemsReadQueryResponse>> {
  const res = await client<ApiV1UserAdminWithdrawalSystemsReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/withdrawal/systems/${id}`,
    ...options,
  })
  return res
}
