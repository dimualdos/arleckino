import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserReferralsTransactionsListQueryResponse, ApiV1UserReferralsTransactionsListQueryParams } from "../../../models/ts/apiController/ApiV1UserReferralsTransactionsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserReferralsTransactionsListClient = typeof client<ApiV1UserReferralsTransactionsListQueryResponse, never, never>
type ApiV1UserReferralsTransactionsList = {
  data: ApiV1UserReferralsTransactionsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserReferralsTransactionsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserReferralsTransactionsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserReferralsTransactionsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserReferralsTransactionsListClient>>
  }
}
export const apiV1UserReferralsTransactionsListQueryKey = (params?: ApiV1UserReferralsTransactionsList["queryParams"]) =>
  [{ url: "/api/v1/user/referrals/transactions" }, ...(params ? [params] : [])] as const
export type ApiV1UserReferralsTransactionsListQueryKey = ReturnType<typeof apiV1UserReferralsTransactionsListQueryKey>
export function apiV1UserReferralsTransactionsListQueryOptions<TData = ApiV1UserReferralsTransactionsList["response"], TQueryData = ApiV1UserReferralsTransactionsList["response"]>(
  params?: ApiV1UserReferralsTransactionsList["queryParams"],
  options: ApiV1UserReferralsTransactionsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserReferralsTransactionsList["response"], ApiV1UserReferralsTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsTransactionsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserReferralsTransactionsList["data"], ApiV1UserReferralsTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/transactions`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список реферальных транзакций пользователя
 * @link /api/v1/user/referrals/transactions */
export function useApiV1UserReferralsTransactionsList<
  TData = ApiV1UserReferralsTransactionsList["response"],
  TQueryData = ApiV1UserReferralsTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsTransactionsListQueryKey,
>(
  params?: ApiV1UserReferralsTransactionsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserReferralsTransactionsList["response"], ApiV1UserReferralsTransactionsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserReferralsTransactionsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserReferralsTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsTransactionsListQueryKey(params)
  const query = useQuery<ApiV1UserReferralsTransactionsList["data"], ApiV1UserReferralsTransactionsList["error"], TData, any>({
    ...apiV1UserReferralsTransactionsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserReferralsTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserReferralsTransactionsListInfiniteQueryKey = (params?: ApiV1UserReferralsTransactionsList["queryParams"]) =>
  [{ url: "/api/v1/user/referrals/transactions" }, ...(params ? [params] : [])] as const
export type ApiV1UserReferralsTransactionsListInfiniteQueryKey = ReturnType<typeof apiV1UserReferralsTransactionsListInfiniteQueryKey>
export function apiV1UserReferralsTransactionsListInfiniteQueryOptions<TData = ApiV1UserReferralsTransactionsList["response"], TQueryData = ApiV1UserReferralsTransactionsList["response"]>(
  params?: ApiV1UserReferralsTransactionsList["queryParams"],
  options: ApiV1UserReferralsTransactionsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserReferralsTransactionsList["response"], ApiV1UserReferralsTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsTransactionsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserReferralsTransactionsList["data"], ApiV1UserReferralsTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/transactions`,
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
 * @summary Список реферальных транзакций пользователя
 * @link /api/v1/user/referrals/transactions */
export function useApiV1UserReferralsTransactionsListInfinite<
  TData = InfiniteData<ApiV1UserReferralsTransactionsList["response"]>,
  TQueryData = ApiV1UserReferralsTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsTransactionsListInfiniteQueryKey,
>(
  params?: ApiV1UserReferralsTransactionsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserReferralsTransactionsList["response"], ApiV1UserReferralsTransactionsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserReferralsTransactionsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserReferralsTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsTransactionsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserReferralsTransactionsList["data"], ApiV1UserReferralsTransactionsList["error"], TData, any>({
    ...apiV1UserReferralsTransactionsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserReferralsTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
