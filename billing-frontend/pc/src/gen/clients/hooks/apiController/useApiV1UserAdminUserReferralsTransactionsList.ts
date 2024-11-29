import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserReferralsTransactionsListQueryResponse,
  ApiV1UserAdminUserReferralsTransactionsListPathParams,
  ApiV1UserAdminUserReferralsTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserReferralsTransactionsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserReferralsTransactionsListClient = typeof client<ApiV1UserAdminUserReferralsTransactionsListQueryResponse, never, never>
type ApiV1UserAdminUserReferralsTransactionsList = {
  data: ApiV1UserAdminUserReferralsTransactionsListQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserReferralsTransactionsListPathParams
  queryParams: ApiV1UserAdminUserReferralsTransactionsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserReferralsTransactionsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserReferralsTransactionsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserReferralsTransactionsListClient>>
  }
}
export const apiV1UserAdminUserReferralsTransactionsListQueryKey = (
  id: ApiV1UserAdminUserReferralsTransactionsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsTransactionsList["queryParams"],
) => [{ url: "/api/v1/user/admin/user/:id/referrals/transactions", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserReferralsTransactionsListQueryKey = ReturnType<typeof apiV1UserAdminUserReferralsTransactionsListQueryKey>
export function apiV1UserAdminUserReferralsTransactionsListQueryOptions<
  TData = ApiV1UserAdminUserReferralsTransactionsList["response"],
  TQueryData = ApiV1UserAdminUserReferralsTransactionsList["response"],
>(
  id: ApiV1UserAdminUserReferralsTransactionsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsTransactionsList["queryParams"],
  options: ApiV1UserAdminUserReferralsTransactionsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserReferralsTransactionsList["response"], ApiV1UserAdminUserReferralsTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserReferralsTransactionsListQueryKey(id, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserReferralsTransactionsList["data"], ApiV1UserAdminUserReferralsTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/referrals/transactions`,
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
 * @link /api/v1/user/admin/user/:id/referrals/transactions */
export function useApiV1UserAdminUserReferralsTransactionsList<
  TData = ApiV1UserAdminUserReferralsTransactionsList["response"],
  TQueryData = ApiV1UserAdminUserReferralsTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserReferralsTransactionsListQueryKey,
>(
  id: ApiV1UserAdminUserReferralsTransactionsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsTransactionsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserReferralsTransactionsList["response"], ApiV1UserAdminUserReferralsTransactionsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserReferralsTransactionsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserReferralsTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserReferralsTransactionsListQueryKey(id, params)
  const query = useQuery<ApiV1UserAdminUserReferralsTransactionsList["data"], ApiV1UserAdminUserReferralsTransactionsList["error"], TData, any>({
    ...apiV1UserAdminUserReferralsTransactionsListQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserReferralsTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserReferralsTransactionsListInfiniteQueryKey = (
  id: ApiV1UserAdminUserReferralsTransactionsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsTransactionsList["queryParams"],
) => [{ url: "/api/v1/user/admin/user/:id/referrals/transactions", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserReferralsTransactionsListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserReferralsTransactionsListInfiniteQueryKey>
export function apiV1UserAdminUserReferralsTransactionsListInfiniteQueryOptions<
  TData = ApiV1UserAdminUserReferralsTransactionsList["response"],
  TQueryData = ApiV1UserAdminUserReferralsTransactionsList["response"],
>(
  id: ApiV1UserAdminUserReferralsTransactionsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsTransactionsList["queryParams"],
  options: ApiV1UserAdminUserReferralsTransactionsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserReferralsTransactionsList["response"], ApiV1UserAdminUserReferralsTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserReferralsTransactionsListInfiniteQueryKey(id, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserReferralsTransactionsList["data"], ApiV1UserAdminUserReferralsTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/referrals/transactions`,
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
 * @link /api/v1/user/admin/user/:id/referrals/transactions */
export function useApiV1UserAdminUserReferralsTransactionsListInfinite<
  TData = InfiniteData<ApiV1UserAdminUserReferralsTransactionsList["response"]>,
  TQueryData = ApiV1UserAdminUserReferralsTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserReferralsTransactionsListInfiniteQueryKey,
>(
  id: ApiV1UserAdminUserReferralsTransactionsListPathParams["id"],
  params?: ApiV1UserAdminUserReferralsTransactionsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserReferralsTransactionsList["response"], ApiV1UserAdminUserReferralsTransactionsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserReferralsTransactionsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserReferralsTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserReferralsTransactionsListInfiniteQueryKey(id, params)
  const query = useInfiniteQuery<ApiV1UserAdminUserReferralsTransactionsList["data"], ApiV1UserAdminUserReferralsTransactionsList["error"], TData, any>({
    ...apiV1UserAdminUserReferralsTransactionsListInfiniteQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserReferralsTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
