import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserReferralsListQueryResponse,
  ApiV1UserAdminUserReferralsListPathParams,
  ApiV1UserAdminUserReferralsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserReferralsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserReferralsListClient = typeof client<ApiV1UserAdminUserReferralsListQueryResponse, never, never>
type ApiV1UserAdminUserReferralsList = {
  data: ApiV1UserAdminUserReferralsListQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserReferralsListPathParams
  queryParams: ApiV1UserAdminUserReferralsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserReferralsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserReferralsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserReferralsListClient>>
  }
}
export const apiV1UserAdminUserReferralsListQueryKey = (id: ApiV1UserAdminUserReferralsListPathParams["id"], params?: ApiV1UserAdminUserReferralsList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/user/:id/referrals", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserReferralsListQueryKey = ReturnType<typeof apiV1UserAdminUserReferralsListQueryKey>
export function apiV1UserAdminUserReferralsListQueryOptions<TData = ApiV1UserAdminUserReferralsList["response"], TQueryData = ApiV1UserAdminUserReferralsList["response"]>(
  id: ApiV1UserAdminUserReferralsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsList["queryParams"],
  options: ApiV1UserAdminUserReferralsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserReferralsList["response"], ApiV1UserAdminUserReferralsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserReferralsListQueryKey(id, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserReferralsList["data"], ApiV1UserAdminUserReferralsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/referrals`,
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
 * @link /api/v1/user/admin/user/:id/referrals */
export function useApiV1UserAdminUserReferralsList<
  TData = ApiV1UserAdminUserReferralsList["response"],
  TQueryData = ApiV1UserAdminUserReferralsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserReferralsListQueryKey,
>(
  id: ApiV1UserAdminUserReferralsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserReferralsList["response"], ApiV1UserAdminUserReferralsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserReferralsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserReferralsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserReferralsListQueryKey(id, params)
  const query = useQuery<ApiV1UserAdminUserReferralsList["data"], ApiV1UserAdminUserReferralsList["error"], TData, any>({
    ...apiV1UserAdminUserReferralsListQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserReferralsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserReferralsListInfiniteQueryKey = (id: ApiV1UserAdminUserReferralsListPathParams["id"], params?: ApiV1UserAdminUserReferralsList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/user/:id/referrals", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserReferralsListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserReferralsListInfiniteQueryKey>
export function apiV1UserAdminUserReferralsListInfiniteQueryOptions<TData = ApiV1UserAdminUserReferralsList["response"], TQueryData = ApiV1UserAdminUserReferralsList["response"]>(
  id: ApiV1UserAdminUserReferralsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsList["queryParams"],
  options: ApiV1UserAdminUserReferralsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserReferralsList["response"], ApiV1UserAdminUserReferralsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserReferralsListInfiniteQueryKey(id, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserReferralsList["data"], ApiV1UserAdminUserReferralsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/referrals`,
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
 * @link /api/v1/user/admin/user/:id/referrals */
export function useApiV1UserAdminUserReferralsListInfinite<
  TData = InfiniteData<ApiV1UserAdminUserReferralsList["response"]>,
  TQueryData = ApiV1UserAdminUserReferralsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserReferralsListInfiniteQueryKey,
>(
  id: ApiV1UserAdminUserReferralsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserReferralsList["response"], ApiV1UserAdminUserReferralsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserReferralsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserReferralsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserReferralsListInfiniteQueryKey(id, params)
  const query = useInfiniteQuery<ApiV1UserAdminUserReferralsList["data"], ApiV1UserAdminUserReferralsList["error"], TData, any>({
    ...apiV1UserAdminUserReferralsListInfiniteQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserReferralsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
