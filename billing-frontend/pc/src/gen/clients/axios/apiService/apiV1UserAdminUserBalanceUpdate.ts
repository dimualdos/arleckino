import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserBalanceUpdateMutationRequest,
  ApiV1UserAdminUserBalanceUpdateMutationResponse,
  ApiV1UserAdminUserBalanceUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserBalanceUpdate"

/**
 * @description Список сообщений **message_type**:* **amount_must_be_positive_or_nul**Сумма должна быть больше или равна нулю.
 * @summary Изменение баланса пользователя администратором
 * @link /api/v1/user/admin/user/:id/balance/ */
export async function apiV1UserAdminUserBalanceUpdate(
  { id }: ApiV1UserAdminUserBalanceUpdatePathParams,
  data: ApiV1UserAdminUserBalanceUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserBalanceUpdateMutationResponse>> {
  const res = await client<ApiV1UserAdminUserBalanceUpdateMutationResponse, ApiV1UserAdminUserBalanceUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/user/admin/user/${id}/balance/`,
    data,
    ...options,
  })
  return res
}
