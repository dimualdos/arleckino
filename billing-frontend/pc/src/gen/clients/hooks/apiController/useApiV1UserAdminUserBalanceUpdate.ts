import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserBalanceUpdateMutationRequest,
  ApiV1UserAdminUserBalanceUpdateMutationResponse,
  ApiV1UserAdminUserBalanceUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserBalanceUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserBalanceUpdateClient = typeof client<ApiV1UserAdminUserBalanceUpdateMutationResponse, never, ApiV1UserAdminUserBalanceUpdateMutationRequest>
type ApiV1UserAdminUserBalanceUpdate = {
  data: ApiV1UserAdminUserBalanceUpdateMutationResponse
  error: never
  request: ApiV1UserAdminUserBalanceUpdateMutationRequest
  pathParams: ApiV1UserAdminUserBalanceUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserBalanceUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserBalanceUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserBalanceUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **amount_must_be_positive_or_nul**Сумма должна быть больше или равна нулю.
 * @summary Изменение баланса пользователя администратором
 * @link /api/v1/user/admin/user/:id/balance/ */
export function useApiV1UserAdminUserBalanceUpdate(
  id: ApiV1UserAdminUserBalanceUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminUserBalanceUpdate["response"], ApiV1UserAdminUserBalanceUpdate["error"], ApiV1UserAdminUserBalanceUpdate["request"]>
    client?: ApiV1UserAdminUserBalanceUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminUserBalanceUpdate["response"], ApiV1UserAdminUserBalanceUpdate["error"], ApiV1UserAdminUserBalanceUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminUserBalanceUpdate["response"], ApiV1UserAdminUserBalanceUpdate["error"], ApiV1UserAdminUserBalanceUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserAdminUserBalanceUpdate["data"], ApiV1UserAdminUserBalanceUpdate["error"], ApiV1UserAdminUserBalanceUpdate["request"]>({
        method: "put",
        url: `/api/v1/user/admin/user/${id}/balance/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
