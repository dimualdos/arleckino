import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminStatisticsUsersGeneralListQueryResponse,
  ApiV1UserAdminStatisticsUsersGeneralListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminStatisticsUsersGeneralList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminStatisticsUsersGeneralListClient = typeof client<ApiV1UserAdminStatisticsUsersGeneralListQueryResponse, never, never>
type ApiV1UserAdminStatisticsUsersGeneralList = {
  data: ApiV1UserAdminStatisticsUsersGeneralListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserAdminStatisticsUsersGeneralListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminStatisticsUsersGeneralListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminStatisticsUsersGeneralListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminStatisticsUsersGeneralListClient>>
  }
}
export const apiV1UserAdminStatisticsUsersGeneralListQueryKey = (params?: ApiV1UserAdminStatisticsUsersGeneralList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/users/general" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsUsersGeneralListQueryKey = ReturnType<typeof apiV1UserAdminStatisticsUsersGeneralListQueryKey>
export function apiV1UserAdminStatisticsUsersGeneralListQueryOptions<TData = ApiV1UserAdminStatisticsUsersGeneralList["response"], TQueryData = ApiV1UserAdminStatisticsUsersGeneralList["response"]>(
  params?: ApiV1UserAdminStatisticsUsersGeneralList["queryParams"],
  options: ApiV1UserAdminStatisticsUsersGeneralList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminStatisticsUsersGeneralList["response"], ApiV1UserAdminStatisticsUsersGeneralList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsUsersGeneralListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminStatisticsUsersGeneralList["data"], ApiV1UserAdminStatisticsUsersGeneralList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/users/general`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Общие данные для секции "ПОЛЬЗОВАТЕЛИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/users/general */
export function useApiV1UserAdminStatisticsUsersGeneralList<
  TData = ApiV1UserAdminStatisticsUsersGeneralList["response"],
  TQueryData = ApiV1UserAdminStatisticsUsersGeneralList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsUsersGeneralListQueryKey,
>(
  params?: ApiV1UserAdminStatisticsUsersGeneralList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminStatisticsUsersGeneralList["response"], ApiV1UserAdminStatisticsUsersGeneralList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsUsersGeneralList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminStatisticsUsersGeneralList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsUsersGeneralListQueryKey(params)
  const query = useQuery<ApiV1UserAdminStatisticsUsersGeneralList["data"], ApiV1UserAdminStatisticsUsersGeneralList["error"], TData, any>({
    ...apiV1UserAdminStatisticsUsersGeneralListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminStatisticsUsersGeneralList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminStatisticsUsersGeneralListInfiniteQueryKey = (params?: ApiV1UserAdminStatisticsUsersGeneralList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/users/general" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsUsersGeneralListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminStatisticsUsersGeneralListInfiniteQueryKey>
export function apiV1UserAdminStatisticsUsersGeneralListInfiniteQueryOptions<
  TData = ApiV1UserAdminStatisticsUsersGeneralList["response"],
  TQueryData = ApiV1UserAdminStatisticsUsersGeneralList["response"],
>(
  params?: ApiV1UserAdminStatisticsUsersGeneralList["queryParams"],
  options: ApiV1UserAdminStatisticsUsersGeneralList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsUsersGeneralList["response"], ApiV1UserAdminStatisticsUsersGeneralList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsUsersGeneralListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminStatisticsUsersGeneralList["data"], ApiV1UserAdminStatisticsUsersGeneralList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/users/general`,
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
 * @summary Общие данные для секции "ПОЛЬЗОВАТЕЛИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/users/general */
export function useApiV1UserAdminStatisticsUsersGeneralListInfinite<
  TData = InfiniteData<ApiV1UserAdminStatisticsUsersGeneralList["response"]>,
  TQueryData = ApiV1UserAdminStatisticsUsersGeneralList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsUsersGeneralListInfiniteQueryKey,
>(
  params?: ApiV1UserAdminStatisticsUsersGeneralList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsUsersGeneralList["response"], ApiV1UserAdminStatisticsUsersGeneralList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsUsersGeneralList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsUsersGeneralList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsUsersGeneralListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserAdminStatisticsUsersGeneralList["data"], ApiV1UserAdminStatisticsUsersGeneralList["error"], TData, any>({
    ...apiV1UserAdminStatisticsUsersGeneralListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsUsersGeneralList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
