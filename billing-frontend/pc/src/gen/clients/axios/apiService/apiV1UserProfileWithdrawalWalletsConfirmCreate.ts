import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserProfileWithdrawalWalletsConfirmCreateMutationRequest,
  ApiV1UserProfileWithdrawalWalletsConfirmCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1UserProfileWithdrawalWalletsConfirmCreate"

/**
 * @description Список сообщений **message_type**:* **withdrawal_wallet_confirm_token_invalid**Указан некорректный или просроченный токен для подтверждения кошелька.* **withdrawal_wallet_not_found_by_id**Кошелек для вывода средств с указанным ID не обнаружен.* **withdrawal_wallet_already_confirmed**Кошелек для вывода средств с указанным ID уже подтвержден.
 * @summary Подтверждение кошелька в системе для вывода средств
 * @link /api/v1/user/profile/withdrawal-wallets/confirm */
export async function apiV1UserProfileWithdrawalWalletsConfirmCreate(
  data: ApiV1UserProfileWithdrawalWalletsConfirmCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserProfileWithdrawalWalletsConfirmCreateMutationResponse>> {
  const res = await client<ApiV1UserProfileWithdrawalWalletsConfirmCreateMutationResponse, ApiV1UserProfileWithdrawalWalletsConfirmCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/profile/withdrawal-wallets/confirm`,
    data,
    ...options,
  })
  return res
}
