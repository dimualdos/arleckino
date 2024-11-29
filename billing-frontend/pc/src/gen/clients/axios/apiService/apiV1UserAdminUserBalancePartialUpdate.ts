import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserBalancePartialUpdateMutationRequest,
  ApiV1UserAdminUserBalancePartialUpdateMutationResponse,
  ApiV1UserAdminUserBalancePartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserBalancePartialUpdate"

/**
 * @description Список сообщений **message_type**:* **amount_must_be_positive_or_nul**Сумма должна быть больше или равна нулю.
 * @summary Изменение баланса пользователя администратором
 * @link /api/v1/user/admin/user/:id/balance/ */
export async function apiV1UserAdminUserBalancePartialUpdate(
  { id }: ApiV1UserAdminUserBalancePartialUpdatePathParams,
  data: ApiV1UserAdminUserBalancePartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserBalancePartialUpdateMutationResponse>> {
  const res = await client<ApiV1UserAdminUserBalancePartialUpdateMutationResponse, ApiV1UserAdminUserBalancePartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/user/admin/user/${id}/balance/`,
    data,
    ...options,
  })
  return res
}
