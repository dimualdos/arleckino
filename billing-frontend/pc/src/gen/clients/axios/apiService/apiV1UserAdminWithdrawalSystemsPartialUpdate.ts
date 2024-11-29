import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationRequest,
  ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationResponse,
  ApiV1UserAdminWithdrawalSystemsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalSystemsPartialUpdate"

/**
 * @description .
 * @summary Просмотр, изменение и удаление системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems/:id */
export async function apiV1UserAdminWithdrawalSystemsPartialUpdate(
  { id }: ApiV1UserAdminWithdrawalSystemsPartialUpdatePathParams,
  data: ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationResponse>> {
  const res = await client<ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationResponse, ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/user/admin/withdrawal/systems/${id}`,
    data,
    ...options,
  })
  return res
}
