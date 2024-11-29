import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserSendEmailCreateMutationRequest,
  ApiV1UserAdminUserSendEmailCreateMutationResponse,
  ApiV1UserAdminUserSendEmailCreatePathParams,
  ApiV1UserAdminUserSendEmailCreate201,
} from "../../../models/ts/apiController/ApiV1UserAdminUserSendEmailCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserSendEmailCreateClient = typeof client<ApiV1UserAdminUserSendEmailCreateMutationResponse, ApiV1UserAdminUserSendEmailCreate201, ApiV1UserAdminUserSendEmailCreateMutationRequest>
type ApiV1UserAdminUserSendEmailCreate = {
  data: ApiV1UserAdminUserSendEmailCreateMutationResponse
  error: ApiV1UserAdminUserSendEmailCreate201
  request: ApiV1UserAdminUserSendEmailCreateMutationRequest
  pathParams: ApiV1UserAdminUserSendEmailCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserSendEmailCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserSendEmailCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserSendEmailCreateClient>>
  }
}
/**
 * @description .
 * @summary Отправить сообщение на e-mail пользователя
 * @link /api/v1/user/admin/user/:id/send-email */
export function useApiV1UserAdminUserSendEmailCreate(
  id: ApiV1UserAdminUserSendEmailCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminUserSendEmailCreate["response"], ApiV1UserAdminUserSendEmailCreate["error"], ApiV1UserAdminUserSendEmailCreate["request"]>
    client?: ApiV1UserAdminUserSendEmailCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminUserSendEmailCreate["response"], ApiV1UserAdminUserSendEmailCreate["error"], ApiV1UserAdminUserSendEmailCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminUserSendEmailCreate["response"], ApiV1UserAdminUserSendEmailCreate["error"], ApiV1UserAdminUserSendEmailCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserAdminUserSendEmailCreate["data"], ApiV1UserAdminUserSendEmailCreate["error"], ApiV1UserAdminUserSendEmailCreate["request"]>({
        method: "post",
        url: `/api/v1/user/admin/user/${id}/send-email`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
