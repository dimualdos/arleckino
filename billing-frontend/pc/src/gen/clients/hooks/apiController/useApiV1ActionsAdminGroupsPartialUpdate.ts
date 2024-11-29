import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ActionsAdminGroupsPartialUpdateMutationRequest,
  ApiV1ActionsAdminGroupsPartialUpdateMutationResponse,
  ApiV1ActionsAdminGroupsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminGroupsPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ActionsAdminGroupsPartialUpdateClient = typeof client<ApiV1ActionsAdminGroupsPartialUpdateMutationResponse, never, ApiV1ActionsAdminGroupsPartialUpdateMutationRequest>
type ApiV1ActionsAdminGroupsPartialUpdate = {
  data: ApiV1ActionsAdminGroupsPartialUpdateMutationResponse
  error: never
  request: ApiV1ActionsAdminGroupsPartialUpdateMutationRequest
  pathParams: ApiV1ActionsAdminGroupsPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminGroupsPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminGroupsPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminGroupsPartialUpdateClient>>
  }
}
/**
 * @description Представление для выборки данных о группе действий
 * @link /api/v1/actions/admin/groups/:id/ */
export function useApiV1ActionsAdminGroupsPartialUpdate(
  id: ApiV1ActionsAdminGroupsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ActionsAdminGroupsPartialUpdate["response"], ApiV1ActionsAdminGroupsPartialUpdate["error"], ApiV1ActionsAdminGroupsPartialUpdate["request"]>
    client?: ApiV1ActionsAdminGroupsPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ActionsAdminGroupsPartialUpdate["response"], ApiV1ActionsAdminGroupsPartialUpdate["error"], ApiV1ActionsAdminGroupsPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ActionsAdminGroupsPartialUpdate["response"], ApiV1ActionsAdminGroupsPartialUpdate["error"], ApiV1ActionsAdminGroupsPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ActionsAdminGroupsPartialUpdate["data"], ApiV1ActionsAdminGroupsPartialUpdate["error"], ApiV1ActionsAdminGroupsPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/actions/admin/groups/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
