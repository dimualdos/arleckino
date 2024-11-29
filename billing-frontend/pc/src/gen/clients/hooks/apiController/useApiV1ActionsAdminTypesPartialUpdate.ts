import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ActionsAdminTypesPartialUpdateMutationRequest,
  ApiV1ActionsAdminTypesPartialUpdateMutationResponse,
  ApiV1ActionsAdminTypesPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminTypesPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ActionsAdminTypesPartialUpdateClient = typeof client<ApiV1ActionsAdminTypesPartialUpdateMutationResponse, never, ApiV1ActionsAdminTypesPartialUpdateMutationRequest>
type ApiV1ActionsAdminTypesPartialUpdate = {
  data: ApiV1ActionsAdminTypesPartialUpdateMutationResponse
  error: never
  request: ApiV1ActionsAdminTypesPartialUpdateMutationRequest
  pathParams: ApiV1ActionsAdminTypesPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminTypesPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminTypesPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminTypesPartialUpdateClient>>
  }
}
/**
 * @description Представление для выборки данных конкретного действия
 * @link /api/v1/actions/admin/types/:id/ */
export function useApiV1ActionsAdminTypesPartialUpdate(
  id: ApiV1ActionsAdminTypesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ActionsAdminTypesPartialUpdate["response"], ApiV1ActionsAdminTypesPartialUpdate["error"], ApiV1ActionsAdminTypesPartialUpdate["request"]>
    client?: ApiV1ActionsAdminTypesPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ActionsAdminTypesPartialUpdate["response"], ApiV1ActionsAdminTypesPartialUpdate["error"], ApiV1ActionsAdminTypesPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ActionsAdminTypesPartialUpdate["response"], ApiV1ActionsAdminTypesPartialUpdate["error"], ApiV1ActionsAdminTypesPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ActionsAdminTypesPartialUpdate["data"], ApiV1ActionsAdminTypesPartialUpdate["error"], ApiV1ActionsAdminTypesPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/actions/admin/types/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
