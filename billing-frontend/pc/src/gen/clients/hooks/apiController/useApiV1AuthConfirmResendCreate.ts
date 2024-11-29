import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1AuthConfirmResendCreateMutationRequest,
  ApiV1AuthConfirmResendCreateMutationResponse,
  ApiV1AuthConfirmResendCreate201,
} from "../../../models/ts/apiController/ApiV1AuthConfirmResendCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthConfirmResendCreateClient = typeof client<ApiV1AuthConfirmResendCreateMutationResponse, ApiV1AuthConfirmResendCreate201, ApiV1AuthConfirmResendCreateMutationRequest>
type ApiV1AuthConfirmResendCreate = {
  data: ApiV1AuthConfirmResendCreateMutationResponse
  error: ApiV1AuthConfirmResendCreate201
  request: ApiV1AuthConfirmResendCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthConfirmResendCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthConfirmResendCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthConfirmResendCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_already_verified**Учетная запись пользователя уже подтверждена.* **confirmation_resend_timeout**Не истек таймаут повторной отправки информации для подтверждения e-mail адреса.
 * @summary Повторная отправка информации для подтверждения e-mail адреса
 * @link /api/v1/auth/confirm/resend/ */
export function useApiV1AuthConfirmResendCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1AuthConfirmResendCreate["response"], ApiV1AuthConfirmResendCreate["error"], ApiV1AuthConfirmResendCreate["request"]>
    client?: ApiV1AuthConfirmResendCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthConfirmResendCreate["response"], ApiV1AuthConfirmResendCreate["error"], ApiV1AuthConfirmResendCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthConfirmResendCreate["response"], ApiV1AuthConfirmResendCreate["error"], ApiV1AuthConfirmResendCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1AuthConfirmResendCreate["data"], ApiV1AuthConfirmResendCreate["error"], ApiV1AuthConfirmResendCreate["request"]>({
        method: "post",
        url: `/api/v1/auth/confirm/resend/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
