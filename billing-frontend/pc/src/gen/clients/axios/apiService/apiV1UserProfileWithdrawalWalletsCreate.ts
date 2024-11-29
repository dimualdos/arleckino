import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserProfileWithdrawalWalletsCreateMutationRequest,
  ApiV1UserProfileWithdrawalWalletsCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1UserProfileWithdrawalWalletsCreate"

/**
 * @description Список сообщений **message_type**:* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_user_identifier_does_not_match_template**Указанный идентификатор пользователя не соответствует шаблону.* **withdrawal_wallet_user_identifier_already_exists**Указанный идентификатор пользователя уже используется для другого кошелька.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Список кошельков пользователя в системах для вывода средств, создание нового кошелька
 * @link /api/v1/user/profile/withdrawal-wallets */
export async function apiV1UserProfileWithdrawalWalletsCreate(
  data: ApiV1UserProfileWithdrawalWalletsCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserProfileWithdrawalWalletsCreateMutationResponse>> {
  const res = await client<ApiV1UserProfileWithdrawalWalletsCreateMutationResponse, ApiV1UserProfileWithdrawalWalletsCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/profile/withdrawal-wallets`,
    data,
    ...options,
  })
  return res
}
