import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1BillingAdminPaymentTransactionListListQueryResponse,
  ApiV1BillingAdminPaymentTransactionListListQueryParams,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentTransactionListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentTransactionListListClient = typeof client<ApiV1BillingAdminPaymentTransactionListListQueryResponse, never, never>
type ApiV1BillingAdminPaymentTransactionListList = {
  data: ApiV1BillingAdminPaymentTransactionListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1BillingAdminPaymentTransactionListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentTransactionListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentTransactionListListClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentTransactionListListClient>>
  }
}
export const apiV1BillingAdminPaymentTransactionListListQueryKey = (params?: ApiV1BillingAdminPaymentTransactionListList["queryParams"]) =>
  [{ url: "/api/v1/billing/admin/payment/transaction/list/" }, ...(params ? [params] : [])] as const
export type ApiV1BillingAdminPaymentTransactionListListQueryKey = ReturnType<typeof apiV1BillingAdminPaymentTransactionListListQueryKey>
export function apiV1BillingAdminPaymentTransactionListListQueryOptions<
  TData = ApiV1BillingAdminPaymentTransactionListList["response"],
  TQueryData = ApiV1BillingAdminPaymentTransactionListList["response"],
>(
  params?: ApiV1BillingAdminPaymentTransactionListList["queryParams"],
  options: ApiV1BillingAdminPaymentTransactionListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1BillingAdminPaymentTransactionListList["response"], ApiV1BillingAdminPaymentTransactionListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingAdminPaymentTransactionListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1BillingAdminPaymentTransactionListList["data"], ApiV1BillingAdminPaymentTransactionListList["error"]>({
        method: "get",
        url: `/api/v1/billing/admin/payment/transaction/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список всех платежных транзакций
 * @link /api/v1/billing/admin/payment/transaction/list/ */
export function useApiV1BillingAdminPaymentTransactionListList<
  TData = ApiV1BillingAdminPaymentTransactionListList["response"],
  TQueryData = ApiV1BillingAdminPaymentTransactionListList["response"],
  TQueryKey extends QueryKey = ApiV1BillingAdminPaymentTransactionListListQueryKey,
>(
  params?: ApiV1BillingAdminPaymentTransactionListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1BillingAdminPaymentTransactionListList["response"], ApiV1BillingAdminPaymentTransactionListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingAdminPaymentTransactionListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1BillingAdminPaymentTransactionListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingAdminPaymentTransactionListListQueryKey(params)
  const query = useQuery<ApiV1BillingAdminPaymentTransactionListList["data"], ApiV1BillingAdminPaymentTransactionListList["error"], TData, any>({
    ...apiV1BillingAdminPaymentTransactionListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1BillingAdminPaymentTransactionListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1BillingAdminPaymentTransactionListListInfiniteQueryKey = (params?: ApiV1BillingAdminPaymentTransactionListList["queryParams"]) =>
  [{ url: "/api/v1/billing/admin/payment/transaction/list/" }, ...(params ? [params] : [])] as const
export type ApiV1BillingAdminPaymentTransactionListListInfiniteQueryKey = ReturnType<typeof apiV1BillingAdminPaymentTransactionListListInfiniteQueryKey>
export function apiV1BillingAdminPaymentTransactionListListInfiniteQueryOptions<
  TData = ApiV1BillingAdminPaymentTransactionListList["response"],
  TQueryData = ApiV1BillingAdminPaymentTransactionListList["response"],
>(
  params?: ApiV1BillingAdminPaymentTransactionListList["queryParams"],
  options: ApiV1BillingAdminPaymentTransactionListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1BillingAdminPaymentTransactionListList["response"], ApiV1BillingAdminPaymentTransactionListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingAdminPaymentTransactionListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1BillingAdminPaymentTransactionListList["data"], ApiV1BillingAdminPaymentTransactionListList["error"]>({
        method: "get",
        url: `/api/v1/billing/admin/payment/transaction/list/`,
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
 * @summary Список всех платежных транзакций
 * @link /api/v1/billing/admin/payment/transaction/list/ */
export function useApiV1BillingAdminPaymentTransactionListListInfinite<
  TData = InfiniteData<ApiV1BillingAdminPaymentTransactionListList["response"]>,
  TQueryData = ApiV1BillingAdminPaymentTransactionListList["response"],
  TQueryKey extends QueryKey = ApiV1BillingAdminPaymentTransactionListListInfiniteQueryKey,
>(
  params?: ApiV1BillingAdminPaymentTransactionListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1BillingAdminPaymentTransactionListList["response"], ApiV1BillingAdminPaymentTransactionListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingAdminPaymentTransactionListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1BillingAdminPaymentTransactionListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingAdminPaymentTransactionListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1BillingAdminPaymentTransactionListList["data"], ApiV1BillingAdminPaymentTransactionListList["error"], TData, any>({
    ...apiV1BillingAdminPaymentTransactionListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1BillingAdminPaymentTransactionListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
