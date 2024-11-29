import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ActionsUserLogsAllListQueryResponse, ApiV1ActionsUserLogsAllListQueryParams } from "../../../models/ts/apiController/ApiV1ActionsUserLogsAllList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsUserLogsAllListClient = typeof client<ApiV1ActionsUserLogsAllListQueryResponse, never, never>
type ApiV1ActionsUserLogsAllList = {
  data: ApiV1ActionsUserLogsAllListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ActionsUserLogsAllListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsUserLogsAllListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsUserLogsAllListClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsUserLogsAllListClient>>
  }
}
export const apiV1ActionsUserLogsAllListQueryKey = (params?: ApiV1ActionsUserLogsAllList["queryParams"]) => [{ url: "/api/v1/actions/user/logs/all/" }, ...(params ? [params] : [])] as const
export type ApiV1ActionsUserLogsAllListQueryKey = ReturnType<typeof apiV1ActionsUserLogsAllListQueryKey>
export function apiV1ActionsUserLogsAllListQueryOptions<TData = ApiV1ActionsUserLogsAllList["response"], TQueryData = ApiV1ActionsUserLogsAllList["response"]>(
  params?: ApiV1ActionsUserLogsAllList["queryParams"],
  options: ApiV1ActionsUserLogsAllList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsUserLogsAllList["response"], ApiV1ActionsUserLogsAllList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsUserLogsAllListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsUserLogsAllList["data"], ApiV1ActionsUserLogsAllList["error"]>({
        method: "get",
        url: `/api/v1/actions/user/logs/all/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Получение всех логов активного пользователя без постраничной разбивки
 * @link /api/v1/actions/user/logs/all/ */
export function useApiV1ActionsUserLogsAllList<
  TData = ApiV1ActionsUserLogsAllList["response"],
  TQueryData = ApiV1ActionsUserLogsAllList["response"],
  TQueryKey extends QueryKey = ApiV1ActionsUserLogsAllListQueryKey,
>(
  params?: ApiV1ActionsUserLogsAllList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsUserLogsAllList["response"], ApiV1ActionsUserLogsAllList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsUserLogsAllList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsUserLogsAllList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsUserLogsAllListQueryKey(params)
  const query = useQuery<ApiV1ActionsUserLogsAllList["data"], ApiV1ActionsUserLogsAllList["error"], TData, any>({
    ...apiV1ActionsUserLogsAllListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsUserLogsAllList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsUserLogsAllListInfiniteQueryKey = (params?: ApiV1ActionsUserLogsAllList["queryParams"]) => [{ url: "/api/v1/actions/user/logs/all/" }, ...(params ? [params] : [])] as const
export type ApiV1ActionsUserLogsAllListInfiniteQueryKey = ReturnType<typeof apiV1ActionsUserLogsAllListInfiniteQueryKey>
export function apiV1ActionsUserLogsAllListInfiniteQueryOptions<TData = ApiV1ActionsUserLogsAllList["response"], TQueryData = ApiV1ActionsUserLogsAllList["response"]>(
  params?: ApiV1ActionsUserLogsAllList["queryParams"],
  options: ApiV1ActionsUserLogsAllList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsUserLogsAllList["response"], ApiV1ActionsUserLogsAllList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsUserLogsAllListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsUserLogsAllList["data"], ApiV1ActionsUserLogsAllList["error"]>({
        method: "get",
        url: `/api/v1/actions/user/logs/all/`,
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
 * @summary Получение всех логов активного пользователя без постраничной разбивки
 * @link /api/v1/actions/user/logs/all/ */
export function useApiV1ActionsUserLogsAllListInfinite<
  TData = InfiniteData<ApiV1ActionsUserLogsAllList["response"]>,
  TQueryData = ApiV1ActionsUserLogsAllList["response"],
  TQueryKey extends QueryKey = ApiV1ActionsUserLogsAllListInfiniteQueryKey,
>(
  params?: ApiV1ActionsUserLogsAllList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsUserLogsAllList["response"], ApiV1ActionsUserLogsAllList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsUserLogsAllList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsUserLogsAllList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsUserLogsAllListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ActionsUserLogsAllList["data"], ApiV1ActionsUserLogsAllList["error"], TData, any>({
    ...apiV1ActionsUserLogsAllListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsUserLogsAllList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
