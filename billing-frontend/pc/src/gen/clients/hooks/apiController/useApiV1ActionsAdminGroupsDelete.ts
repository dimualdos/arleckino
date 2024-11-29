import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ActionsAdminGroupsDeleteMutationResponse,
  ApiV1ActionsAdminGroupsDeletePathParams,
  ApiV1ActionsAdminGroupsDelete204,
} from "../../../models/ts/apiController/ApiV1ActionsAdminGroupsDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ActionsAdminGroupsDeleteClient = typeof client<ApiV1ActionsAdminGroupsDeleteMutationResponse, ApiV1ActionsAdminGroupsDelete204, never>
type ApiV1ActionsAdminGroupsDelete = {
  data: ApiV1ActionsAdminGroupsDeleteMutationResponse
  error: ApiV1ActionsAdminGroupsDelete204
  request: never
  pathParams: ApiV1ActionsAdminGroupsDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminGroupsDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminGroupsDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminGroupsDeleteClient>>
  }
}
/**
 * @description Представление для выборки данных о группе действий
 * @link /api/v1/actions/admin/groups/:id/ */
export function useApiV1ActionsAdminGroupsDelete(
  id: ApiV1ActionsAdminGroupsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ActionsAdminGroupsDelete["response"], ApiV1ActionsAdminGroupsDelete["error"], void>
    client?: ApiV1ActionsAdminGroupsDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ActionsAdminGroupsDelete["response"], ApiV1ActionsAdminGroupsDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ActionsAdminGroupsDelete["response"], ApiV1ActionsAdminGroupsDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1ActionsAdminGroupsDelete["data"], ApiV1ActionsAdminGroupsDelete["error"], void>({
        method: "delete",
        url: `/api/v1/actions/admin/groups/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
