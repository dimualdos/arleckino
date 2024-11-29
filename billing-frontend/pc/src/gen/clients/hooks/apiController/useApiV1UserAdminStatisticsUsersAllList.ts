import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserAdminStatisticsUsersAllListQueryResponse, ApiV1UserAdminStatisticsUsersAllListQueryParams } from "../../../models/ts/apiController/ApiV1UserAdminStatisticsUsersAllList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminStatisticsUsersAllListClient = typeof client<ApiV1UserAdminStatisticsUsersAllListQueryResponse, never, never>
type ApiV1UserAdminStatisticsUsersAllList = {
  data: ApiV1UserAdminStatisticsUsersAllListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserAdminStatisticsUsersAllListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminStatisticsUsersAllListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminStatisticsUsersAllListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminStatisticsUsersAllListClient>>
  }
}
export const apiV1UserAdminStatisticsUsersAllListQueryKey = (params?: ApiV1UserAdminStatisticsUsersAllList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/users/all" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsUsersAllListQueryKey = ReturnType<typeof apiV1UserAdminStatisticsUsersAllListQueryKey>
export function apiV1UserAdminStatisticsUsersAllListQueryOptions<TData = ApiV1UserAdminStatisticsUsersAllList["response"], TQueryData = ApiV1UserAdminStatisticsUsersAllList["response"]>(
  params?: ApiV1UserAdminStatisticsUsersAllList["queryParams"],
  options: ApiV1UserAdminStatisticsUsersAllList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminStatisticsUsersAllList["response"], ApiV1UserAdminStatisticsUsersAllList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsUsersAllListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminStatisticsUsersAllList["data"], ApiV1UserAdminStatisticsUsersAllList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/users/all`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Данные для показателя "Всего пользователей" секции "ПОЛЬЗОВАТЕЛИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/users/all */
export function useApiV1UserAdminStatisticsUsersAllList<
  TData = ApiV1UserAdminStatisticsUsersAllList["response"],
  TQueryData = ApiV1UserAdminStatisticsUsersAllList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsUsersAllListQueryKey,
>(
  params?: ApiV1UserAdminStatisticsUsersAllList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminStatisticsUsersAllList["response"], ApiV1UserAdminStatisticsUsersAllList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsUsersAllList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminStatisticsUsersAllList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsUsersAllListQueryKey(params)
  const query = useQuery<ApiV1UserAdminStatisticsUsersAllList["data"], ApiV1UserAdminStatisticsUsersAllList["error"], TData, any>({
    ...apiV1UserAdminStatisticsUsersAllListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminStatisticsUsersAllList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminStatisticsUsersAllListInfiniteQueryKey = (params?: ApiV1UserAdminStatisticsUsersAllList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/users/all" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsUsersAllListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminStatisticsUsersAllListInfiniteQueryKey>
export function apiV1UserAdminStatisticsUsersAllListInfiniteQueryOptions<TData = ApiV1UserAdminStatisticsUsersAllList["response"], TQueryData = ApiV1UserAdminStatisticsUsersAllList["response"]>(
  params?: ApiV1UserAdminStatisticsUsersAllList["queryParams"],
  options: ApiV1UserAdminStatisticsUsersAllList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsUsersAllList["response"], ApiV1UserAdminStatisticsUsersAllList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsUsersAllListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminStatisticsUsersAllList["data"], ApiV1UserAdminStatisticsUsersAllList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/users/all`,
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
 * @description .
 * @summary Данные для показателя "Всего пользователей" секции "ПОЛЬЗОВАТЕЛИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/users/all */
export function useApiV1UserAdminStatisticsUsersAllListInfinite<
  TData = InfiniteData<ApiV1UserAdminStatisticsUsersAllList["response"]>,
  TQueryData = ApiV1UserAdminStatisticsUsersAllList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsUsersAllListInfiniteQueryKey,
>(
  params?: ApiV1UserAdminStatisticsUsersAllList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsUsersAllList["response"], ApiV1UserAdminStatisticsUsersAllList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsUsersAllList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsUsersAllList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsUsersAllListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserAdminStatisticsUsersAllList["data"], ApiV1UserAdminStatisticsUsersAllList["error"], TData, any>({
    ...apiV1UserAdminStatisticsUsersAllListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsUsersAllList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
