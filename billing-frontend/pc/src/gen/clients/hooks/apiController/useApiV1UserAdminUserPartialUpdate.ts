import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserPartialUpdateMutationRequest,
  ApiV1UserAdminUserPartialUpdateMutationResponse,
  ApiV1UserAdminUserPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserPartialUpdateClient = typeof client<ApiV1UserAdminUserPartialUpdateMutationResponse, never, ApiV1UserAdminUserPartialUpdateMutationRequest>
type ApiV1UserAdminUserPartialUpdate = {
  data: ApiV1UserAdminUserPartialUpdateMutationResponse
  error: never
  request: ApiV1UserAdminUserPartialUpdateMutationRequest
  pathParams: ApiV1UserAdminUserPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserPartialUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр и изменение информации о пользователе администратором
 * @link /api/v1/user/admin/user/:id */
export function useApiV1UserAdminUserPartialUpdate(
  id: ApiV1UserAdminUserPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminUserPartialUpdate["response"], ApiV1UserAdminUserPartialUpdate["error"], ApiV1UserAdminUserPartialUpdate["request"]>
    client?: ApiV1UserAdminUserPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminUserPartialUpdate["response"], ApiV1UserAdminUserPartialUpdate["error"], ApiV1UserAdminUserPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminUserPartialUpdate["response"], ApiV1UserAdminUserPartialUpdate["error"], ApiV1UserAdminUserPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserAdminUserPartialUpdate["data"], ApiV1UserAdminUserPartialUpdate["error"], ApiV1UserAdminUserPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/user/admin/user/${id}`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
