import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserProfileWithdrawalWalletsPartialUpdateMutationRequest,
  ApiV1UserProfileWithdrawalWalletsPartialUpdateMutationResponse,
  ApiV1UserProfileWithdrawalWalletsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserProfileWithdrawalWalletsPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfileWithdrawalWalletsPartialUpdateClient = typeof client<
  ApiV1UserProfileWithdrawalWalletsPartialUpdateMutationResponse,
  never,
  ApiV1UserProfileWithdrawalWalletsPartialUpdateMutationRequest
>
type ApiV1UserProfileWithdrawalWalletsPartialUpdate = {
  data: ApiV1UserProfileWithdrawalWalletsPartialUpdateMutationResponse
  error: never
  request: ApiV1UserProfileWithdrawalWalletsPartialUpdateMutationRequest
  pathParams: ApiV1UserProfileWithdrawalWalletsPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileWithdrawalWalletsPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsPartialUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_user_identifier_does_not_match_template**Указанный идентификатор пользователя не соответствует шаблону.* **withdrawal_wallet_user_identifier_already_exists**Указанный идентификатор пользователя уже используется для другого кошелька.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Просмотр, изменение и удаление кошелька в системе для вывода средств
 * @link /api/v1/user/profile/withdrawal-wallets/:id */
export function useApiV1UserProfileWithdrawalWalletsPartialUpdate(
  id: ApiV1UserProfileWithdrawalWalletsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1UserProfileWithdrawalWalletsPartialUpdate["response"],
      ApiV1UserProfileWithdrawalWalletsPartialUpdate["error"],
      ApiV1UserProfileWithdrawalWalletsPartialUpdate["request"]
    >
    client?: ApiV1UserProfileWithdrawalWalletsPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfileWithdrawalWalletsPartialUpdate["response"], ApiV1UserProfileWithdrawalWalletsPartialUpdate["error"], ApiV1UserProfileWithdrawalWalletsPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfileWithdrawalWalletsPartialUpdate["response"], ApiV1UserProfileWithdrawalWalletsPartialUpdate["error"], ApiV1UserProfileWithdrawalWalletsPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1UserProfileWithdrawalWalletsPartialUpdate["data"],
        ApiV1UserProfileWithdrawalWalletsPartialUpdate["error"],
        ApiV1UserProfileWithdrawalWalletsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/api/v1/user/profile/withdrawal-wallets/${id}`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
