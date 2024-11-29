import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserReferralsListQueryResponse, ApiV1UserReferralsListQueryParams } from "../../../models/ts/apiController/ApiV1UserReferralsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserReferralsListClient = typeof client<ApiV1UserReferralsListQueryResponse, never, never>
type ApiV1UserReferralsList = {
  data: ApiV1UserReferralsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserReferralsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserReferralsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserReferralsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserReferralsListClient>>
  }
}
export const apiV1UserReferralsListQueryKey = (params?: ApiV1UserReferralsList["queryParams"]) => [{ url: "/api/v1/user/referrals/" }, ...(params ? [params] : [])] as const
export type ApiV1UserReferralsListQueryKey = ReturnType<typeof apiV1UserReferralsListQueryKey>
export function apiV1UserReferralsListQueryOptions<TData = ApiV1UserReferralsList["response"], TQueryData = ApiV1UserReferralsList["response"]>(
  params?: ApiV1UserReferralsList["queryParams"],
  options: ApiV1UserReferralsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserReferralsList["response"], ApiV1UserReferralsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserReferralsList["data"], ApiV1UserReferralsList["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список рефералов пользователя
 * @link /api/v1/user/referrals/ */
export function useApiV1UserReferralsList<TData = ApiV1UserReferralsList["response"], TQueryData = ApiV1UserReferralsList["response"], TQueryKey extends QueryKey = ApiV1UserReferralsListQueryKey>(
  params?: ApiV1UserReferralsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserReferralsList["response"], ApiV1UserReferralsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserReferralsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserReferralsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsListQueryKey(params)
  const query = useQuery<ApiV1UserReferralsList["data"], ApiV1UserReferralsList["error"], TData, any>({
    ...apiV1UserReferralsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserReferralsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserReferralsListInfiniteQueryKey = (params?: ApiV1UserReferralsList["queryParams"]) => [{ url: "/api/v1/user/referrals/" }, ...(params ? [params] : [])] as const
export type ApiV1UserReferralsListInfiniteQueryKey = ReturnType<typeof apiV1UserReferralsListInfiniteQueryKey>
export function apiV1UserReferralsListInfiniteQueryOptions<TData = ApiV1UserReferralsList["response"], TQueryData = ApiV1UserReferralsList["response"]>(
  params?: ApiV1UserReferralsList["queryParams"],
  options: ApiV1UserReferralsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserReferralsList["response"], ApiV1UserReferralsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserReferralsList["data"], ApiV1UserReferralsList["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/`,
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
 * @summary Список рефералов пользователя
 * @link /api/v1/user/referrals/ */
export function useApiV1UserReferralsListInfinite<
  TData = InfiniteData<ApiV1UserReferralsList["response"]>,
  TQueryData = ApiV1UserReferralsList["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsListInfiniteQueryKey,
>(
  params?: ApiV1UserReferralsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserReferralsList["response"], ApiV1UserReferralsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserReferralsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserReferralsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserReferralsList["data"], ApiV1UserReferralsList["error"], TData, any>({
    ...apiV1UserReferralsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserReferralsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
