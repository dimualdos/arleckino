import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminServerPartialUpdateMutationRequest,
  ApiV1ServiceAdminServerPartialUpdateMutationResponse,
  ApiV1ServiceAdminServerPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminServerPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminServerPartialUpdateClient = typeof client<ApiV1ServiceAdminServerPartialUpdateMutationResponse, never, ApiV1ServiceAdminServerPartialUpdateMutationRequest>
type ApiV1ServiceAdminServerPartialUpdate = {
  data: ApiV1ServiceAdminServerPartialUpdateMutationResponse
  error: never
  request: ApiV1ServiceAdminServerPartialUpdateMutationRequest
  pathParams: ApiV1ServiceAdminServerPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminServerPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminServerPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminServerPartialUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер для замены с указанным ID не обнаружен.* **replacement_server_matches_server_to_remove**Сервер для замены совпадает с удаляемым сервером.* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Просмотр, изменение, удаление сервера
 * @link /api/v1/service/admin/server/:id/ */
export function useApiV1ServiceAdminServerPartialUpdate(
  id: ApiV1ServiceAdminServerPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminServerPartialUpdate["response"], ApiV1ServiceAdminServerPartialUpdate["error"], ApiV1ServiceAdminServerPartialUpdate["request"]>
    client?: ApiV1ServiceAdminServerPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminServerPartialUpdate["response"], ApiV1ServiceAdminServerPartialUpdate["error"], ApiV1ServiceAdminServerPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminServerPartialUpdate["response"], ApiV1ServiceAdminServerPartialUpdate["error"], ApiV1ServiceAdminServerPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceAdminServerPartialUpdate["data"], ApiV1ServiceAdminServerPartialUpdate["error"], ApiV1ServiceAdminServerPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/service/admin/server/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
