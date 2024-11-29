import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ActionsAdminGroupsCreateMutationRequest,
  ApiV1ActionsAdminGroupsCreateMutationResponse,
  ApiV1ActionsAdminGroupsCreate201,
} from "../../../models/ts/apiController/ApiV1ActionsAdminGroupsCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ActionsAdminGroupsCreateClient = typeof client<ApiV1ActionsAdminGroupsCreateMutationResponse, ApiV1ActionsAdminGroupsCreate201, ApiV1ActionsAdminGroupsCreateMutationRequest>
type ApiV1ActionsAdminGroupsCreate = {
  data: ApiV1ActionsAdminGroupsCreateMutationResponse
  error: ApiV1ActionsAdminGroupsCreate201
  request: ApiV1ActionsAdminGroupsCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminGroupsCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminGroupsCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminGroupsCreateClient>>
  }
}
/**
 * @description Представление для выборки всех групп логов
 * @link /api/v1/actions/admin/groups */
export function useApiV1ActionsAdminGroupsCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1ActionsAdminGroupsCreate["response"], ApiV1ActionsAdminGroupsCreate["error"], ApiV1ActionsAdminGroupsCreate["request"]>
    client?: ApiV1ActionsAdminGroupsCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ActionsAdminGroupsCreate["response"], ApiV1ActionsAdminGroupsCreate["error"], ApiV1ActionsAdminGroupsCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ActionsAdminGroupsCreate["response"], ApiV1ActionsAdminGroupsCreate["error"], ApiV1ActionsAdminGroupsCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ActionsAdminGroupsCreate["data"], ApiV1ActionsAdminGroupsCreate["error"], ApiV1ActionsAdminGroupsCreate["request"]>({
        method: "post",
        url: `/api/v1/actions/admin/groups`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
