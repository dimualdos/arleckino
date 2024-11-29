import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1HelpdeskCasesMessagesListQueryResponse, ApiV1HelpdeskCasesMessagesListPathParams } from "../../../models/ts/apiController/ApiV1HelpdeskCasesMessagesList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1HelpdeskCasesMessagesListClient = typeof client<ApiV1HelpdeskCasesMessagesListQueryResponse, never, never>
type ApiV1HelpdeskCasesMessagesList = {
  data: ApiV1HelpdeskCasesMessagesListQueryResponse
  error: never
  request: never
  pathParams: ApiV1HelpdeskCasesMessagesListPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1HelpdeskCasesMessagesListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1HelpdeskCasesMessagesListClient>[0]>
    return: Awaited<ReturnType<ApiV1HelpdeskCasesMessagesListClient>>
  }
}
export const apiV1HelpdeskCasesMessagesListQueryKey = (caseId: ApiV1HelpdeskCasesMessagesListPathParams["case_id"]) =>
  [{ url: "/api/v1/helpdesk/cases/:case_id/messages/", params: { caseId: caseId } }] as const
export type ApiV1HelpdeskCasesMessagesListQueryKey = ReturnType<typeof apiV1HelpdeskCasesMessagesListQueryKey>
export function apiV1HelpdeskCasesMessagesListQueryOptions<TData = ApiV1HelpdeskCasesMessagesList["response"], TQueryData = ApiV1HelpdeskCasesMessagesList["response"]>(
  caseId: ApiV1HelpdeskCasesMessagesListPathParams["case_id"],
  options: ApiV1HelpdeskCasesMessagesList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1HelpdeskCasesMessagesList["response"], ApiV1HelpdeskCasesMessagesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1HelpdeskCasesMessagesListQueryKey(caseId)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1HelpdeskCasesMessagesList["data"], ApiV1HelpdeskCasesMessagesList["error"]>({
        method: "get",
        url: `/api/v1/helpdesk/cases/${caseId}/messages/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.* **user_is_not_creator_of_case**Пользователь не является владельцем обращения с указанным ID {}.Метод создания нового сообщения принимает данные в формате multipart/form-data.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Список сообщений конкретного обращения, создание нового сообщения.
 * @link /api/v1/helpdesk/cases/:case_id/messages/ */
export function useApiV1HelpdeskCasesMessagesList<
  TData = ApiV1HelpdeskCasesMessagesList["response"],
  TQueryData = ApiV1HelpdeskCasesMessagesList["response"],
  TQueryKey extends QueryKey = ApiV1HelpdeskCasesMessagesListQueryKey,
>(
  caseId: ApiV1HelpdeskCasesMessagesListPathParams["case_id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1HelpdeskCasesMessagesList["response"], ApiV1HelpdeskCasesMessagesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1HelpdeskCasesMessagesList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1HelpdeskCasesMessagesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1HelpdeskCasesMessagesListQueryKey(caseId)
  const query = useQuery<ApiV1HelpdeskCasesMessagesList["data"], ApiV1HelpdeskCasesMessagesList["error"], TData, any>({
    ...apiV1HelpdeskCasesMessagesListQueryOptions<TData, TQueryData>(caseId, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1HelpdeskCasesMessagesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1HelpdeskCasesMessagesListInfiniteQueryKey = (caseId: ApiV1HelpdeskCasesMessagesListPathParams["case_id"]) =>
  [{ url: "/api/v1/helpdesk/cases/:case_id/messages/", params: { caseId: caseId } }] as const
export type ApiV1HelpdeskCasesMessagesListInfiniteQueryKey = ReturnType<typeof apiV1HelpdeskCasesMessagesListInfiniteQueryKey>
export function apiV1HelpdeskCasesMessagesListInfiniteQueryOptions<TData = ApiV1HelpdeskCasesMessagesList["response"], TQueryData = ApiV1HelpdeskCasesMessagesList["response"]>(
  caseId: ApiV1HelpdeskCasesMessagesListPathParams["case_id"],
  options: ApiV1HelpdeskCasesMessagesList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1HelpdeskCasesMessagesList["response"], ApiV1HelpdeskCasesMessagesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1HelpdeskCasesMessagesListInfiniteQueryKey(caseId)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1HelpdeskCasesMessagesList["data"], ApiV1HelpdeskCasesMessagesList["error"]>({
        method: "get",
        url: `/api/v1/helpdesk/cases/${caseId}/messages/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.* **user_is_not_creator_of_case**Пользователь не является владельцем обращения с указанным ID {}.Метод создания нового сообщения принимает данные в формате multipart/form-data.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Список сообщений конкретного обращения, создание нового сообщения.
 * @link /api/v1/helpdesk/cases/:case_id/messages/ */
export function useApiV1HelpdeskCasesMessagesListInfinite<
  TData = InfiniteData<ApiV1HelpdeskCasesMessagesList["response"]>,
  TQueryData = ApiV1HelpdeskCasesMessagesList["response"],
  TQueryKey extends QueryKey = ApiV1HelpdeskCasesMessagesListInfiniteQueryKey,
>(
  caseId: ApiV1HelpdeskCasesMessagesListPathParams["case_id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1HelpdeskCasesMessagesList["response"], ApiV1HelpdeskCasesMessagesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1HelpdeskCasesMessagesList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1HelpdeskCasesMessagesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1HelpdeskCasesMessagesListInfiniteQueryKey(caseId)
  const query = useInfiniteQuery<ApiV1HelpdeskCasesMessagesList["data"], ApiV1HelpdeskCasesMessagesList["error"], TData, any>({
    ...apiV1HelpdeskCasesMessagesListInfiniteQueryOptions<TData, TQueryData>(caseId, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1HelpdeskCasesMessagesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
