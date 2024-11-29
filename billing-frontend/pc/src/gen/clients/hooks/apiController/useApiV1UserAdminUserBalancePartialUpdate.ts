import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserBalancePartialUpdateMutationRequest,
  ApiV1UserAdminUserBalancePartialUpdateMutationResponse,
  ApiV1UserAdminUserBalancePartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserBalancePartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserBalancePartialUpdateClient = typeof client<ApiV1UserAdminUserBalancePartialUpdateMutationResponse, never, ApiV1UserAdminUserBalancePartialUpdateMutationRequest>
type ApiV1UserAdminUserBalancePartialUpdate = {
  data: ApiV1UserAdminUserBalancePartialUpdateMutationResponse
  error: never
  request: ApiV1UserAdminUserBalancePartialUpdateMutationRequest
  pathParams: ApiV1UserAdminUserBalancePartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserBalancePartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserBalancePartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserBalancePartialUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **amount_must_be_positive_or_nul**Сумма должна быть больше или равна нулю.
 * @summary Изменение баланса пользователя администратором
 * @link /api/v1/user/admin/user/:id/balance/ */
export function useApiV1UserAdminUserBalancePartialUpdate(
  id: ApiV1UserAdminUserBalancePartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminUserBalancePartialUpdate["response"], ApiV1UserAdminUserBalancePartialUpdate["error"], ApiV1UserAdminUserBalancePartialUpdate["request"]>
    client?: ApiV1UserAdminUserBalancePartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminUserBalancePartialUpdate["response"], ApiV1UserAdminUserBalancePartialUpdate["error"], ApiV1UserAdminUserBalancePartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminUserBalancePartialUpdate["response"], ApiV1UserAdminUserBalancePartialUpdate["error"], ApiV1UserAdminUserBalancePartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserAdminUserBalancePartialUpdate["data"], ApiV1UserAdminUserBalancePartialUpdate["error"], ApiV1UserAdminUserBalancePartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/user/admin/user/${id}/balance/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
