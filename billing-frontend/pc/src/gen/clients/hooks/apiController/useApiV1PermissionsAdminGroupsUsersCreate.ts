import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1PermissionsAdminGroupsUsersCreateMutationRequest,
  ApiV1PermissionsAdminGroupsUsersCreateMutationResponse,
  ApiV1PermissionsAdminGroupsUsersCreatePathParams,
  ApiV1PermissionsAdminGroupsUsersCreate201,
} from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsUsersCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1PermissionsAdminGroupsUsersCreateClient = typeof client<
  ApiV1PermissionsAdminGroupsUsersCreateMutationResponse,
  ApiV1PermissionsAdminGroupsUsersCreate201,
  ApiV1PermissionsAdminGroupsUsersCreateMutationRequest
>
type ApiV1PermissionsAdminGroupsUsersCreate = {
  data: ApiV1PermissionsAdminGroupsUsersCreateMutationResponse
  error: ApiV1PermissionsAdminGroupsUsersCreate201
  request: ApiV1PermissionsAdminGroupsUsersCreateMutationRequest
  pathParams: ApiV1PermissionsAdminGroupsUsersCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1PermissionsAdminGroupsUsersCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1PermissionsAdminGroupsUsersCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1PermissionsAdminGroupsUsersCreateClient>>
  }
}
/**
 * @description .
 * @summary Список пользователей группы, добавление пользователя в группу
 * @link /api/v1/permissions/admin/groups/:group_id/users/ */
export function useApiV1PermissionsAdminGroupsUsersCreate(
  groupId: ApiV1PermissionsAdminGroupsUsersCreatePathParams["group_id"],
  options: {
    mutation?: UseMutationOptions<ApiV1PermissionsAdminGroupsUsersCreate["response"], ApiV1PermissionsAdminGroupsUsersCreate["error"], ApiV1PermissionsAdminGroupsUsersCreate["request"]>
    client?: ApiV1PermissionsAdminGroupsUsersCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1PermissionsAdminGroupsUsersCreate["response"], ApiV1PermissionsAdminGroupsUsersCreate["error"], ApiV1PermissionsAdminGroupsUsersCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1PermissionsAdminGroupsUsersCreate["response"], ApiV1PermissionsAdminGroupsUsersCreate["error"], ApiV1PermissionsAdminGroupsUsersCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1PermissionsAdminGroupsUsersCreate["data"], ApiV1PermissionsAdminGroupsUsersCreate["error"], ApiV1PermissionsAdminGroupsUsersCreate["request"]>({
        method: "post",
        url: `/api/v1/permissions/admin/groups/${groupId}/users/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
