import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1BillingAdminPaymentTransactionAggregateListQueryResponse,
  ApiV1BillingAdminPaymentTransactionAggregateListQueryParams,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentTransactionAggregateList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentTransactionAggregateListClient = typeof client<ApiV1BillingAdminPaymentTransactionAggregateListQueryResponse, never, never>
type ApiV1BillingAdminPaymentTransactionAggregateList = {
  data: ApiV1BillingAdminPaymentTransactionAggregateListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1BillingAdminPaymentTransactionAggregateListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentTransactionAggregateListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentTransactionAggregateListClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentTransactionAggregateListClient>>
  }
}
export const apiV1BillingAdminPaymentTransactionAggregateListQueryKey = (params?: ApiV1BillingAdminPaymentTransactionAggregateList["queryParams"]) =>
  [{ url: "/api/v1/billing/admin/payment/transaction/aggregate/" }, ...(params ? [params] : [])] as const
export type ApiV1BillingAdminPaymentTransactionAggregateListQueryKey = ReturnType<typeof apiV1BillingAdminPaymentTransactionAggregateListQueryKey>
export function apiV1BillingAdminPaymentTransactionAggregateListQueryOptions<
  TData = ApiV1BillingAdminPaymentTransactionAggregateList["response"],
  TQueryData = ApiV1BillingAdminPaymentTransactionAggregateList["response"],
>(
  params?: ApiV1BillingAdminPaymentTransactionAggregateList["queryParams"],
  options: ApiV1BillingAdminPaymentTransactionAggregateList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1BillingAdminPaymentTransactionAggregateList["response"], ApiV1BillingAdminPaymentTransactionAggregateList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingAdminPaymentTransactionAggregateListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1BillingAdminPaymentTransactionAggregateList["data"], ApiV1BillingAdminPaymentTransactionAggregateList["error"]>({
        method: "get",
        url: `/api/v1/billing/admin/payment/transaction/aggregate/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Агрегированный список платежных транзакций
 * @link /api/v1/billing/admin/payment/transaction/aggregate/ */
export function useApiV1BillingAdminPaymentTransactionAggregateList<
  TData = ApiV1BillingAdminPaymentTransactionAggregateList["response"],
  TQueryData = ApiV1BillingAdminPaymentTransactionAggregateList["response"],
  TQueryKey extends QueryKey = ApiV1BillingAdminPaymentTransactionAggregateListQueryKey,
>(
  params?: ApiV1BillingAdminPaymentTransactionAggregateList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1BillingAdminPaymentTransactionAggregateList["response"], ApiV1BillingAdminPaymentTransactionAggregateList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingAdminPaymentTransactionAggregateList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1BillingAdminPaymentTransactionAggregateList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingAdminPaymentTransactionAggregateListQueryKey(params)
  const query = useQuery<ApiV1BillingAdminPaymentTransactionAggregateList["data"], ApiV1BillingAdminPaymentTransactionAggregateList["error"], TData, any>({
    ...apiV1BillingAdminPaymentTransactionAggregateListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1BillingAdminPaymentTransactionAggregateList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1BillingAdminPaymentTransactionAggregateListInfiniteQueryKey = (params?: ApiV1BillingAdminPaymentTransactionAggregateList["queryParams"]) =>
  [{ url: "/api/v1/billing/admin/payment/transaction/aggregate/" }, ...(params ? [params] : [])] as const
export type ApiV1BillingAdminPaymentTransactionAggregateListInfiniteQueryKey = ReturnType<typeof apiV1BillingAdminPaymentTransactionAggregateListInfiniteQueryKey>
export function apiV1BillingAdminPaymentTransactionAggregateListInfiniteQueryOptions<
  TData = ApiV1BillingAdminPaymentTransactionAggregateList["response"],
  TQueryData = ApiV1BillingAdminPaymentTransactionAggregateList["response"],
>(
  params?: ApiV1BillingAdminPaymentTransactionAggregateList["queryParams"],
  options: ApiV1BillingAdminPaymentTransactionAggregateList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1BillingAdminPaymentTransactionAggregateList["response"], ApiV1BillingAdminPaymentTransactionAggregateList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingAdminPaymentTransactionAggregateListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1BillingAdminPaymentTransactionAggregateList["data"], ApiV1BillingAdminPaymentTransactionAggregateList["error"]>({
        method: "get",
        url: `/api/v1/billing/admin/payment/transaction/aggregate/`,
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
 * @summary Агрегированный список платежных транзакций
 * @link /api/v1/billing/admin/payment/transaction/aggregate/ */
export function useApiV1BillingAdminPaymentTransactionAggregateListInfinite<
  TData = InfiniteData<ApiV1BillingAdminPaymentTransactionAggregateList["response"]>,
  TQueryData = ApiV1BillingAdminPaymentTransactionAggregateList["response"],
  TQueryKey extends QueryKey = ApiV1BillingAdminPaymentTransactionAggregateListInfiniteQueryKey,
>(
  params?: ApiV1BillingAdminPaymentTransactionAggregateList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1BillingAdminPaymentTransactionAggregateList["response"], ApiV1BillingAdminPaymentTransactionAggregateList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingAdminPaymentTransactionAggregateList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1BillingAdminPaymentTransactionAggregateList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingAdminPaymentTransactionAggregateListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1BillingAdminPaymentTransactionAggregateList["data"], ApiV1BillingAdminPaymentTransactionAggregateList["error"], TData, any>({
    ...apiV1BillingAdminPaymentTransactionAggregateListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1BillingAdminPaymentTransactionAggregateList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
