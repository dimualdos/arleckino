import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryResponse,
  ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminStatisticsMoneyPaymentTransactionsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminStatisticsMoneyPaymentTransactionsListClient = typeof client<ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryResponse, never, never>
type ApiV1UserAdminStatisticsMoneyPaymentTransactionsList = {
  data: ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminStatisticsMoneyPaymentTransactionsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminStatisticsMoneyPaymentTransactionsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminStatisticsMoneyPaymentTransactionsListClient>>
  }
}
export const apiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryKey = (params?: ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/money/payment-transactions" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryKey = ReturnType<typeof apiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryKey>
export function apiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryOptions<
  TData = ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["response"],
  TQueryData = ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["response"],
>(
  params?: ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["queryParams"],
  options: ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["response"], ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["data"], ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/money/payment-transactions`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Данные для показателя "Заработано за период" секции "ДЕНЬГИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/money/payment-transactions */
export function useApiV1UserAdminStatisticsMoneyPaymentTransactionsList<
  TData = ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["response"],
  TQueryData = ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryKey,
>(
  params?: ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["response"], ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryKey(params)
  const query = useQuery<ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["data"], ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["error"], TData, any>({
    ...apiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminStatisticsMoneyPaymentTransactionsListInfiniteQueryKey = (params?: ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/statistics/money/payment-transactions" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminStatisticsMoneyPaymentTransactionsListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminStatisticsMoneyPaymentTransactionsListInfiniteQueryKey>
export function apiV1UserAdminStatisticsMoneyPaymentTransactionsListInfiniteQueryOptions<
  TData = ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["response"],
  TQueryData = ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["response"],
>(
  params?: ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["queryParams"],
  options: ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["client"]["parameters"] = {},
): WithRequired<
  UseInfiniteQueryOptions<ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["response"], ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["error"], TData, TQueryData>,
  "queryKey"
> {
  const queryKey = apiV1UserAdminStatisticsMoneyPaymentTransactionsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["data"], ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/statistics/money/payment-transactions`,
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
 * @summary Данные для показателя "Заработано за период" секции "ДЕНЬГИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/money/payment-transactions */
export function useApiV1UserAdminStatisticsMoneyPaymentTransactionsListInfinite<
  TData = InfiniteData<ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["response"]>,
  TQueryData = ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminStatisticsMoneyPaymentTransactionsListInfiniteQueryKey,
>(
  params?: ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["queryParams"],
  options: {
    query?: Partial<
      UseInfiniteQueryOptions<ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["response"], ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["error"], TData, TQueryData, TQueryKey>
    >
    client?: ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminStatisticsMoneyPaymentTransactionsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["data"], ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["error"], TData, any>({
    ...apiV1UserAdminStatisticsMoneyPaymentTransactionsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminStatisticsMoneyPaymentTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
