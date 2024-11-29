import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserProfileWithdrawalWalletsCreateMutationRequest,
  ApiV1UserProfileWithdrawalWalletsCreateMutationResponse,
  ApiV1UserProfileWithdrawalWalletsCreate201,
} from "../../../models/ts/apiController/ApiV1UserProfileWithdrawalWalletsCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfileWithdrawalWalletsCreateClient = typeof client<
  ApiV1UserProfileWithdrawalWalletsCreateMutationResponse,
  ApiV1UserProfileWithdrawalWalletsCreate201,
  ApiV1UserProfileWithdrawalWalletsCreateMutationRequest
>
type ApiV1UserProfileWithdrawalWalletsCreate = {
  data: ApiV1UserProfileWithdrawalWalletsCreateMutationResponse
  error: ApiV1UserProfileWithdrawalWalletsCreate201
  request: ApiV1UserProfileWithdrawalWalletsCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileWithdrawalWalletsCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_user_identifier_does_not_match_template**Указанный идентификатор пользователя не соответствует шаблону.* **withdrawal_wallet_user_identifier_already_exists**Указанный идентификатор пользователя уже используется для другого кошелька.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Список кошельков пользователя в системах для вывода средств, создание нового кошелька
 * @link /api/v1/user/profile/withdrawal-wallets */
export function useApiV1UserProfileWithdrawalWalletsCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserProfileWithdrawalWalletsCreate["response"], ApiV1UserProfileWithdrawalWalletsCreate["error"], ApiV1UserProfileWithdrawalWalletsCreate["request"]>
    client?: ApiV1UserProfileWithdrawalWalletsCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfileWithdrawalWalletsCreate["response"], ApiV1UserProfileWithdrawalWalletsCreate["error"], ApiV1UserProfileWithdrawalWalletsCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfileWithdrawalWalletsCreate["response"], ApiV1UserProfileWithdrawalWalletsCreate["error"], ApiV1UserProfileWithdrawalWalletsCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserProfileWithdrawalWalletsCreate["data"], ApiV1UserProfileWithdrawalWalletsCreate["error"], ApiV1UserProfileWithdrawalWalletsCreate["request"]>({
        method: "post",
        url: `/api/v1/user/profile/withdrawal-wallets`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
