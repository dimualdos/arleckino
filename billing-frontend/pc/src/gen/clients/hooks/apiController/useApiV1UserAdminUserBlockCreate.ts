import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserBlockCreateMutationRequest,
  ApiV1UserAdminUserBlockCreateMutationResponse,
  ApiV1UserAdminUserBlockCreatePathParams,
  ApiV1UserAdminUserBlockCreate201,
} from "../../../models/ts/apiController/ApiV1UserAdminUserBlockCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserBlockCreateClient = typeof client<ApiV1UserAdminUserBlockCreateMutationResponse, ApiV1UserAdminUserBlockCreate201, ApiV1UserAdminUserBlockCreateMutationRequest>
type ApiV1UserAdminUserBlockCreate = {
  data: ApiV1UserAdminUserBlockCreateMutationResponse
  error: ApiV1UserAdminUserBlockCreate201
  request: ApiV1UserAdminUserBlockCreateMutationRequest
  pathParams: ApiV1UserAdminUserBlockCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserBlockCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserBlockCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserBlockCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_actual_block_already_exists**Актуальная блокировка пользователя уже существует.* **user_block_start_date_is_less_today**Указанная дата начала блокировки пользователя {} меньше текущей даты.* **user_block_expires_is_less_or_equal_to_start_date**Указанная дата окончания блокировки пользователя {} меньше или равна дате начала {}.
 * @summary Просмотр списка блокировок пользователя и создание новой.
 * @link /api/v1/user/admin/user/:id/block */
export function useApiV1UserAdminUserBlockCreate(
  id: ApiV1UserAdminUserBlockCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminUserBlockCreate["response"], ApiV1UserAdminUserBlockCreate["error"], ApiV1UserAdminUserBlockCreate["request"]>
    client?: ApiV1UserAdminUserBlockCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminUserBlockCreate["response"], ApiV1UserAdminUserBlockCreate["error"], ApiV1UserAdminUserBlockCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminUserBlockCreate["response"], ApiV1UserAdminUserBlockCreate["error"], ApiV1UserAdminUserBlockCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserAdminUserBlockCreate["data"], ApiV1UserAdminUserBlockCreate["error"], ApiV1UserAdminUserBlockCreate["request"]>({
        method: "post",
        url: `/api/v1/user/admin/user/${id}/block`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
