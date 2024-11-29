import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1PermissionsAdminGroupsCreateMutationRequest,
  ApiV1PermissionsAdminGroupsCreateMutationResponse,
  ApiV1PermissionsAdminGroupsCreate201,
} from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1PermissionsAdminGroupsCreateClient = typeof client<ApiV1PermissionsAdminGroupsCreateMutationResponse, ApiV1PermissionsAdminGroupsCreate201, ApiV1PermissionsAdminGroupsCreateMutationRequest>
type ApiV1PermissionsAdminGroupsCreate = {
  data: ApiV1PermissionsAdminGroupsCreateMutationResponse
  error: ApiV1PermissionsAdminGroupsCreate201
  request: ApiV1PermissionsAdminGroupsCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1PermissionsAdminGroupsCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1PermissionsAdminGroupsCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1PermissionsAdminGroupsCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **admin_group_name_already_exists**Группа пользователей с указанным именем {} уже существует, укажите другое имя.
 * @summary Список групп пользователей, создание новой группы
 * @link /api/v1/permissions/admin/groups/ */
export function useApiV1PermissionsAdminGroupsCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1PermissionsAdminGroupsCreate["response"], ApiV1PermissionsAdminGroupsCreate["error"], ApiV1PermissionsAdminGroupsCreate["request"]>
    client?: ApiV1PermissionsAdminGroupsCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1PermissionsAdminGroupsCreate["response"], ApiV1PermissionsAdminGroupsCreate["error"], ApiV1PermissionsAdminGroupsCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1PermissionsAdminGroupsCreate["response"], ApiV1PermissionsAdminGroupsCreate["error"], ApiV1PermissionsAdminGroupsCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1PermissionsAdminGroupsCreate["data"], ApiV1PermissionsAdminGroupsCreate["error"], ApiV1PermissionsAdminGroupsCreate["request"]>({
        method: "post",
        url: `/api/v1/permissions/admin/groups/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
