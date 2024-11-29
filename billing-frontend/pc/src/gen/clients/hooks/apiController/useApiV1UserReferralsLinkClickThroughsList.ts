import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserReferralsLinkClickThroughsListQueryResponse, ApiV1UserReferralsLinkClickThroughsListQueryParams } from "../../../models/ts/apiController/ApiV1UserReferralsLinkClickThroughsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserReferralsLinkClickThroughsListClient = typeof client<ApiV1UserReferralsLinkClickThroughsListQueryResponse, never, never>
type ApiV1UserReferralsLinkClickThroughsList = {
  data: ApiV1UserReferralsLinkClickThroughsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserReferralsLinkClickThroughsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserReferralsLinkClickThroughsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserReferralsLinkClickThroughsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserReferralsLinkClickThroughsListClient>>
  }
}
export const apiV1UserReferralsLinkClickThroughsListQueryKey = (params?: ApiV1UserReferralsLinkClickThroughsList["queryParams"]) =>
  [{ url: "/api/v1/user/referrals/link-click-throughs" }, ...(params ? [params] : [])] as const
export type ApiV1UserReferralsLinkClickThroughsListQueryKey = ReturnType<typeof apiV1UserReferralsLinkClickThroughsListQueryKey>
export function apiV1UserReferralsLinkClickThroughsListQueryOptions<TData = ApiV1UserReferralsLinkClickThroughsList["response"], TQueryData = ApiV1UserReferralsLinkClickThroughsList["response"]>(
  params?: ApiV1UserReferralsLinkClickThroughsList["queryParams"],
  options: ApiV1UserReferralsLinkClickThroughsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserReferralsLinkClickThroughsList["response"], ApiV1UserReferralsLinkClickThroughsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsLinkClickThroughsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserReferralsLinkClickThroughsList["data"], ApiV1UserReferralsLinkClickThroughsList["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/link-click-throughs`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список переходов по реферальной ссылке пользователя
 * @link /api/v1/user/referrals/link-click-throughs */
export function useApiV1UserReferralsLinkClickThroughsList<
  TData = ApiV1UserReferralsLinkClickThroughsList["response"],
  TQueryData = ApiV1UserReferralsLinkClickThroughsList["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsLinkClickThroughsListQueryKey,
>(
  params?: ApiV1UserReferralsLinkClickThroughsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserReferralsLinkClickThroughsList["response"], ApiV1UserReferralsLinkClickThroughsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserReferralsLinkClickThroughsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserReferralsLinkClickThroughsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsLinkClickThroughsListQueryKey(params)
  const query = useQuery<ApiV1UserReferralsLinkClickThroughsList["data"], ApiV1UserReferralsLinkClickThroughsList["error"], TData, any>({
    ...apiV1UserReferralsLinkClickThroughsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserReferralsLinkClickThroughsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserReferralsLinkClickThroughsListInfiniteQueryKey = (params?: ApiV1UserReferralsLinkClickThroughsList["queryParams"]) =>
  [{ url: "/api/v1/user/referrals/link-click-throughs" }, ...(params ? [params] : [])] as const
export type ApiV1UserReferralsLinkClickThroughsListInfiniteQueryKey = ReturnType<typeof apiV1UserReferralsLinkClickThroughsListInfiniteQueryKey>
export function apiV1UserReferralsLinkClickThroughsListInfiniteQueryOptions<
  TData = ApiV1UserReferralsLinkClickThroughsList["response"],
  TQueryData = ApiV1UserReferralsLinkClickThroughsList["response"],
>(
  params?: ApiV1UserReferralsLinkClickThroughsList["queryParams"],
  options: ApiV1UserReferralsLinkClickThroughsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserReferralsLinkClickThroughsList["response"], ApiV1UserReferralsLinkClickThroughsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsLinkClickThroughsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserReferralsLinkClickThroughsList["data"], ApiV1UserReferralsLinkClickThroughsList["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/link-click-throughs`,
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
 * @summary Список переходов по реферальной ссылке пользователя
 * @link /api/v1/user/referrals/link-click-throughs */
export function useApiV1UserReferralsLinkClickThroughsListInfinite<
  TData = InfiniteData<ApiV1UserReferralsLinkClickThroughsList["response"]>,
  TQueryData = ApiV1UserReferralsLinkClickThroughsList["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsLinkClickThroughsListInfiniteQueryKey,
>(
  params?: ApiV1UserReferralsLinkClickThroughsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserReferralsLinkClickThroughsList["response"], ApiV1UserReferralsLinkClickThroughsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserReferralsLinkClickThroughsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserReferralsLinkClickThroughsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsLinkClickThroughsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserReferralsLinkClickThroughsList["data"], ApiV1UserReferralsLinkClickThroughsList["error"], TData, any>({
    ...apiV1UserReferralsLinkClickThroughsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserReferralsLinkClickThroughsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
