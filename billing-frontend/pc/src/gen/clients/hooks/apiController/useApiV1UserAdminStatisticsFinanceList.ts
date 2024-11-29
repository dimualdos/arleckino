import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserAdminStatisticsFinanceListQueryResponse, ApiV1UserAdminStatisticsFinanceListQueryParams } from "../../../models/ts/apiController/ApiV1UserAdminStatisticsFinanceList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminStatisticsFinanceListClient = typeof client<ApiV1UserAdminStatisticsFinanceListQueryResponse, never, never>
type ApiV1UserAdminStatisticsFinanceList = {
  data: ApiV1UserAdminStatisticsFinanceListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserAdminStatisticsFinanceListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminStatisticsFinanceListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminStatisticsFinanceListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminStatisticsFinanceListClient>>
  }
}
export const apiV1UserAdminStatisticsFinanceListQueryKey = (params?: ApiV1UserAdminStatisticsFinanceList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/finance" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsFinanceListQueryKey = ReturnType<typeof apiV1UserAdminStatisticsFinanceListQueryKey>
export function apiV1UserAdminStatisticsFinanceListQueryOptions<TData = ApiV1UserAdminStatisticsFinanceList["response"], TQueryData = ApiV1UserAdminStatisticsFinanceList["response"]>(
  params?: ApiV1UserAdminStatisticsFinanceList["queryParams"],
  options: ApiV1UserAdminStatisticsFinanceList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminStatisticsFinanceList["response"], ApiV1UserAdminStatisticsFinanceList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsFinanceListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminStatisticsFinanceList["data"], ApiV1UserAdminStatisticsFinanceList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/finance`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Данные для секции "ФИНАНСЫ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/finance */
export function useApiV1UserAdminStatisticsFinanceList<
  TData = ApiV1UserAdminStatisticsFinanceList["response"],
  TQueryData = ApiV1UserAdminStatisticsFinanceList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsFinanceListQueryKey,
>(
  params?: ApiV1UserAdminStatisticsFinanceList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminStatisticsFinanceList["response"], ApiV1UserAdminStatisticsFinanceList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsFinanceList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminStatisticsFinanceList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsFinanceListQueryKey(params)
  const query = useQuery<ApiV1UserAdminStatisticsFinanceList["data"], ApiV1UserAdminStatisticsFinanceList["error"], TData, any>({
    ...apiV1UserAdminStatisticsFinanceListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminStatisticsFinanceList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminStatisticsFinanceListInfiniteQueryKey = (params?: ApiV1UserAdminStatisticsFinanceList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/finance" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsFinanceListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminStatisticsFinanceListInfiniteQueryKey>
export function apiV1UserAdminStatisticsFinanceListInfiniteQueryOptions<TData = ApiV1UserAdminStatisticsFinanceList["response"], TQueryData = ApiV1UserAdminStatisticsFinanceList["response"]>(
  params?: ApiV1UserAdminStatisticsFinanceList["queryParams"],
  options: ApiV1UserAdminStatisticsFinanceList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsFinanceList["response"], ApiV1UserAdminStatisticsFinanceList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsFinanceListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminStatisticsFinanceList["data"], ApiV1UserAdminStatisticsFinanceList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/finance`,
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
 * @summary Данные для секции "ФИНАНСЫ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/finance */
export function useApiV1UserAdminStatisticsFinanceListInfinite<
  TData = InfiniteData<ApiV1UserAdminStatisticsFinanceList["response"]>,
  TQueryData = ApiV1UserAdminStatisticsFinanceList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsFinanceListInfiniteQueryKey,
>(
  params?: ApiV1UserAdminStatisticsFinanceList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsFinanceList["response"], ApiV1UserAdminStatisticsFinanceList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsFinanceList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsFinanceList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsFinanceListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserAdminStatisticsFinanceList["data"], ApiV1UserAdminStatisticsFinanceList["error"], TData, any>({
    ...apiV1UserAdminStatisticsFinanceListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsFinanceList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
