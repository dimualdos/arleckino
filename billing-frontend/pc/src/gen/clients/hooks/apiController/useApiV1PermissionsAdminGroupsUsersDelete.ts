import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1PermissionsAdminGroupsUsersDeleteMutationResponse,
  ApiV1PermissionsAdminGroupsUsersDeletePathParams,
  ApiV1PermissionsAdminGroupsUsersDelete204,
} from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsUsersDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1PermissionsAdminGroupsUsersDeleteClient = typeof client<ApiV1PermissionsAdminGroupsUsersDeleteMutationResponse, ApiV1PermissionsAdminGroupsUsersDelete204, never>
type ApiV1PermissionsAdminGroupsUsersDelete = {
  data: ApiV1PermissionsAdminGroupsUsersDeleteMutationResponse
  error: ApiV1PermissionsAdminGroupsUsersDelete204
  request: never
  pathParams: ApiV1PermissionsAdminGroupsUsersDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1PermissionsAdminGroupsUsersDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1PermissionsAdminGroupsUsersDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1PermissionsAdminGroupsUsersDeleteClient>>
  }
}
/**
 * @description .
 * @summary Удаление пользователя из группы
 * @link /api/v1/permissions/admin/groups/:group_id/users/:id/ */
export function useApiV1PermissionsAdminGroupsUsersDelete(
  groupId: ApiV1PermissionsAdminGroupsUsersDeletePathParams["group_id"],
  id: ApiV1PermissionsAdminGroupsUsersDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1PermissionsAdminGroupsUsersDelete["response"], ApiV1PermissionsAdminGroupsUsersDelete["error"], void>
    client?: ApiV1PermissionsAdminGroupsUsersDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1PermissionsAdminGroupsUsersDelete["response"], ApiV1PermissionsAdminGroupsUsersDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1PermissionsAdminGroupsUsersDelete["response"], ApiV1PermissionsAdminGroupsUsersDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1PermissionsAdminGroupsUsersDelete["data"], ApiV1PermissionsAdminGroupsUsersDelete["error"], void>({
        method: "delete",
        url: `/api/v1/permissions/admin/groups/${groupId}/users/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
