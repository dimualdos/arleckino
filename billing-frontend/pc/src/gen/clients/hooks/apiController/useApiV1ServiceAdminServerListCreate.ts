import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminServerListCreateMutationRequest,
  ApiV1ServiceAdminServerListCreateMutationResponse,
  ApiV1ServiceAdminServerListCreate201,
} from "../../../models/ts/apiController/ApiV1ServiceAdminServerListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminServerListCreateClient = typeof client<ApiV1ServiceAdminServerListCreateMutationResponse, ApiV1ServiceAdminServerListCreate201, ApiV1ServiceAdminServerListCreateMutationRequest>
type ApiV1ServiceAdminServerListCreate = {
  data: ApiV1ServiceAdminServerListCreateMutationResponse
  error: ApiV1ServiceAdminServerListCreate201
  request: ApiV1ServiceAdminServerListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminServerListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminServerListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminServerListCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Список серверов, создание нового сервера
 * @link /api/v1/service/admin/server/list/ */
export function useApiV1ServiceAdminServerListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminServerListCreate["response"], ApiV1ServiceAdminServerListCreate["error"], ApiV1ServiceAdminServerListCreate["request"]>
    client?: ApiV1ServiceAdminServerListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminServerListCreate["response"], ApiV1ServiceAdminServerListCreate["error"], ApiV1ServiceAdminServerListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminServerListCreate["response"], ApiV1ServiceAdminServerListCreate["error"], ApiV1ServiceAdminServerListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceAdminServerListCreate["data"], ApiV1ServiceAdminServerListCreate["error"], ApiV1ServiceAdminServerListCreate["request"]>({
        method: "post",
        url: `/api/v1/service/admin/server/list/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
