import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminServerUpdateMutationRequest,
  ApiV1ServiceAdminServerUpdateMutationResponse,
  ApiV1ServiceAdminServerUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminServerUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminServerUpdateClient = typeof client<ApiV1ServiceAdminServerUpdateMutationResponse, never, ApiV1ServiceAdminServerUpdateMutationRequest>
type ApiV1ServiceAdminServerUpdate = {
  data: ApiV1ServiceAdminServerUpdateMutationResponse
  error: never
  request: ApiV1ServiceAdminServerUpdateMutationRequest
  pathParams: ApiV1ServiceAdminServerUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminServerUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminServerUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminServerUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер для замены с указанным ID не обнаружен.* **replacement_server_matches_server_to_remove**Сервер для замены совпадает с удаляемым сервером.* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Просмотр, изменение, удаление сервера
 * @link /api/v1/service/admin/server/:id/ */
export function useApiV1ServiceAdminServerUpdate(
  id: ApiV1ServiceAdminServerUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminServerUpdate["response"], ApiV1ServiceAdminServerUpdate["error"], ApiV1ServiceAdminServerUpdate["request"]>
    client?: ApiV1ServiceAdminServerUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminServerUpdate["response"], ApiV1ServiceAdminServerUpdate["error"], ApiV1ServiceAdminServerUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminServerUpdate["response"], ApiV1ServiceAdminServerUpdate["error"], ApiV1ServiceAdminServerUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceAdminServerUpdate["data"], ApiV1ServiceAdminServerUpdate["error"], ApiV1ServiceAdminServerUpdate["request"]>({
        method: "put",
        url: `/api/v1/service/admin/server/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
