import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1HelpdeskCasesMessagesCreateMutationRequest,
  ApiV1HelpdeskCasesMessagesCreateMutationResponse,
  ApiV1HelpdeskCasesMessagesCreatePathParams,
  ApiV1HelpdeskCasesMessagesCreate201,
} from "../../../models/ts/apiController/ApiV1HelpdeskCasesMessagesCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1HelpdeskCasesMessagesCreateClient = typeof client<ApiV1HelpdeskCasesMessagesCreateMutationResponse, ApiV1HelpdeskCasesMessagesCreate201, ApiV1HelpdeskCasesMessagesCreateMutationRequest>
type ApiV1HelpdeskCasesMessagesCreate = {
  data: ApiV1HelpdeskCasesMessagesCreateMutationResponse
  error: ApiV1HelpdeskCasesMessagesCreate201
  request: ApiV1HelpdeskCasesMessagesCreateMutationRequest
  pathParams: ApiV1HelpdeskCasesMessagesCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1HelpdeskCasesMessagesCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1HelpdeskCasesMessagesCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1HelpdeskCasesMessagesCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.* **user_is_not_creator_of_case**Пользователь не является владельцем обращения с указанным ID {}.Метод создания нового сообщения принимает данные в формате multipart/form-data.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Список сообщений конкретного обращения, создание нового сообщения.
 * @link /api/v1/helpdesk/cases/:case_id/messages/ */
export function useApiV1HelpdeskCasesMessagesCreate(
  caseId: ApiV1HelpdeskCasesMessagesCreatePathParams["case_id"],
  options: {
    mutation?: UseMutationOptions<ApiV1HelpdeskCasesMessagesCreate["response"], ApiV1HelpdeskCasesMessagesCreate["error"], ApiV1HelpdeskCasesMessagesCreate["request"]>
    client?: ApiV1HelpdeskCasesMessagesCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1HelpdeskCasesMessagesCreate["response"], ApiV1HelpdeskCasesMessagesCreate["error"], ApiV1HelpdeskCasesMessagesCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1HelpdeskCasesMessagesCreate["response"], ApiV1HelpdeskCasesMessagesCreate["error"], ApiV1HelpdeskCasesMessagesCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1HelpdeskCasesMessagesCreate["data"], ApiV1HelpdeskCasesMessagesCreate["error"], ApiV1HelpdeskCasesMessagesCreate["request"]>({
        method: "post",
        url: `/api/v1/helpdesk/cases/${caseId}/messages/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
