import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserBlockUpdateMutationRequest,
  ApiV1UserAdminUserBlockUpdateMutationResponse,
  ApiV1UserAdminUserBlockUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserBlockUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserBlockUpdateClient = typeof client<ApiV1UserAdminUserBlockUpdateMutationResponse, never, ApiV1UserAdminUserBlockUpdateMutationRequest>
type ApiV1UserAdminUserBlockUpdate = {
  data: ApiV1UserAdminUserBlockUpdateMutationResponse
  error: never
  request: ApiV1UserAdminUserBlockUpdateMutationRequest
  pathParams: ApiV1UserAdminUserBlockUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserBlockUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserBlockUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserBlockUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_actual_block_expires_equal_to_current**Указанная дата окончания актуальной блокировки пользователя {} совпадает с текущей {}.* **user_actual_block_expires_is_less_today**Указанная дата окончания актуальной блокировки пользователя {} меньше текущей даты.* **user_block_expires_is_less_or_equal_to_start_date**Указанная дата окончания блокировки пользователя {} меньше или равна дате начала {}.* **user_block_already_cancelled**Блокировка пользователя с указанным ID {} уже отменена, изменение невозможно.* **user_block_is_not_actual**Указанный ID блокировки пользователя {} не совпадает с ID актуальной блокировки {}.
 * @summary АПИ представление блокировки с указанием причины
 * @link /api/v1/user/admin/user/:id/block/:block_pk */
export function useApiV1UserAdminUserBlockUpdate(
  blockPk: ApiV1UserAdminUserBlockUpdatePathParams["block_pk"],
  id: ApiV1UserAdminUserBlockUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminUserBlockUpdate["response"], ApiV1UserAdminUserBlockUpdate["error"], ApiV1UserAdminUserBlockUpdate["request"]>
    client?: ApiV1UserAdminUserBlockUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminUserBlockUpdate["response"], ApiV1UserAdminUserBlockUpdate["error"], ApiV1UserAdminUserBlockUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminUserBlockUpdate["response"], ApiV1UserAdminUserBlockUpdate["error"], ApiV1UserAdminUserBlockUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserAdminUserBlockUpdate["data"], ApiV1UserAdminUserBlockUpdate["error"], ApiV1UserAdminUserBlockUpdate["request"]>({
        method: "put",
        url: `/api/v1/user/admin/user/${id}/block/${blockPk}`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
