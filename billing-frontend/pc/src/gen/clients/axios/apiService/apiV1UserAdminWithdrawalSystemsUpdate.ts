import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminWithdrawalSystemsUpdateMutationRequest,
  ApiV1UserAdminWithdrawalSystemsUpdateMutationResponse,
  ApiV1UserAdminWithdrawalSystemsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalSystemsUpdate"

/**
 * @description .
 * @summary Просмотр, изменение и удаление системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems/:id */
export async function apiV1UserAdminWithdrawalSystemsUpdate(
  { id }: ApiV1UserAdminWithdrawalSystemsUpdatePathParams,
  data: ApiV1UserAdminWithdrawalSystemsUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminWithdrawalSystemsUpdateMutationResponse>> {
  const res = await client<ApiV1UserAdminWithdrawalSystemsUpdateMutationResponse, ApiV1UserAdminWithdrawalSystemsUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/user/admin/withdrawal/systems/${id}`,
    data,
    ...options,
  })
  return res
}
