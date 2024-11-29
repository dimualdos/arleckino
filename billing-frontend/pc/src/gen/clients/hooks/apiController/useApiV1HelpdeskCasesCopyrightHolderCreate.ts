import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1HelpdeskCasesCopyrightHolderCreateMutationRequest,
  ApiV1HelpdeskCasesCopyrightHolderCreateMutationResponse,
  ApiV1HelpdeskCasesCopyrightHolderCreate201,
} from "../../../models/ts/apiController/ApiV1HelpdeskCasesCopyrightHolderCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1HelpdeskCasesCopyrightHolderCreateClient = typeof client<
  ApiV1HelpdeskCasesCopyrightHolderCreateMutationResponse,
  ApiV1HelpdeskCasesCopyrightHolderCreate201,
  ApiV1HelpdeskCasesCopyrightHolderCreateMutationRequest
>
type ApiV1HelpdeskCasesCopyrightHolderCreate = {
  data: ApiV1HelpdeskCasesCopyrightHolderCreateMutationResponse
  error: ApiV1HelpdeskCasesCopyrightHolderCreate201
  request: ApiV1HelpdeskCasesCopyrightHolderCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1HelpdeskCasesCopyrightHolderCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1HelpdeskCasesCopyrightHolderCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1HelpdeskCasesCopyrightHolderCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Создание нового обращения правообладателем.
 * @link /api/v1/helpdesk/cases/copyright-holder/ */
export function useApiV1HelpdeskCasesCopyrightHolderCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1HelpdeskCasesCopyrightHolderCreate["response"], ApiV1HelpdeskCasesCopyrightHolderCreate["error"], ApiV1HelpdeskCasesCopyrightHolderCreate["request"]>
    client?: ApiV1HelpdeskCasesCopyrightHolderCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1HelpdeskCasesCopyrightHolderCreate["response"], ApiV1HelpdeskCasesCopyrightHolderCreate["error"], ApiV1HelpdeskCasesCopyrightHolderCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1HelpdeskCasesCopyrightHolderCreate["response"], ApiV1HelpdeskCasesCopyrightHolderCreate["error"], ApiV1HelpdeskCasesCopyrightHolderCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1HelpdeskCasesCopyrightHolderCreate["data"], ApiV1HelpdeskCasesCopyrightHolderCreate["error"], ApiV1HelpdeskCasesCopyrightHolderCreate["request"]>({
        method: "post",
        url: `/api/v1/helpdesk/cases/copyright-holder/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
