import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserAdminUserReferralsBalanceReadQueryResponse, ApiV1UserAdminUserReferralsBalanceReadPathParams } from "../../../models/ts/apiController/ApiV1UserAdminUserReferralsBalanceRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserReferralsBalanceReadClient = typeof client<ApiV1UserAdminUserReferralsBalanceReadQueryResponse, never, never>
type ApiV1UserAdminUserReferralsBalanceRead = {
  data: ApiV1UserAdminUserReferralsBalanceReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserReferralsBalanceReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserReferralsBalanceReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserReferralsBalanceReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserReferralsBalanceReadClient>>
  }
}
export const apiV1UserAdminUserReferralsBalanceReadQueryKey = (id: ApiV1UserAdminUserReferralsBalanceReadPathParams["id"]) =>
  [{ url: "/api/v1/user/admin/user/:id/referrals/balance", params: { id: id } }] as const
export type ApiV1UserAdminUserReferralsBalanceReadQueryKey = ReturnType<typeof apiV1UserAdminUserReferralsBalanceReadQueryKey>
export function apiV1UserAdminUserReferralsBalanceReadQueryOptions<TData = ApiV1UserAdminUserReferralsBalanceRead["response"], TQueryData = ApiV1UserAdminUserReferralsBalanceRead["response"]>(
  id: ApiV1UserAdminUserReferralsBalanceReadPathParams["id"],
  options: ApiV1UserAdminUserReferralsBalanceRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserReferralsBalanceRead["response"], ApiV1UserAdminUserReferralsBalanceRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserReferralsBalanceReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserReferralsBalanceRead["data"], ApiV1UserAdminUserReferralsBalanceRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/referrals/balance`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Баланс внутреннего счета пользователя
 * @link /api/v1/user/admin/user/:id/referrals/balance */
export function useApiV1UserAdminUserReferralsBalanceRead<
  TData = ApiV1UserAdminUserReferralsBalanceRead["response"],
  TQueryData = ApiV1UserAdminUserReferralsBalanceRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserReferralsBalanceReadQueryKey,
>(
  id: ApiV1UserAdminUserReferralsBalanceReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserReferralsBalanceRead["response"], ApiV1UserAdminUserReferralsBalanceRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserReferralsBalanceRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserReferralsBalanceRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserReferralsBalanceReadQueryKey(id)
  const query = useQuery<ApiV1UserAdminUserReferralsBalanceRead["data"], ApiV1UserAdminUserReferralsBalanceRead["error"], TData, any>({
    ...apiV1UserAdminUserReferralsBalanceReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserReferralsBalanceRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserReferralsBalanceReadInfiniteQueryKey = (id: ApiV1UserAdminUserReferralsBalanceReadPathParams["id"]) =>
  [{ url: "/api/v1/user/admin/user/:id/referrals/balance", params: { id: id } }] as const
export type ApiV1UserAdminUserReferralsBalanceReadInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserReferralsBalanceReadInfiniteQueryKey>
export function apiV1UserAdminUserReferralsBalanceReadInfiniteQueryOptions<TData = ApiV1UserAdminUserReferralsBalanceRead["response"], TQueryData = ApiV1UserAdminUserReferralsBalanceRead["response"]>(
  id: ApiV1UserAdminUserReferralsBalanceReadPathParams["id"],
  options: ApiV1UserAdminUserReferralsBalanceRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserReferralsBalanceRead["response"], ApiV1UserAdminUserReferralsBalanceRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserReferralsBalanceReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserReferralsBalanceRead["data"], ApiV1UserAdminUserReferralsBalanceRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/referrals/balance`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Баланс внутреннего счета пользователя
 * @link /api/v1/user/admin/user/:id/referrals/balance */
export function useApiV1UserAdminUserReferralsBalanceReadInfinite<
  TData = InfiniteData<ApiV1UserAdminUserReferralsBalanceRead["response"]>,
  TQueryData = ApiV1UserAdminUserReferralsBalanceRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserReferralsBalanceReadInfiniteQueryKey,
>(
  id: ApiV1UserAdminUserReferralsBalanceReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserReferralsBalanceRead["response"], ApiV1UserAdminUserReferralsBalanceRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserReferralsBalanceRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserReferralsBalanceRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserReferralsBalanceReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserAdminUserReferralsBalanceRead["data"], ApiV1UserAdminUserReferralsBalanceRead["error"], TData, any>({
    ...apiV1UserAdminUserReferralsBalanceReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserReferralsBalanceRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
