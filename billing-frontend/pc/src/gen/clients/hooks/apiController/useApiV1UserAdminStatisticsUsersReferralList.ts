import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminStatisticsUsersReferralListQueryResponse,
  ApiV1UserAdminStatisticsUsersReferralListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminStatisticsUsersReferralList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminStatisticsUsersReferralListClient = typeof client<ApiV1UserAdminStatisticsUsersReferralListQueryResponse, never, never>
type ApiV1UserAdminStatisticsUsersReferralList = {
  data: ApiV1UserAdminStatisticsUsersReferralListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserAdminStatisticsUsersReferralListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminStatisticsUsersReferralListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminStatisticsUsersReferralListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminStatisticsUsersReferralListClient>>
  }
}
export const apiV1UserAdminStatisticsUsersReferralListQueryKey = (params?: ApiV1UserAdminStatisticsUsersReferralList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/users/referral" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsUsersReferralListQueryKey = ReturnType<typeof apiV1UserAdminStatisticsUsersReferralListQueryKey>
export function apiV1UserAdminStatisticsUsersReferralListQueryOptions<
  TData = ApiV1UserAdminStatisticsUsersReferralList["response"],
  TQueryData = ApiV1UserAdminStatisticsUsersReferralList["response"],
>(
  params?: ApiV1UserAdminStatisticsUsersReferralList["queryParams"],
  options: ApiV1UserAdminStatisticsUsersReferralList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminStatisticsUsersReferralList["response"], ApiV1UserAdminStatisticsUsersReferralList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsUsersReferralListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminStatisticsUsersReferralList["data"], ApiV1UserAdminStatisticsUsersReferralList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/users/referral`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Данные для показателя "По реф. ссылкам" секции "ПОЛЬЗОВАТЕЛИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/users/referral */
export function useApiV1UserAdminStatisticsUsersReferralList<
  TData = ApiV1UserAdminStatisticsUsersReferralList["response"],
  TQueryData = ApiV1UserAdminStatisticsUsersReferralList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsUsersReferralListQueryKey,
>(
  params?: ApiV1UserAdminStatisticsUsersReferralList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminStatisticsUsersReferralList["response"], ApiV1UserAdminStatisticsUsersReferralList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsUsersReferralList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminStatisticsUsersReferralList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsUsersReferralListQueryKey(params)
  const query = useQuery<ApiV1UserAdminStatisticsUsersReferralList["data"], ApiV1UserAdminStatisticsUsersReferralList["error"], TData, any>({
    ...apiV1UserAdminStatisticsUsersReferralListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminStatisticsUsersReferralList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminStatisticsUsersReferralListInfiniteQueryKey = (params?: ApiV1UserAdminStatisticsUsersReferralList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/users/referral" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsUsersReferralListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminStatisticsUsersReferralListInfiniteQueryKey>
export function apiV1UserAdminStatisticsUsersReferralListInfiniteQueryOptions<
  TData = ApiV1UserAdminStatisticsUsersReferralList["response"],
  TQueryData = ApiV1UserAdminStatisticsUsersReferralList["response"],
>(
  params?: ApiV1UserAdminStatisticsUsersReferralList["queryParams"],
  options: ApiV1UserAdminStatisticsUsersReferralList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsUsersReferralList["response"], ApiV1UserAdminStatisticsUsersReferralList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsUsersReferralListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminStatisticsUsersReferralList["data"], ApiV1UserAdminStatisticsUsersReferralList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/users/referral`,
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
 * @summary Данные для показателя "По реф. ссылкам" секции "ПОЛЬЗОВАТЕЛИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/users/referral */
export function useApiV1UserAdminStatisticsUsersReferralListInfinite<
  TData = InfiniteData<ApiV1UserAdminStatisticsUsersReferralList["response"]>,
  TQueryData = ApiV1UserAdminStatisticsUsersReferralList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsUsersReferralListInfiniteQueryKey,
>(
  params?: ApiV1UserAdminStatisticsUsersReferralList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsUsersReferralList["response"], ApiV1UserAdminStatisticsUsersReferralList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsUsersReferralList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsUsersReferralList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsUsersReferralListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserAdminStatisticsUsersReferralList["data"], ApiV1UserAdminStatisticsUsersReferralList["error"], TData, any>({
    ...apiV1UserAdminStatisticsUsersReferralListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsUsersReferralList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
