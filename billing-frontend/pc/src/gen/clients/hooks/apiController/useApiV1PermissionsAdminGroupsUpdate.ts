import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1PermissionsAdminGroupsUpdateMutationRequest,
  ApiV1PermissionsAdminGroupsUpdateMutationResponse,
  ApiV1PermissionsAdminGroupsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1PermissionsAdminGroupsUpdateClient = typeof client<ApiV1PermissionsAdminGroupsUpdateMutationResponse, never, ApiV1PermissionsAdminGroupsUpdateMutationRequest>
type ApiV1PermissionsAdminGroupsUpdate = {
  data: ApiV1PermissionsAdminGroupsUpdateMutationResponse
  error: never
  request: ApiV1PermissionsAdminGroupsUpdateMutationRequest
  pathParams: ApiV1PermissionsAdminGroupsUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1PermissionsAdminGroupsUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1PermissionsAdminGroupsUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1PermissionsAdminGroupsUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение и удаление группы пользователей
 * @link /api/v1/permissions/admin/groups/:id/ */
export function useApiV1PermissionsAdminGroupsUpdate(
  id: ApiV1PermissionsAdminGroupsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1PermissionsAdminGroupsUpdate["response"], ApiV1PermissionsAdminGroupsUpdate["error"], ApiV1PermissionsAdminGroupsUpdate["request"]>
    client?: ApiV1PermissionsAdminGroupsUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1PermissionsAdminGroupsUpdate["response"], ApiV1PermissionsAdminGroupsUpdate["error"], ApiV1PermissionsAdminGroupsUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1PermissionsAdminGroupsUpdate["response"], ApiV1PermissionsAdminGroupsUpdate["error"], ApiV1PermissionsAdminGroupsUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1PermissionsAdminGroupsUpdate["data"], ApiV1PermissionsAdminGroupsUpdate["error"], ApiV1PermissionsAdminGroupsUpdate["request"]>({
        method: "put",
        url: `/api/v1/permissions/admin/groups/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
