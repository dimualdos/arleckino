import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserProfileWithdrawalWalletsUpdateMutationRequest,
  ApiV1UserProfileWithdrawalWalletsUpdateMutationResponse,
  ApiV1UserProfileWithdrawalWalletsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserProfileWithdrawalWalletsUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfileWithdrawalWalletsUpdateClient = typeof client<ApiV1UserProfileWithdrawalWalletsUpdateMutationResponse, never, ApiV1UserProfileWithdrawalWalletsUpdateMutationRequest>
type ApiV1UserProfileWithdrawalWalletsUpdate = {
  data: ApiV1UserProfileWithdrawalWalletsUpdateMutationResponse
  error: never
  request: ApiV1UserProfileWithdrawalWalletsUpdateMutationRequest
  pathParams: ApiV1UserProfileWithdrawalWalletsUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileWithdrawalWalletsUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_user_identifier_does_not_match_template**Указанный идентификатор пользователя не соответствует шаблону.* **withdrawal_wallet_user_identifier_already_exists**Указанный идентификатор пользователя уже используется для другого кошелька.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Просмотр, изменение и удаление кошелька в системе для вывода средств
 * @link /api/v1/user/profile/withdrawal-wallets/:id */
export function useApiV1UserProfileWithdrawalWalletsUpdate(
  id: ApiV1UserProfileWithdrawalWalletsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserProfileWithdrawalWalletsUpdate["response"], ApiV1UserProfileWithdrawalWalletsUpdate["error"], ApiV1UserProfileWithdrawalWalletsUpdate["request"]>
    client?: ApiV1UserProfileWithdrawalWalletsUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfileWithdrawalWalletsUpdate["response"], ApiV1UserProfileWithdrawalWalletsUpdate["error"], ApiV1UserProfileWithdrawalWalletsUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfileWithdrawalWalletsUpdate["response"], ApiV1UserProfileWithdrawalWalletsUpdate["error"], ApiV1UserProfileWithdrawalWalletsUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserProfileWithdrawalWalletsUpdate["data"], ApiV1UserProfileWithdrawalWalletsUpdate["error"], ApiV1UserProfileWithdrawalWalletsUpdate["request"]>({
        method: "put",
        url: `/api/v1/user/profile/withdrawal-wallets/${id}`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
