import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserProfileWithdrawalWalletsReadQueryResponse, ApiV1UserProfileWithdrawalWalletsReadPathParams } from "../../../models/ts/apiController/ApiV1UserProfileWithdrawalWalletsRead"

/**
 * @description Список сообщений **message_type**:* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_user_identifier_does_not_match_template**Указанный идентификатор пользователя не соответствует шаблону.* **withdrawal_wallet_user_identifier_already_exists**Указанный идентификатор пользователя уже используется для другого кошелька.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Просмотр, изменение и удаление кошелька в системе для вывода средств
 * @link /api/v1/user/profile/withdrawal-wallets/:id */
export async function apiV1UserProfileWithdrawalWalletsRead(
  { id }: ApiV1UserProfileWithdrawalWalletsReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserProfileWithdrawalWalletsReadQueryResponse>> {
  const res = await client<ApiV1UserProfileWithdrawalWalletsReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/profile/withdrawal-wallets/${id}`,
    ...options,
  })
  return res
}
