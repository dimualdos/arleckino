import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1HelpdeskCasesCreateMutationRequest, ApiV1HelpdeskCasesCreateMutationResponse, ApiV1HelpdeskCasesCreate201 } from "../../../models/ts/apiController/ApiV1HelpdeskCasesCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1HelpdeskCasesCreateClient = typeof client<ApiV1HelpdeskCasesCreateMutationResponse, ApiV1HelpdeskCasesCreate201, ApiV1HelpdeskCasesCreateMutationRequest>
type ApiV1HelpdeskCasesCreate = {
  data: ApiV1HelpdeskCasesCreateMutationResponse
  error: ApiV1HelpdeskCasesCreate201
  request: ApiV1HelpdeskCasesCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1HelpdeskCasesCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1HelpdeskCasesCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1HelpdeskCasesCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.Метод создания нового обращения принимает данные в формате **multipart/form-data**.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Список обращений, создание нового обращения.
 * @link /api/v1/helpdesk/cases/ */
export function useApiV1HelpdeskCasesCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1HelpdeskCasesCreate["response"], ApiV1HelpdeskCasesCreate["error"], ApiV1HelpdeskCasesCreate["request"]>
    client?: ApiV1HelpdeskCasesCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1HelpdeskCasesCreate["response"], ApiV1HelpdeskCasesCreate["error"], ApiV1HelpdeskCasesCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1HelpdeskCasesCreate["response"], ApiV1HelpdeskCasesCreate["error"], ApiV1HelpdeskCasesCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1HelpdeskCasesCreate["data"], ApiV1HelpdeskCasesCreate["error"], ApiV1HelpdeskCasesCreate["request"]>({
        method: "post",
        url: `/api/v1/helpdesk/cases/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
