import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminServerDeleteMutationResponse,
  ApiV1ServiceAdminServerDeletePathParams,
  ApiV1ServiceAdminServerDelete204,
} from "../../../models/ts/apiController/ApiV1ServiceAdminServerDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminServerDeleteClient = typeof client<ApiV1ServiceAdminServerDeleteMutationResponse, ApiV1ServiceAdminServerDelete204, never>
type ApiV1ServiceAdminServerDelete = {
  data: ApiV1ServiceAdminServerDeleteMutationResponse
  error: ApiV1ServiceAdminServerDelete204
  request: never
  pathParams: ApiV1ServiceAdminServerDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminServerDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminServerDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminServerDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер для замены с указанным ID не обнаружен.* **replacement_server_matches_server_to_remove**Сервер для замены совпадает с удаляемым сервером.* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Просмотр, изменение, удаление сервера
 * @link /api/v1/service/admin/server/:id/ */
export function useApiV1ServiceAdminServerDelete(
  id: ApiV1ServiceAdminServerDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminServerDelete["response"], ApiV1ServiceAdminServerDelete["error"], void>
    client?: ApiV1ServiceAdminServerDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminServerDelete["response"], ApiV1ServiceAdminServerDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminServerDelete["response"], ApiV1ServiceAdminServerDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1ServiceAdminServerDelete["data"], ApiV1ServiceAdminServerDelete["error"], void>({
        method: "delete",
        url: `/api/v1/service/admin/server/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
