import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ActionsAdminTypesUpdateMutationRequest,
  ApiV1ActionsAdminTypesUpdateMutationResponse,
  ApiV1ActionsAdminTypesUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminTypesUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ActionsAdminTypesUpdateClient = typeof client<ApiV1ActionsAdminTypesUpdateMutationResponse, never, ApiV1ActionsAdminTypesUpdateMutationRequest>
type ApiV1ActionsAdminTypesUpdate = {
  data: ApiV1ActionsAdminTypesUpdateMutationResponse
  error: never
  request: ApiV1ActionsAdminTypesUpdateMutationRequest
  pathParams: ApiV1ActionsAdminTypesUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminTypesUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminTypesUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminTypesUpdateClient>>
  }
}
/**
 * @description Представление для выборки данных конкретного действия
 * @link /api/v1/actions/admin/types/:id/ */
export function useApiV1ActionsAdminTypesUpdate(
  id: ApiV1ActionsAdminTypesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ActionsAdminTypesUpdate["response"], ApiV1ActionsAdminTypesUpdate["error"], ApiV1ActionsAdminTypesUpdate["request"]>
    client?: ApiV1ActionsAdminTypesUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ActionsAdminTypesUpdate["response"], ApiV1ActionsAdminTypesUpdate["error"], ApiV1ActionsAdminTypesUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ActionsAdminTypesUpdate["response"], ApiV1ActionsAdminTypesUpdate["error"], ApiV1ActionsAdminTypesUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ActionsAdminTypesUpdate["data"], ApiV1ActionsAdminTypesUpdate["error"], ApiV1ActionsAdminTypesUpdate["request"]>({
        method: "put",
        url: `/api/v1/actions/admin/types/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
