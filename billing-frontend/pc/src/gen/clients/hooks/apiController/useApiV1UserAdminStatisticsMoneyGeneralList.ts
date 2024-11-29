import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminStatisticsMoneyGeneralListQueryResponse,
  ApiV1UserAdminStatisticsMoneyGeneralListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminStatisticsMoneyGeneralList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminStatisticsMoneyGeneralListClient = typeof client<ApiV1UserAdminStatisticsMoneyGeneralListQueryResponse, never, never>
type ApiV1UserAdminStatisticsMoneyGeneralList = {
  data: ApiV1UserAdminStatisticsMoneyGeneralListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserAdminStatisticsMoneyGeneralListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminStatisticsMoneyGeneralListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminStatisticsMoneyGeneralListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminStatisticsMoneyGeneralListClient>>
  }
}
export const apiV1UserAdminStatisticsMoneyGeneralListQueryKey = (params?: ApiV1UserAdminStatisticsMoneyGeneralList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/money/general" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsMoneyGeneralListQueryKey = ReturnType<typeof apiV1UserAdminStatisticsMoneyGeneralListQueryKey>
export function apiV1UserAdminStatisticsMoneyGeneralListQueryOptions<TData = ApiV1UserAdminStatisticsMoneyGeneralList["response"], TQueryData = ApiV1UserAdminStatisticsMoneyGeneralList["response"]>(
  params?: ApiV1UserAdminStatisticsMoneyGeneralList["queryParams"],
  options: ApiV1UserAdminStatisticsMoneyGeneralList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminStatisticsMoneyGeneralList["response"], ApiV1UserAdminStatisticsMoneyGeneralList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsMoneyGeneralListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminStatisticsMoneyGeneralList["data"], ApiV1UserAdminStatisticsMoneyGeneralList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/money/general`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Общие данные для секции "ДЕНЬГИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/money/general */
export function useApiV1UserAdminStatisticsMoneyGeneralList<
  TData = ApiV1UserAdminStatisticsMoneyGeneralList["response"],
  TQueryData = ApiV1UserAdminStatisticsMoneyGeneralList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsMoneyGeneralListQueryKey,
>(
  params?: ApiV1UserAdminStatisticsMoneyGeneralList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminStatisticsMoneyGeneralList["response"], ApiV1UserAdminStatisticsMoneyGeneralList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsMoneyGeneralList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminStatisticsMoneyGeneralList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsMoneyGeneralListQueryKey(params)
  const query = useQuery<ApiV1UserAdminStatisticsMoneyGeneralList["data"], ApiV1UserAdminStatisticsMoneyGeneralList["error"], TData, any>({
    ...apiV1UserAdminStatisticsMoneyGeneralListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminStatisticsMoneyGeneralList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminStatisticsMoneyGeneralListInfiniteQueryKey = (params?: ApiV1UserAdminStatisticsMoneyGeneralList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/money/general" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsMoneyGeneralListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminStatisticsMoneyGeneralListInfiniteQueryKey>
export function apiV1UserAdminStatisticsMoneyGeneralListInfiniteQueryOptions<
  TData = ApiV1UserAdminStatisticsMoneyGeneralList["response"],
  TQueryData = ApiV1UserAdminStatisticsMoneyGeneralList["response"],
>(
  params?: ApiV1UserAdminStatisticsMoneyGeneralList["queryParams"],
  options: ApiV1UserAdminStatisticsMoneyGeneralList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsMoneyGeneralList["response"], ApiV1UserAdminStatisticsMoneyGeneralList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsMoneyGeneralListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminStatisticsMoneyGeneralList["data"], ApiV1UserAdminStatisticsMoneyGeneralList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/money/general`,
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
 * @summary Общие данные для секции "ДЕНЬГИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/money/general */
export function useApiV1UserAdminStatisticsMoneyGeneralListInfinite<
  TData = InfiniteData<ApiV1UserAdminStatisticsMoneyGeneralList["response"]>,
  TQueryData = ApiV1UserAdminStatisticsMoneyGeneralList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsMoneyGeneralListInfiniteQueryKey,
>(
  params?: ApiV1UserAdminStatisticsMoneyGeneralList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsMoneyGeneralList["response"], ApiV1UserAdminStatisticsMoneyGeneralList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsMoneyGeneralList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsMoneyGeneralList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsMoneyGeneralListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserAdminStatisticsMoneyGeneralList["data"], ApiV1UserAdminStatisticsMoneyGeneralList["error"], TData, any>({
    ...apiV1UserAdminStatisticsMoneyGeneralListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsMoneyGeneralList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
