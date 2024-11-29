import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminWithdrawalTransactionsListQueryResponse,
  ApiV1UserAdminWithdrawalTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalTransactionsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminWithdrawalTransactionsListClient = typeof client<ApiV1UserAdminWithdrawalTransactionsListQueryResponse, never, never>
type ApiV1UserAdminWithdrawalTransactionsList = {
  data: ApiV1UserAdminWithdrawalTransactionsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserAdminWithdrawalTransactionsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminWithdrawalTransactionsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminWithdrawalTransactionsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminWithdrawalTransactionsListClient>>
  }
}
export const apiV1UserAdminWithdrawalTransactionsListQueryKey = (params?: ApiV1UserAdminWithdrawalTransactionsList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/withdrawal/transactions" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminWithdrawalTransactionsListQueryKey = ReturnType<typeof apiV1UserAdminWithdrawalTransactionsListQueryKey>
export function apiV1UserAdminWithdrawalTransactionsListQueryOptions<TData = ApiV1UserAdminWithdrawalTransactionsList["response"], TQueryData = ApiV1UserAdminWithdrawalTransactionsList["response"]>(
  params?: ApiV1UserAdminWithdrawalTransactionsList["queryParams"],
  options: ApiV1UserAdminWithdrawalTransactionsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminWithdrawalTransactionsList["response"], ApiV1UserAdminWithdrawalTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminWithdrawalTransactionsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminWithdrawalTransactionsList["data"], ApiV1UserAdminWithdrawalTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/withdrawal/transactions`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список транзакций вывода средств пользователей
 * @link /api/v1/user/admin/withdrawal/transactions */
export function useApiV1UserAdminWithdrawalTransactionsList<
  TData = ApiV1UserAdminWithdrawalTransactionsList["response"],
  TQueryData = ApiV1UserAdminWithdrawalTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminWithdrawalTransactionsListQueryKey,
>(
  params?: ApiV1UserAdminWithdrawalTransactionsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminWithdrawalTransactionsList["response"], ApiV1UserAdminWithdrawalTransactionsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminWithdrawalTransactionsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminWithdrawalTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminWithdrawalTransactionsListQueryKey(params)
  const query = useQuery<ApiV1UserAdminWithdrawalTransactionsList["data"], ApiV1UserAdminWithdrawalTransactionsList["error"], TData, any>({
    ...apiV1UserAdminWithdrawalTransactionsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminWithdrawalTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminWithdrawalTransactionsListInfiniteQueryKey = (params?: ApiV1UserAdminWithdrawalTransactionsList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/withdrawal/transactions" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminWithdrawalTransactionsListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminWithdrawalTransactionsListInfiniteQueryKey>
export function apiV1UserAdminWithdrawalTransactionsListInfiniteQueryOptions<
  TData = ApiV1UserAdminWithdrawalTransactionsList["response"],
  TQueryData = ApiV1UserAdminWithdrawalTransactionsList["response"],
>(
  params?: ApiV1UserAdminWithdrawalTransactionsList["queryParams"],
  options: ApiV1UserAdminWithdrawalTransactionsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminWithdrawalTransactionsList["response"], ApiV1UserAdminWithdrawalTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminWithdrawalTransactionsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminWithdrawalTransactionsList["data"], ApiV1UserAdminWithdrawalTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/withdrawal/transactions`,
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
 * @summary Список транзакций вывода средств пользователей
 * @link /api/v1/user/admin/withdrawal/transactions */
export function useApiV1UserAdminWithdrawalTransactionsListInfinite<
  TData = InfiniteData<ApiV1UserAdminWithdrawalTransactionsList["response"]>,
  TQueryData = ApiV1UserAdminWithdrawalTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminWithdrawalTransactionsListInfiniteQueryKey,
>(
  params?: ApiV1UserAdminWithdrawalTransactionsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminWithdrawalTransactionsList["response"], ApiV1UserAdminWithdrawalTransactionsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminWithdrawalTransactionsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminWithdrawalTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminWithdrawalTransactionsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserAdminWithdrawalTransactionsList["data"], ApiV1UserAdminWithdrawalTransactionsList["error"], TData, any>({
    ...apiV1UserAdminWithdrawalTransactionsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminWithdrawalTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
