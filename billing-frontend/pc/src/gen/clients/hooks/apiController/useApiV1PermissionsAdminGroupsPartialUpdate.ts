import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1PermissionsAdminGroupsPartialUpdateMutationRequest,
  ApiV1PermissionsAdminGroupsPartialUpdateMutationResponse,
  ApiV1PermissionsAdminGroupsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1PermissionsAdminGroupsPartialUpdateClient = typeof client<ApiV1PermissionsAdminGroupsPartialUpdateMutationResponse, never, ApiV1PermissionsAdminGroupsPartialUpdateMutationRequest>
type ApiV1PermissionsAdminGroupsPartialUpdate = {
  data: ApiV1PermissionsAdminGroupsPartialUpdateMutationResponse
  error: never
  request: ApiV1PermissionsAdminGroupsPartialUpdateMutationRequest
  pathParams: ApiV1PermissionsAdminGroupsPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1PermissionsAdminGroupsPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1PermissionsAdminGroupsPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1PermissionsAdminGroupsPartialUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение и удаление группы пользователей
 * @link /api/v1/permissions/admin/groups/:id/ */
export function useApiV1PermissionsAdminGroupsPartialUpdate(
  id: ApiV1PermissionsAdminGroupsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1PermissionsAdminGroupsPartialUpdate["response"], ApiV1PermissionsAdminGroupsPartialUpdate["error"], ApiV1PermissionsAdminGroupsPartialUpdate["request"]>
    client?: ApiV1PermissionsAdminGroupsPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1PermissionsAdminGroupsPartialUpdate["response"], ApiV1PermissionsAdminGroupsPartialUpdate["error"], ApiV1PermissionsAdminGroupsPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1PermissionsAdminGroupsPartialUpdate["response"], ApiV1PermissionsAdminGroupsPartialUpdate["error"], ApiV1PermissionsAdminGroupsPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1PermissionsAdminGroupsPartialUpdate["data"], ApiV1PermissionsAdminGroupsPartialUpdate["error"], ApiV1PermissionsAdminGroupsPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/permissions/admin/groups/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
