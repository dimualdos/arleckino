import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserProfileWithdrawalWalletsConfirmCreateMutationRequest,
  ApiV1UserProfileWithdrawalWalletsConfirmCreateMutationResponse,
  ApiV1UserProfileWithdrawalWalletsConfirmCreate201,
} from "../../../models/ts/apiController/ApiV1UserProfileWithdrawalWalletsConfirmCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfileWithdrawalWalletsConfirmCreateClient = typeof client<
  ApiV1UserProfileWithdrawalWalletsConfirmCreateMutationResponse,
  ApiV1UserProfileWithdrawalWalletsConfirmCreate201,
  ApiV1UserProfileWithdrawalWalletsConfirmCreateMutationRequest
>
type ApiV1UserProfileWithdrawalWalletsConfirmCreate = {
  data: ApiV1UserProfileWithdrawalWalletsConfirmCreateMutationResponse
  error: ApiV1UserProfileWithdrawalWalletsConfirmCreate201
  request: ApiV1UserProfileWithdrawalWalletsConfirmCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsConfirmCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileWithdrawalWalletsConfirmCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileWithdrawalWalletsConfirmCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **withdrawal_wallet_confirm_token_invalid**Указан некорректный или просроченный токен для подтверждения кошелька.* **withdrawal_wallet_not_found_by_id**Кошелек для вывода средств с указанным ID не обнаружен.* **withdrawal_wallet_already_confirmed**Кошелек для вывода средств с указанным ID уже подтвержден.
 * @summary Подтверждение кошелька в системе для вывода средств
 * @link /api/v1/user/profile/withdrawal-wallets/confirm */
export function useApiV1UserProfileWithdrawalWalletsConfirmCreate(
  options: {
    mutation?: UseMutationOptions<
      ApiV1UserProfileWithdrawalWalletsConfirmCreate["response"],
      ApiV1UserProfileWithdrawalWalletsConfirmCreate["error"],
      ApiV1UserProfileWithdrawalWalletsConfirmCreate["request"]
    >
    client?: ApiV1UserProfileWithdrawalWalletsConfirmCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfileWithdrawalWalletsConfirmCreate["response"], ApiV1UserProfileWithdrawalWalletsConfirmCreate["error"], ApiV1UserProfileWithdrawalWalletsConfirmCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfileWithdrawalWalletsConfirmCreate["response"], ApiV1UserProfileWithdrawalWalletsConfirmCreate["error"], ApiV1UserProfileWithdrawalWalletsConfirmCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1UserProfileWithdrawalWalletsConfirmCreate["data"],
        ApiV1UserProfileWithdrawalWalletsConfirmCreate["error"],
        ApiV1UserProfileWithdrawalWalletsConfirmCreate["request"]
      >({
        method: "post",
        url: `/api/v1/user/profile/withdrawal-wallets/confirm`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
