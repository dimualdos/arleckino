import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1HelpdeskCasesListQueryResponse } from "../../../models/ts/apiController/ApiV1HelpdeskCasesList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1HelpdeskCasesListClient = typeof client<ApiV1HelpdeskCasesListQueryResponse, never, never>
type ApiV1HelpdeskCasesList = {
  data: ApiV1HelpdeskCasesListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1HelpdeskCasesListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1HelpdeskCasesListClient>[0]>
    return: Awaited<ReturnType<ApiV1HelpdeskCasesListClient>>
  }
}
export const apiV1HelpdeskCasesListQueryKey = () => [{ url: "/api/v1/helpdesk/cases/" }] as const
export type ApiV1HelpdeskCasesListQueryKey = ReturnType<typeof apiV1HelpdeskCasesListQueryKey>
export function apiV1HelpdeskCasesListQueryOptions<TData = ApiV1HelpdeskCasesList["response"], TQueryData = ApiV1HelpdeskCasesList["response"]>(
  options: ApiV1HelpdeskCasesList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1HelpdeskCasesList["response"], ApiV1HelpdeskCasesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1HelpdeskCasesListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1HelpdeskCasesList["data"], ApiV1HelpdeskCasesList["error"]>({
        method: "get",
        url: `/api/v1/helpdesk/cases/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.Метод создания нового обращения принимает данные в формате **multipart/form-data**.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Список обращений, создание нового обращения.
 * @link /api/v1/helpdesk/cases/ */
export function useApiV1HelpdeskCasesList<TData = ApiV1HelpdeskCasesList["response"], TQueryData = ApiV1HelpdeskCasesList["response"], TQueryKey extends QueryKey = ApiV1HelpdeskCasesListQueryKey>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1HelpdeskCasesList["response"], ApiV1HelpdeskCasesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1HelpdeskCasesList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1HelpdeskCasesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1HelpdeskCasesListQueryKey()
  const query = useQuery<ApiV1HelpdeskCasesList["data"], ApiV1HelpdeskCasesList["error"], TData, any>({
    ...apiV1HelpdeskCasesListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1HelpdeskCasesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1HelpdeskCasesListInfiniteQueryKey = () => [{ url: "/api/v1/helpdesk/cases/" }] as const
export type ApiV1HelpdeskCasesListInfiniteQueryKey = ReturnType<typeof apiV1HelpdeskCasesListInfiniteQueryKey>
export function apiV1HelpdeskCasesListInfiniteQueryOptions<TData = ApiV1HelpdeskCasesList["response"], TQueryData = ApiV1HelpdeskCasesList["response"]>(
  options: ApiV1HelpdeskCasesList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1HelpdeskCasesList["response"], ApiV1HelpdeskCasesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1HelpdeskCasesListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1HelpdeskCasesList["data"], ApiV1HelpdeskCasesList["error"]>({
        method: "get",
        url: `/api/v1/helpdesk/cases/?task_id=d275294e-0e73-4a94-a4b2-7143e31607cc`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.Метод создания нового обращения принимает данные в формате **multipart/form-data**.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Список обращений, создание нового обращения.
 * @link /api/v1/helpdesk/cases/ */
export function useApiV1HelpdeskCasesListInfinite<
  TData = InfiniteData<ApiV1HelpdeskCasesList["response"]>,
  TQueryData = ApiV1HelpdeskCasesList["response"],
  TQueryKey extends QueryKey = ApiV1HelpdeskCasesListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1HelpdeskCasesList["response"], ApiV1HelpdeskCasesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1HelpdeskCasesList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1HelpdeskCasesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1HelpdeskCasesListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1HelpdeskCasesList["data"], ApiV1HelpdeskCasesList["error"], TData, any>({
    ...apiV1HelpdeskCasesListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1HelpdeskCasesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
