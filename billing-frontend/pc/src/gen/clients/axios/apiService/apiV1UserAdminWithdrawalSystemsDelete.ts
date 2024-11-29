import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserAdminWithdrawalSystemsDeleteMutationResponse, ApiV1UserAdminWithdrawalSystemsDeletePathParams } from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalSystemsDelete"

/**
 * @description .
 * @summary Просмотр, изменение и удаление системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems/:id */
export async function apiV1UserAdminWithdrawalSystemsDelete(
  { id }: ApiV1UserAdminWithdrawalSystemsDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminWithdrawalSystemsDeleteMutationResponse>> {
  const res = await client<ApiV1UserAdminWithdrawalSystemsDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/user/admin/withdrawal/systems/${id}`,
    ...options,
  })
  return res
}
