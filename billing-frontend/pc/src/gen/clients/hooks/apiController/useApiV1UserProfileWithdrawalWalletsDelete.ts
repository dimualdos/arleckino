import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserProfileWithdrawalWalletsDeleteMutationResponse,
  ApiV1UserProfileWithdrawalWalletsDeletePathParams,
  ApiV1UserProfileWithdrawalWalletsDelete204,
} from "../../../models/ts/apiController/ApiV1UserProfileWithdrawalWalletsDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfileWithdrawalWalletsDeleteClient = typeof client<ApiV1UserProfileWithdrawalWalletsDeleteMutationResponse, ApiV1UserProfileWithdrawalWalletsDelete204, never>
type ApiV1UserProfileWithdrawalWalletsDelete = {
  data: ApiV1UserProfileWithdrawalWalletsDeleteMutationResponse
  error: ApiV1UserProfileWithdrawalWalletsDelete204
  request: never
  pathParams: ApiV1UserProfileWithdrawalWalletsDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileWithdrawalWalletsDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_user_identifier_does_not_match_template**Указанный идентификатор пользователя не соответствует шаблону.* **withdrawal_wallet_user_identifier_already_exists**Указанный идентификатор пользователя уже используется для другого кошелька.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Просмотр, изменение и удаление кошелька в системе для вывода средств
 * @link /api/v1/user/profile/withdrawal-wallets/:id */
export function useApiV1UserProfileWithdrawalWalletsDelete(
  id: ApiV1UserProfileWithdrawalWalletsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserProfileWithdrawalWalletsDelete["response"], ApiV1UserProfileWithdrawalWalletsDelete["error"], void>
    client?: ApiV1UserProfileWithdrawalWalletsDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfileWithdrawalWalletsDelete["response"], ApiV1UserProfileWithdrawalWalletsDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfileWithdrawalWalletsDelete["response"], ApiV1UserProfileWithdrawalWalletsDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserProfileWithdrawalWalletsDelete["data"], ApiV1UserProfileWithdrawalWalletsDelete["error"], void>({
        method: "delete",
        url: `/api/v1/user/profile/withdrawal-wallets/${id}`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
