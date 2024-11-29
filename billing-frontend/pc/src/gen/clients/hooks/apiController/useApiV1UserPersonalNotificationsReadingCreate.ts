import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserPersonalNotificationsReadingCreateMutationResponse,
  ApiV1UserPersonalNotificationsReadingCreatePathParams,
  ApiV1UserPersonalNotificationsReadingCreate201,
} from "../../../models/ts/apiController/ApiV1UserPersonalNotificationsReadingCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserPersonalNotificationsReadingCreateClient = typeof client<ApiV1UserPersonalNotificationsReadingCreateMutationResponse, ApiV1UserPersonalNotificationsReadingCreate201, never>
type ApiV1UserPersonalNotificationsReadingCreate = {
  data: ApiV1UserPersonalNotificationsReadingCreateMutationResponse
  error: ApiV1UserPersonalNotificationsReadingCreate201
  request: never
  pathParams: ApiV1UserPersonalNotificationsReadingCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserPersonalNotificationsReadingCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserPersonalNotificationsReadingCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserPersonalNotificationsReadingCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **personal_notification_belongs_to_another_user**Персональное уведомление {title} принадлежит другому пользователю.
 * @summary Установка флага прочтения для персонального уведомления
 * @link /api/v1/user/personal-notifications/:id/reading */
export function useApiV1UserPersonalNotificationsReadingCreate(
  id: ApiV1UserPersonalNotificationsReadingCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserPersonalNotificationsReadingCreate["response"], ApiV1UserPersonalNotificationsReadingCreate["error"], void>
    client?: ApiV1UserPersonalNotificationsReadingCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserPersonalNotificationsReadingCreate["response"], ApiV1UserPersonalNotificationsReadingCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserPersonalNotificationsReadingCreate["response"], ApiV1UserPersonalNotificationsReadingCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserPersonalNotificationsReadingCreate["data"], ApiV1UserPersonalNotificationsReadingCreate["error"], void>({
        method: "post",
        url: `/api/v1/user/personal-notifications/${id}/reading`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
