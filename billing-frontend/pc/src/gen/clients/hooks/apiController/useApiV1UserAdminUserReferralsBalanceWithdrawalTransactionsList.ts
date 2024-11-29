import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryResponse,
  ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParams,
  ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListClient = typeof client<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryResponse, never, never>
type ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList = {
  data: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParams
  queryParams: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListClient>>
  }
}
export const apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryKey = (
  id: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["queryParams"],
) => [{ url: "/api/v1/user/admin/user/:id/referrals/balance/withdrawal-transactions", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryKey = ReturnType<typeof apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryKey>
export function apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryOptions<
  TData = ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["response"],
  TQueryData = ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["response"],
>(
  id: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["queryParams"],
  options: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["client"]["parameters"] = {},
): WithRequired<
  UseBaseQueryOptions<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["response"], ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["error"], TData, TQueryData>,
  "queryKey"
> {
  const queryKey = apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryKey(id, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["data"], ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/referrals/balance/withdrawal-transactions`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список транзакций вывода средств пользователя
 * @link /api/v1/user/admin/user/:id/referrals/balance/withdrawal-transactions */
export function useApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList<
  TData = ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["response"],
  TQueryData = ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryKey,
>(
  id: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["queryParams"],
  options: {
    query?: Partial<
      UseBaseQueryOptions<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["response"], ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["error"], TData, TQueryData, TQueryKey>
    >
    client?: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryKey(id, params)
  const query = useQuery<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["data"], ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["error"], TData, any>({
    ...apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListInfiniteQueryKey = (
  id: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["queryParams"],
) => [{ url: "/api/v1/user/admin/user/:id/referrals/balance/withdrawal-transactions", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListInfiniteQueryKey>
export function apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListInfiniteQueryOptions<
  TData = ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["response"],
  TQueryData = ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["response"],
>(
  id: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["queryParams"],
  options: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["client"]["parameters"] = {},
): WithRequired<
  UseInfiniteQueryOptions<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["response"], ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["error"], TData, TQueryData>,
  "queryKey"
> {
  const queryKey = apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListInfiniteQueryKey(id, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["data"], ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/referrals/balance/withdrawal-transactions`,
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
 * @summary Список транзакций вывода средств пользователя
 * @link /api/v1/user/admin/user/:id/referrals/balance/withdrawal-transactions */
export function useApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListInfinite<
  TData = InfiniteData<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["response"]>,
  TQueryData = ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListInfiniteQueryKey,
>(
  id: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["queryParams"],
  options: {
    query?: Partial<
      UseInfiniteQueryOptions<
        ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["response"],
        ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >
    client?: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListInfiniteQueryKey(id, params)
  const query = useInfiniteQuery<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["data"], ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["error"], TData, any>({
    ...apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListInfiniteQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
