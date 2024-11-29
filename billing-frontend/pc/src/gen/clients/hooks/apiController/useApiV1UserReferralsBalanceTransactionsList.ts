import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserReferralsBalanceTransactionsListQueryResponse,
  ApiV1UserReferralsBalanceTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserReferralsBalanceTransactionsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserReferralsBalanceTransactionsListClient = typeof client<ApiV1UserReferralsBalanceTransactionsListQueryResponse, never, never>
type ApiV1UserReferralsBalanceTransactionsList = {
  data: ApiV1UserReferralsBalanceTransactionsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserReferralsBalanceTransactionsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserReferralsBalanceTransactionsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserReferralsBalanceTransactionsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserReferralsBalanceTransactionsListClient>>
  }
}
export const apiV1UserReferralsBalanceTransactionsListQueryKey = (params?: ApiV1UserReferralsBalanceTransactionsList["queryParams"]) =>
  [{ url: "/api/v1/user/referrals/balance/transactions" }, ...(params ? [params] : [])] as const
export type ApiV1UserReferralsBalanceTransactionsListQueryKey = ReturnType<typeof apiV1UserReferralsBalanceTransactionsListQueryKey>
export function apiV1UserReferralsBalanceTransactionsListQueryOptions<
  TData = ApiV1UserReferralsBalanceTransactionsList["response"],
  TQueryData = ApiV1UserReferralsBalanceTransactionsList["response"],
>(
  params?: ApiV1UserReferralsBalanceTransactionsList["queryParams"],
  options: ApiV1UserReferralsBalanceTransactionsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserReferralsBalanceTransactionsList["response"], ApiV1UserReferralsBalanceTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsBalanceTransactionsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserReferralsBalanceTransactionsList["data"], ApiV1UserReferralsBalanceTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/balance/transactions`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список транзакций вывода средств, перевода на текущий баланс
 * @link /api/v1/user/referrals/balance/transactions */
export function useApiV1UserReferralsBalanceTransactionsList<
  TData = ApiV1UserReferralsBalanceTransactionsList["response"],
  TQueryData = ApiV1UserReferralsBalanceTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsBalanceTransactionsListQueryKey,
>(
  params?: ApiV1UserReferralsBalanceTransactionsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserReferralsBalanceTransactionsList["response"], ApiV1UserReferralsBalanceTransactionsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserReferralsBalanceTransactionsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserReferralsBalanceTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsBalanceTransactionsListQueryKey(params)
  const query = useQuery<ApiV1UserReferralsBalanceTransactionsList["data"], ApiV1UserReferralsBalanceTransactionsList["error"], TData, any>({
    ...apiV1UserReferralsBalanceTransactionsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserReferralsBalanceTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserReferralsBalanceTransactionsListInfiniteQueryKey = (params?: ApiV1UserReferralsBalanceTransactionsList["queryParams"]) =>
  [{ url: "/api/v1/user/referrals/balance/transactions" }, ...(params ? [params] : [])] as const
export type ApiV1UserReferralsBalanceTransactionsListInfiniteQueryKey = ReturnType<typeof apiV1UserReferralsBalanceTransactionsListInfiniteQueryKey>
export function apiV1UserReferralsBalanceTransactionsListInfiniteQueryOptions<
  TData = ApiV1UserReferralsBalanceTransactionsList["response"],
  TQueryData = ApiV1UserReferralsBalanceTransactionsList["response"],
>(
  params?: ApiV1UserReferralsBalanceTransactionsList["queryParams"],
  options: ApiV1UserReferralsBalanceTransactionsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserReferralsBalanceTransactionsList["response"], ApiV1UserReferralsBalanceTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsBalanceTransactionsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserReferralsBalanceTransactionsList["data"], ApiV1UserReferralsBalanceTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/balance/transactions`,
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
 * @summary Список транзакций вывода средств, перевода на текущий баланс
 * @link /api/v1/user/referrals/balance/transactions */
export function useApiV1UserReferralsBalanceTransactionsListInfinite<
  TData = InfiniteData<ApiV1UserReferralsBalanceTransactionsList["response"]>,
  TQueryData = ApiV1UserReferralsBalanceTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsBalanceTransactionsListInfiniteQueryKey,
>(
  params?: ApiV1UserReferralsBalanceTransactionsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserReferralsBalanceTransactionsList["response"], ApiV1UserReferralsBalanceTransactionsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserReferralsBalanceTransactionsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserReferralsBalanceTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsBalanceTransactionsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserReferralsBalanceTransactionsList["data"], ApiV1UserReferralsBalanceTransactionsList["error"], TData, any>({
    ...apiV1UserReferralsBalanceTransactionsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserReferralsBalanceTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
