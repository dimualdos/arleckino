import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1HelpdeskCasesFaqCreateMutationRequest,
  ApiV1HelpdeskCasesFaqCreateMutationResponse,
  ApiV1HelpdeskCasesFaqCreate201,
} from "../../../models/ts/apiController/ApiV1HelpdeskCasesFaqCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1HelpdeskCasesFaqCreateClient = typeof client<ApiV1HelpdeskCasesFaqCreateMutationResponse, ApiV1HelpdeskCasesFaqCreate201, ApiV1HelpdeskCasesFaqCreateMutationRequest>
type ApiV1HelpdeskCasesFaqCreate = {
  data: ApiV1HelpdeskCasesFaqCreateMutationResponse
  error: ApiV1HelpdeskCasesFaqCreate201
  request: ApiV1HelpdeskCasesFaqCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1HelpdeskCasesFaqCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1HelpdeskCasesFaqCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1HelpdeskCasesFaqCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Создание нового обращения на основании вопроса.
 * @link /api/v1/helpdesk/cases/faq/ */
export function useApiV1HelpdeskCasesFaqCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1HelpdeskCasesFaqCreate["response"], ApiV1HelpdeskCasesFaqCreate["error"], ApiV1HelpdeskCasesFaqCreate["request"]>
    client?: ApiV1HelpdeskCasesFaqCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1HelpdeskCasesFaqCreate["response"], ApiV1HelpdeskCasesFaqCreate["error"], ApiV1HelpdeskCasesFaqCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1HelpdeskCasesFaqCreate["response"], ApiV1HelpdeskCasesFaqCreate["error"], ApiV1HelpdeskCasesFaqCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1HelpdeskCasesFaqCreate["data"], ApiV1HelpdeskCasesFaqCreate["error"], ApiV1HelpdeskCasesFaqCreate["request"]>({
        method: "post",
        url: `/api/v1/helpdesk/cases/faq/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
