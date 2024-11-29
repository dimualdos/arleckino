import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryResponse,
  ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminStatisticsMoneyBalanceUsersList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminStatisticsMoneyBalanceUsersListClient = typeof client<ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryResponse, never, never>
type ApiV1UserAdminStatisticsMoneyBalanceUsersList = {
  data: ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminStatisticsMoneyBalanceUsersListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminStatisticsMoneyBalanceUsersListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminStatisticsMoneyBalanceUsersListClient>>
  }
}
export const apiV1UserAdminStatisticsMoneyBalanceUsersListQueryKey = (params?: ApiV1UserAdminStatisticsMoneyBalanceUsersList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/money/balance-users" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryKey = ReturnType<typeof apiV1UserAdminStatisticsMoneyBalanceUsersListQueryKey>
export function apiV1UserAdminStatisticsMoneyBalanceUsersListQueryOptions<
  TData = ApiV1UserAdminStatisticsMoneyBalanceUsersList["response"],
  TQueryData = ApiV1UserAdminStatisticsMoneyBalanceUsersList["response"],
>(
  params?: ApiV1UserAdminStatisticsMoneyBalanceUsersList["queryParams"],
  options: ApiV1UserAdminStatisticsMoneyBalanceUsersList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminStatisticsMoneyBalanceUsersList["response"], ApiV1UserAdminStatisticsMoneyBalanceUsersList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsMoneyBalanceUsersListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminStatisticsMoneyBalanceUsersList["data"], ApiV1UserAdminStatisticsMoneyBalanceUsersList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/money/balance-users`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Данные для показателя "Баланс всех пользователей" секции "ДЕНЬГИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/money/balance-users */
export function useApiV1UserAdminStatisticsMoneyBalanceUsersList<
  TData = ApiV1UserAdminStatisticsMoneyBalanceUsersList["response"],
  TQueryData = ApiV1UserAdminStatisticsMoneyBalanceUsersList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryKey,
>(
  params?: ApiV1UserAdminStatisticsMoneyBalanceUsersList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminStatisticsMoneyBalanceUsersList["response"], ApiV1UserAdminStatisticsMoneyBalanceUsersList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsMoneyBalanceUsersList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminStatisticsMoneyBalanceUsersList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsMoneyBalanceUsersListQueryKey(params)
  const query = useQuery<ApiV1UserAdminStatisticsMoneyBalanceUsersList["data"], ApiV1UserAdminStatisticsMoneyBalanceUsersList["error"], TData, any>({
    ...apiV1UserAdminStatisticsMoneyBalanceUsersListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminStatisticsMoneyBalanceUsersList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminStatisticsMoneyBalanceUsersListInfiniteQueryKey = (params?: ApiV1UserAdminStatisticsMoneyBalanceUsersList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/money/balance-users" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsMoneyBalanceUsersListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminStatisticsMoneyBalanceUsersListInfiniteQueryKey>
export function apiV1UserAdminStatisticsMoneyBalanceUsersListInfiniteQueryOptions<
  TData = ApiV1UserAdminStatisticsMoneyBalanceUsersList["response"],
  TQueryData = ApiV1UserAdminStatisticsMoneyBalanceUsersList["response"],
>(
  params?: ApiV1UserAdminStatisticsMoneyBalanceUsersList["queryParams"],
  options: ApiV1UserAdminStatisticsMoneyBalanceUsersList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsMoneyBalanceUsersList["response"], ApiV1UserAdminStatisticsMoneyBalanceUsersList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsMoneyBalanceUsersListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminStatisticsMoneyBalanceUsersList["data"], ApiV1UserAdminStatisticsMoneyBalanceUsersList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/money/balance-users`,
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
 * @summary Данные для показателя "Баланс всех пользователей" секции "ДЕНЬГИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/money/balance-users */
export function useApiV1UserAdminStatisticsMoneyBalanceUsersListInfinite<
  TData = InfiniteData<ApiV1UserAdminStatisticsMoneyBalanceUsersList["response"]>,
  TQueryData = ApiV1UserAdminStatisticsMoneyBalanceUsersList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsMoneyBalanceUsersListInfiniteQueryKey,
>(
  params?: ApiV1UserAdminStatisticsMoneyBalanceUsersList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminStatisticsMoneyBalanceUsersList["response"], ApiV1UserAdminStatisticsMoneyBalanceUsersList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsMoneyBalanceUsersList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsMoneyBalanceUsersList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsMoneyBalanceUsersListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserAdminStatisticsMoneyBalanceUsersList["data"], ApiV1UserAdminStatisticsMoneyBalanceUsersList["error"], TData, any>({
    ...apiV1UserAdminStatisticsMoneyBalanceUsersListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsMoneyBalanceUsersList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
