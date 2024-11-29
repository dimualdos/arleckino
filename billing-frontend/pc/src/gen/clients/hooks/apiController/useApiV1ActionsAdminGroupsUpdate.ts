import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ActionsAdminGroupsUpdateMutationRequest,
  ApiV1ActionsAdminGroupsUpdateMutationResponse,
  ApiV1ActionsAdminGroupsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminGroupsUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ActionsAdminGroupsUpdateClient = typeof client<ApiV1ActionsAdminGroupsUpdateMutationResponse, never, ApiV1ActionsAdminGroupsUpdateMutationRequest>
type ApiV1ActionsAdminGroupsUpdate = {
  data: ApiV1ActionsAdminGroupsUpdateMutationResponse
  error: never
  request: ApiV1ActionsAdminGroupsUpdateMutationRequest
  pathParams: ApiV1ActionsAdminGroupsUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminGroupsUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminGroupsUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminGroupsUpdateClient>>
  }
}
/**
 * @description Представление для выборки данных о группе действий
 * @link /api/v1/actions/admin/groups/:id/ */
export function useApiV1ActionsAdminGroupsUpdate(
  id: ApiV1ActionsAdminGroupsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ActionsAdminGroupsUpdate["response"], ApiV1ActionsAdminGroupsUpdate["error"], ApiV1ActionsAdminGroupsUpdate["request"]>
    client?: ApiV1ActionsAdminGroupsUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ActionsAdminGroupsUpdate["response"], ApiV1ActionsAdminGroupsUpdate["error"], ApiV1ActionsAdminGroupsUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ActionsAdminGroupsUpdate["response"], ApiV1ActionsAdminGroupsUpdate["error"], ApiV1ActionsAdminGroupsUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ActionsAdminGroupsUpdate["data"], ApiV1ActionsAdminGroupsUpdate["error"], ApiV1ActionsAdminGroupsUpdate["request"]>({
        method: "put",
        url: `/api/v1/actions/admin/groups/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
