import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserNotificationsReadingCreateMutationResponse,
  ApiV1UserNotificationsReadingCreatePathParams,
  ApiV1UserNotificationsReadingCreate201,
} from "../../../models/ts/apiController/ApiV1UserNotificationsReadingCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserNotificationsReadingCreateClient = typeof client<ApiV1UserNotificationsReadingCreateMutationResponse, ApiV1UserNotificationsReadingCreate201, never>
type ApiV1UserNotificationsReadingCreate = {
  data: ApiV1UserNotificationsReadingCreateMutationResponse
  error: ApiV1UserNotificationsReadingCreate201
  request: never
  pathParams: ApiV1UserNotificationsReadingCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserNotificationsReadingCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserNotificationsReadingCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserNotificationsReadingCreateClient>>
  }
}
/**
 * @description .
 * @summary Установка флага прочтения для общего уведомления
 * @link /api/v1/user/notifications/:id/reading */
export function useApiV1UserNotificationsReadingCreate(
  id: ApiV1UserNotificationsReadingCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserNotificationsReadingCreate["response"], ApiV1UserNotificationsReadingCreate["error"], void>
    client?: ApiV1UserNotificationsReadingCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserNotificationsReadingCreate["response"], ApiV1UserNotificationsReadingCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserNotificationsReadingCreate["response"], ApiV1UserNotificationsReadingCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserNotificationsReadingCreate["data"], ApiV1UserNotificationsReadingCreate["error"], void>({
        method: "post",
        url: `/api/v1/user/notifications/${id}/reading`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
