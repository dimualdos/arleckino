import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserBlockPartialUpdateMutationRequest,
  ApiV1UserAdminUserBlockPartialUpdateMutationResponse,
  ApiV1UserAdminUserBlockPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserBlockPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserBlockPartialUpdateClient = typeof client<ApiV1UserAdminUserBlockPartialUpdateMutationResponse, never, ApiV1UserAdminUserBlockPartialUpdateMutationRequest>
type ApiV1UserAdminUserBlockPartialUpdate = {
  data: ApiV1UserAdminUserBlockPartialUpdateMutationResponse
  error: never
  request: ApiV1UserAdminUserBlockPartialUpdateMutationRequest
  pathParams: ApiV1UserAdminUserBlockPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserBlockPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserBlockPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserBlockPartialUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_actual_block_expires_equal_to_current**Указанная дата окончания актуальной блокировки пользователя {} совпадает с текущей {}.* **user_actual_block_expires_is_less_today**Указанная дата окончания актуальной блокировки пользователя {} меньше текущей даты.* **user_block_expires_is_less_or_equal_to_start_date**Указанная дата окончания блокировки пользователя {} меньше или равна дате начала {}.* **user_block_already_cancelled**Блокировка пользователя с указанным ID {} уже отменена, изменение невозможно.* **user_block_is_not_actual**Указанный ID блокировки пользователя {} не совпадает с ID актуальной блокировки {}.
 * @summary АПИ представление блокировки с указанием причины
 * @link /api/v1/user/admin/user/:id/block/:block_pk */
export function useApiV1UserAdminUserBlockPartialUpdate(
  blockPk: ApiV1UserAdminUserBlockPartialUpdatePathParams["block_pk"],
  id: ApiV1UserAdminUserBlockPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminUserBlockPartialUpdate["response"], ApiV1UserAdminUserBlockPartialUpdate["error"], ApiV1UserAdminUserBlockPartialUpdate["request"]>
    client?: ApiV1UserAdminUserBlockPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminUserBlockPartialUpdate["response"], ApiV1UserAdminUserBlockPartialUpdate["error"], ApiV1UserAdminUserBlockPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminUserBlockPartialUpdate["response"], ApiV1UserAdminUserBlockPartialUpdate["error"], ApiV1UserAdminUserBlockPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserAdminUserBlockPartialUpdate["data"], ApiV1UserAdminUserBlockPartialUpdate["error"], ApiV1UserAdminUserBlockPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/user/admin/user/${id}/block/${blockPk}`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
