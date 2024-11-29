import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1HelpdeskCasesCloseCreateMutationResponse,
  ApiV1HelpdeskCasesCloseCreatePathParams,
  ApiV1HelpdeskCasesCloseCreate201,
} from "../../../models/ts/apiController/ApiV1HelpdeskCasesCloseCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1HelpdeskCasesCloseCreateClient = typeof client<ApiV1HelpdeskCasesCloseCreateMutationResponse, ApiV1HelpdeskCasesCloseCreate201, never>
type ApiV1HelpdeskCasesCloseCreate = {
  data: ApiV1HelpdeskCasesCloseCreateMutationResponse
  error: ApiV1HelpdeskCasesCloseCreate201
  request: never
  pathParams: ApiV1HelpdeskCasesCloseCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1HelpdeskCasesCloseCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1HelpdeskCasesCloseCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1HelpdeskCasesCloseCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.* **user_is_not_creator_of_case**Пользователь не является владельцем обращения с указанным ID {}.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Закрытие обращения.
 * @link /api/v1/helpdesk/cases/:case_id/close/ */
export function useApiV1HelpdeskCasesCloseCreate(
  caseId: ApiV1HelpdeskCasesCloseCreatePathParams["case_id"],
  options: {
    mutation?: UseMutationOptions<ApiV1HelpdeskCasesCloseCreate["response"], ApiV1HelpdeskCasesCloseCreate["error"], void>
    client?: ApiV1HelpdeskCasesCloseCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1HelpdeskCasesCloseCreate["response"], ApiV1HelpdeskCasesCloseCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1HelpdeskCasesCloseCreate["response"], ApiV1HelpdeskCasesCloseCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1HelpdeskCasesCloseCreate["data"], ApiV1HelpdeskCasesCloseCreate["error"], void>({
        method: "post",
        url: `/api/v1/helpdesk/cases/${caseId}/close/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
