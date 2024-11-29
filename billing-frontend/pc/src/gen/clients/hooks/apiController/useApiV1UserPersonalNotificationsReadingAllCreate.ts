import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserPersonalNotificationsReadingAllCreateMutationResponse,
  ApiV1UserPersonalNotificationsReadingAllCreate201,
} from "../../../models/ts/apiController/ApiV1UserPersonalNotificationsReadingAllCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserPersonalNotificationsReadingAllCreateClient = typeof client<ApiV1UserPersonalNotificationsReadingAllCreateMutationResponse, ApiV1UserPersonalNotificationsReadingAllCreate201, never>
type ApiV1UserPersonalNotificationsReadingAllCreate = {
  data: ApiV1UserPersonalNotificationsReadingAllCreateMutationResponse
  error: ApiV1UserPersonalNotificationsReadingAllCreate201
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserPersonalNotificationsReadingAllCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserPersonalNotificationsReadingAllCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserPersonalNotificationsReadingAllCreateClient>>
  }
}
/**
 * @description .
 * @summary Установка флага прочтения для всех персональных уведомлений
 * @link /api/v1/user/personal-notifications/reading-all */
export function useApiV1UserPersonalNotificationsReadingAllCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserPersonalNotificationsReadingAllCreate["response"], ApiV1UserPersonalNotificationsReadingAllCreate["error"], void>
    client?: ApiV1UserPersonalNotificationsReadingAllCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserPersonalNotificationsReadingAllCreate["response"], ApiV1UserPersonalNotificationsReadingAllCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserPersonalNotificationsReadingAllCreate["response"], ApiV1UserPersonalNotificationsReadingAllCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserPersonalNotificationsReadingAllCreate["data"], ApiV1UserPersonalNotificationsReadingAllCreate["error"], void>({
        method: "post",
        url: `/api/v1/user/personal-notifications/reading-all`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
