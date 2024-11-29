import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1UserNotificationsReadingAllCreateMutationResponse, ApiV1UserNotificationsReadingAllCreate201 } from "../../../models/ts/apiController/ApiV1UserNotificationsReadingAllCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserNotificationsReadingAllCreateClient = typeof client<ApiV1UserNotificationsReadingAllCreateMutationResponse, ApiV1UserNotificationsReadingAllCreate201, never>
type ApiV1UserNotificationsReadingAllCreate = {
  data: ApiV1UserNotificationsReadingAllCreateMutationResponse
  error: ApiV1UserNotificationsReadingAllCreate201
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserNotificationsReadingAllCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserNotificationsReadingAllCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserNotificationsReadingAllCreateClient>>
  }
}
/**
 * @description .
 * @summary Установка флага прочтения для всех общих уведомлений
 * @link /api/v1/user/notifications/reading-all */
export function useApiV1UserNotificationsReadingAllCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserNotificationsReadingAllCreate["response"], ApiV1UserNotificationsReadingAllCreate["error"], void>
    client?: ApiV1UserNotificationsReadingAllCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserNotificationsReadingAllCreate["response"], ApiV1UserNotificationsReadingAllCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserNotificationsReadingAllCreate["response"], ApiV1UserNotificationsReadingAllCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserNotificationsReadingAllCreate["data"], ApiV1UserNotificationsReadingAllCreate["error"], void>({
        method: "post",
        url: `/api/v1/user/notifications/reading-all`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
