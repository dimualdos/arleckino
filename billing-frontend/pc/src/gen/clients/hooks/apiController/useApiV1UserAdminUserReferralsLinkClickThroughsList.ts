import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserReferralsLinkClickThroughsListQueryResponse,
  ApiV1UserAdminUserReferralsLinkClickThroughsListPathParams,
  ApiV1UserAdminUserReferralsLinkClickThroughsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserReferralsLinkClickThroughsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserReferralsLinkClickThroughsListClient = typeof client<ApiV1UserAdminUserReferralsLinkClickThroughsListQueryResponse, never, never>
type ApiV1UserAdminUserReferralsLinkClickThroughsList = {
  data: ApiV1UserAdminUserReferralsLinkClickThroughsListQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserReferralsLinkClickThroughsListPathParams
  queryParams: ApiV1UserAdminUserReferralsLinkClickThroughsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserReferralsLinkClickThroughsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserReferralsLinkClickThroughsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserReferralsLinkClickThroughsListClient>>
  }
}
export const apiV1UserAdminUserReferralsLinkClickThroughsListQueryKey = (
  id: ApiV1UserAdminUserReferralsLinkClickThroughsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsLinkClickThroughsList["queryParams"],
) => [{ url: "/api/v1/user/admin/user/:id/referrals/link-click-throughs", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserReferralsLinkClickThroughsListQueryKey = ReturnType<typeof apiV1UserAdminUserReferralsLinkClickThroughsListQueryKey>
export function apiV1UserAdminUserReferralsLinkClickThroughsListQueryOptions<
  TData = ApiV1UserAdminUserReferralsLinkClickThroughsList["response"],
  TQueryData = ApiV1UserAdminUserReferralsLinkClickThroughsList["response"],
>(
  id: ApiV1UserAdminUserReferralsLinkClickThroughsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsLinkClickThroughsList["queryParams"],
  options: ApiV1UserAdminUserReferralsLinkClickThroughsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserReferralsLinkClickThroughsList["response"], ApiV1UserAdminUserReferralsLinkClickThroughsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserReferralsLinkClickThroughsListQueryKey(id, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserReferralsLinkClickThroughsList["data"], ApiV1UserAdminUserReferralsLinkClickThroughsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/referrals/link-click-throughs`,
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
 * @link /api/v1/user/admin/user/:id/referrals/link-click-throughs */
export function useApiV1UserAdminUserReferralsLinkClickThroughsList<
  TData = ApiV1UserAdminUserReferralsLinkClickThroughsList["response"],
  TQueryData = ApiV1UserAdminUserReferralsLinkClickThroughsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserReferralsLinkClickThroughsListQueryKey,
>(
  id: ApiV1UserAdminUserReferralsLinkClickThroughsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsLinkClickThroughsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserReferralsLinkClickThroughsList["response"], ApiV1UserAdminUserReferralsLinkClickThroughsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserReferralsLinkClickThroughsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserReferralsLinkClickThroughsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserReferralsLinkClickThroughsListQueryKey(id, params)
  const query = useQuery<ApiV1UserAdminUserReferralsLinkClickThroughsList["data"], ApiV1UserAdminUserReferralsLinkClickThroughsList["error"], TData, any>({
    ...apiV1UserAdminUserReferralsLinkClickThroughsListQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserReferralsLinkClickThroughsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserReferralsLinkClickThroughsListInfiniteQueryKey = (
  id: ApiV1UserAdminUserReferralsLinkClickThroughsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsLinkClickThroughsList["queryParams"],
) => [{ url: "/api/v1/user/admin/user/:id/referrals/link-click-throughs", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserReferralsLinkClickThroughsListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserReferralsLinkClickThroughsListInfiniteQueryKey>
export function apiV1UserAdminUserReferralsLinkClickThroughsListInfiniteQueryOptions<
  TData = ApiV1UserAdminUserReferralsLinkClickThroughsList["response"],
  TQueryData = ApiV1UserAdminUserReferralsLinkClickThroughsList["response"],
>(
  id: ApiV1UserAdminUserReferralsLinkClickThroughsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsLinkClickThroughsList["queryParams"],
  options: ApiV1UserAdminUserReferralsLinkClickThroughsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserReferralsLinkClickThroughsList["response"], ApiV1UserAdminUserReferralsLinkClickThroughsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserReferralsLinkClickThroughsListInfiniteQueryKey(id, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserReferralsLinkClickThroughsList["data"], ApiV1UserAdminUserReferralsLinkClickThroughsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/referrals/link-click-throughs`,
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
 * @link /api/v1/user/admin/user/:id/referrals/link-click-throughs */
export function useApiV1UserAdminUserReferralsLinkClickThroughsListInfinite<
  TData = InfiniteData<ApiV1UserAdminUserReferralsLinkClickThroughsList["response"]>,
  TQueryData = ApiV1UserAdminUserReferralsLinkClickThroughsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserReferralsLinkClickThroughsListInfiniteQueryKey,
>(
  id: ApiV1UserAdminUserReferralsLinkClickThroughsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsLinkClickThroughsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserReferralsLinkClickThroughsList["response"], ApiV1UserAdminUserReferralsLinkClickThroughsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserReferralsLinkClickThroughsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserReferralsLinkClickThroughsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserReferralsLinkClickThroughsListInfiniteQueryKey(id, params)
  const query = useInfiniteQuery<ApiV1UserAdminUserReferralsLinkClickThroughsList["data"], ApiV1UserAdminUserReferralsLinkClickThroughsList["error"], TData, any>({
    ...apiV1UserAdminUserReferralsLinkClickThroughsListInfiniteQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserReferralsLinkClickThroughsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
