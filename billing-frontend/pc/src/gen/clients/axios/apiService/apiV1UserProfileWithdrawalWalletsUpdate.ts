import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserProfileWithdrawalWalletsUpdateMutationRequest,
  ApiV1UserProfileWithdrawalWalletsUpdateMutationResponse,
  ApiV1UserProfileWithdrawalWalletsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserProfileWithdrawalWalletsUpdate"

/**
 * @description Список сообщений **message_type**:* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_user_identifier_does_not_match_template**Указанный идентификатор пользователя не соответствует шаблону.* **withdrawal_wallet_user_identifier_already_exists**Указанный идентификатор пользователя уже используется для другого кошелька.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Просмотр, изменение и удаление кошелька в системе для вывода средств
 * @link /api/v1/user/profile/withdrawal-wallets/:id */
export async function apiV1UserProfileWithdrawalWalletsUpdate(
  { id }: ApiV1UserProfileWithdrawalWalletsUpdatePathParams,
  data: ApiV1UserProfileWithdrawalWalletsUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserProfileWithdrawalWalletsUpdateMutationResponse>> {
  const res = await client<ApiV1UserProfileWithdrawalWalletsUpdateMutationResponse, ApiV1UserProfileWithdrawalWalletsUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/user/profile/withdrawal-wallets/${id}`,
    data,
    ...options,
  })
  return res
}
