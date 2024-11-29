import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserReferralsStatisticsReadQueryResponse } from "../../../models/ts/apiController/ApiV1UserReferralsStatisticsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserReferralsStatisticsReadClient = typeof client<ApiV1UserReferralsStatisticsReadQueryResponse, never, never>
type ApiV1UserReferralsStatisticsRead = {
  data: ApiV1UserReferralsStatisticsReadQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserReferralsStatisticsReadQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserReferralsStatisticsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserReferralsStatisticsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserReferralsStatisticsReadClient>>
  }
}
export const apiV1UserReferralsStatisticsReadQueryKey = (params?: ApiV1UserReferralsStatisticsRead["queryParams"]) => [{ url: "/api/v1/user/referrals/statistics" }] as const
export type ApiV1UserReferralsStatisticsReadQueryKey = ReturnType<typeof apiV1UserReferralsStatisticsReadQueryKey>
export function apiV1UserReferralsStatisticsReadQueryOptions<TData = ApiV1UserReferralsStatisticsRead["response"], TQueryData = ApiV1UserReferralsStatisticsRead["response"]>(
  params?: ApiV1UserReferralsStatisticsRead["queryParams"],
  options: ApiV1UserReferralsStatisticsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserReferralsStatisticsRead["response"], ApiV1UserReferralsStatisticsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsStatisticsReadQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserReferralsStatisticsRead["data"], ApiV1UserReferralsStatisticsRead["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/statistics`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Статистика внутреннего счета пользователя за период
 * @link /api/v1/user/referrals/statistics */
export function useApiV1UserReferralsStatisticsRead<
  TData = ApiV1UserReferralsStatisticsRead["response"],
  TQueryData = ApiV1UserReferralsStatisticsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsStatisticsReadQueryKey,
>(
  params?: ApiV1UserReferralsStatisticsRead["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserReferralsStatisticsRead["queryParams"], ApiV1UserReferralsStatisticsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserReferralsStatisticsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserReferralsStatisticsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsStatisticsReadQueryKey(params)
  const query = useQuery<ApiV1UserReferralsStatisticsRead["data"], ApiV1UserReferralsStatisticsRead["error"], TData, any>({
    ...apiV1UserReferralsStatisticsReadQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserReferralsStatisticsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserReferralsStatisticsReadInfiniteQueryKey = () => [{ url: "/api/v1/user/referrals/statistics" }] as const
export type ApiV1UserReferralsStatisticsReadInfiniteQueryKey = ReturnType<typeof apiV1UserReferralsStatisticsReadInfiniteQueryKey>
export function apiV1UserReferralsStatisticsReadInfiniteQueryOptions<TData = ApiV1UserReferralsStatisticsRead["response"], TQueryData = ApiV1UserReferralsStatisticsRead["response"]>(
  options: ApiV1UserReferralsStatisticsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserReferralsStatisticsRead["response"], ApiV1UserReferralsStatisticsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsStatisticsReadInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserReferralsStatisticsRead["data"], ApiV1UserReferralsStatisticsRead["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/statistics`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Статистика внутреннего счета пользователя за период
 * @link /api/v1/user/referrals/statistics */
export function useApiV1UserReferralsStatisticsReadInfinite<
  TData = InfiniteData<ApiV1UserReferralsStatisticsRead["response"]>,
  TQueryData = ApiV1UserReferralsStatisticsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsStatisticsReadInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserReferralsStatisticsRead["response"], ApiV1UserReferralsStatisticsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserReferralsStatisticsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserReferralsStatisticsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsStatisticsReadInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1UserReferralsStatisticsRead["data"], ApiV1UserReferralsStatisticsRead["error"], TData, any>({
    ...apiV1UserReferralsStatisticsReadInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserReferralsStatisticsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}

export type ApiV1UserReferralsStatisticsReadQueryParams =
  | {
      /**
       * @type string | undefined
       */
      d_begin?: string
      /**
       * @type string | undefined
       */
      d_end?: string
    }
  | undefined
