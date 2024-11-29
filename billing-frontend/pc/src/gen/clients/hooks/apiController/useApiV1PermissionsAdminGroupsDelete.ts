import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1PermissionsAdminGroupsDeleteMutationResponse,
  ApiV1PermissionsAdminGroupsDeletePathParams,
  ApiV1PermissionsAdminGroupsDelete204,
} from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1PermissionsAdminGroupsDeleteClient = typeof client<ApiV1PermissionsAdminGroupsDeleteMutationResponse, ApiV1PermissionsAdminGroupsDelete204, never>
type ApiV1PermissionsAdminGroupsDelete = {
  data: ApiV1PermissionsAdminGroupsDeleteMutationResponse
  error: ApiV1PermissionsAdminGroupsDelete204
  request: never
  pathParams: ApiV1PermissionsAdminGroupsDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1PermissionsAdminGroupsDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1PermissionsAdminGroupsDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1PermissionsAdminGroupsDeleteClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение и удаление группы пользователей
 * @link /api/v1/permissions/admin/groups/:id/ */
export function useApiV1PermissionsAdminGroupsDelete(
  id: ApiV1PermissionsAdminGroupsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1PermissionsAdminGroupsDelete["response"], ApiV1PermissionsAdminGroupsDelete["error"], void>
    client?: ApiV1PermissionsAdminGroupsDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1PermissionsAdminGroupsDelete["response"], ApiV1PermissionsAdminGroupsDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1PermissionsAdminGroupsDelete["response"], ApiV1PermissionsAdminGroupsDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1PermissionsAdminGroupsDelete["data"], ApiV1PermissionsAdminGroupsDelete["error"], void>({
        method: "delete",
        url: `/api/v1/permissions/admin/groups/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
