import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ActionsUserLogsListQueryResponse, ApiV1ActionsUserLogsListQueryParams } from "../../../models/ts/apiController/ApiV1ActionsUserLogsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsUserLogsListClient = typeof client<ApiV1ActionsUserLogsListQueryResponse, never, never>
type ApiV1ActionsUserLogsList = {
  data: ApiV1ActionsUserLogsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ActionsUserLogsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsUserLogsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsUserLogsListClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsUserLogsListClient>>
  }
}
export const apiV1ActionsUserLogsListQueryKey = (params?: ApiV1ActionsUserLogsList["queryParams"]) => [{ url: "/api/v1/actions/user/logs/" }, ...(params ? [params] : [])] as const
export type ApiV1ActionsUserLogsListQueryKey = ReturnType<typeof apiV1ActionsUserLogsListQueryKey>
export function apiV1ActionsUserLogsListQueryOptions<TData = ApiV1ActionsUserLogsList["response"], TQueryData = ApiV1ActionsUserLogsList["response"]>(
  params?: ApiV1ActionsUserLogsList["queryParams"],
  options: ApiV1ActionsUserLogsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsUserLogsList["response"], ApiV1ActionsUserLogsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsUserLogsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsUserLogsList["data"], ApiV1ActionsUserLogsList["error"]>({
        method: "get",
        url: `/api/v1/actions/user/logs/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Получение всех логов активного пользователя
 * @link /api/v1/actions/user/logs/ */
export function useApiV1ActionsUserLogsList<
  TData = ApiV1ActionsUserLogsList["response"],
  TQueryData = ApiV1ActionsUserLogsList["response"],
  TQueryKey extends QueryKey = ApiV1ActionsUserLogsListQueryKey,
>(
  params?: ApiV1ActionsUserLogsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsUserLogsList["response"], ApiV1ActionsUserLogsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsUserLogsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsUserLogsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsUserLogsListQueryKey(params)
  const query = useQuery<ApiV1ActionsUserLogsList["data"], ApiV1ActionsUserLogsList["error"], TData, any>({
    ...apiV1ActionsUserLogsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsUserLogsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsUserLogsListInfiniteQueryKey = (params?: ApiV1ActionsUserLogsList["queryParams"]) => [{ url: "/api/v1/actions/user/logs/" }, ...(params ? [params] : [])] as const
export type ApiV1ActionsUserLogsListInfiniteQueryKey = ReturnType<typeof apiV1ActionsUserLogsListInfiniteQueryKey>
export function apiV1ActionsUserLogsListInfiniteQueryOptions<TData = ApiV1ActionsUserLogsList["response"], TQueryData = ApiV1ActionsUserLogsList["response"]>(
  params?: ApiV1ActionsUserLogsList["queryParams"],
  options: ApiV1ActionsUserLogsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsUserLogsList["response"], ApiV1ActionsUserLogsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsUserLogsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsUserLogsList["data"], ApiV1ActionsUserLogsList["error"]>({
        method: "get",
        url: `/api/v1/actions/user/logs/`,
        ...options,
        params: {
          ...params,
          ["id"]: pageParam,
          ...(options.params || {}),
        },
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Получение всех логов активного пользователя
 * @link /api/v1/actions/user/logs/ */
export function useApiV1ActionsUserLogsListInfinite<
  TData = InfiniteData<ApiV1ActionsUserLogsList["response"]>,
  TQueryData = ApiV1ActionsUserLogsList["response"],
  TQueryKey extends QueryKey = ApiV1ActionsUserLogsListInfiniteQueryKey,
>(
  params?: ApiV1ActionsUserLogsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsUserLogsList["response"], ApiV1ActionsUserLogsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsUserLogsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsUserLogsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsUserLogsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ActionsUserLogsList["data"], ApiV1ActionsUserLogsList["error"], TData, any>({
    ...apiV1ActionsUserLogsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsUserLogsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
