import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1BillingPaymentSystemListListQueryResponse, ApiV1BillingPaymentSystemListListQueryParams } from "../../../models/ts/apiController/ApiV1BillingPaymentSystemListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1BillingPaymentSystemListListClient = typeof client<ApiV1BillingPaymentSystemListListQueryResponse, never, never>
type ApiV1BillingPaymentSystemListList = {
  data: ApiV1BillingPaymentSystemListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1BillingPaymentSystemListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingPaymentSystemListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingPaymentSystemListListClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingPaymentSystemListListClient>>
  }
}
export const apiV1BillingPaymentSystemListListQueryKey = (params?: ApiV1BillingPaymentSystemListList["queryParams"]) =>
  [{ url: "/api/v1/billing/payment/system/list/" }, ...(params ? [params] : [])] as const
export type ApiV1BillingPaymentSystemListListQueryKey = ReturnType<typeof apiV1BillingPaymentSystemListListQueryKey>
export function apiV1BillingPaymentSystemListListQueryOptions<TData = ApiV1BillingPaymentSystemListList["response"], TQueryData = ApiV1BillingPaymentSystemListList["response"]>(
  params?: ApiV1BillingPaymentSystemListList["queryParams"],
  options: ApiV1BillingPaymentSystemListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1BillingPaymentSystemListList["response"], ApiV1BillingPaymentSystemListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingPaymentSystemListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1BillingPaymentSystemListList["data"], ApiV1BillingPaymentSystemListList["error"]>({
        method: "get",
        url: `/api/v1/billing/payment/system/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список всех платежных систем
 * @link /api/v1/billing/payment/system/list/ */
export function useApiV1BillingPaymentSystemListList<
  TData = ApiV1BillingPaymentSystemListList["response"],
  TQueryData = ApiV1BillingPaymentSystemListList["response"],
  TQueryKey extends QueryKey = ApiV1BillingPaymentSystemListListQueryKey,
>(
  params?: ApiV1BillingPaymentSystemListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1BillingPaymentSystemListList["response"], ApiV1BillingPaymentSystemListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingPaymentSystemListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1BillingPaymentSystemListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingPaymentSystemListListQueryKey(params)
  const query = useQuery<ApiV1BillingPaymentSystemListList["data"], ApiV1BillingPaymentSystemListList["error"], TData, any>({
    ...apiV1BillingPaymentSystemListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1BillingPaymentSystemListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1BillingPaymentSystemListListInfiniteQueryKey = (params?: ApiV1BillingPaymentSystemListList["queryParams"]) =>
  [{ url: "/api/v1/billing/payment/system/list/" }, ...(params ? [params] : [])] as const
export type ApiV1BillingPaymentSystemListListInfiniteQueryKey = ReturnType<typeof apiV1BillingPaymentSystemListListInfiniteQueryKey>
export function apiV1BillingPaymentSystemListListInfiniteQueryOptions<TData = ApiV1BillingPaymentSystemListList["response"], TQueryData = ApiV1BillingPaymentSystemListList["response"]>(
  params?: ApiV1BillingPaymentSystemListList["queryParams"],
  options: ApiV1BillingPaymentSystemListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1BillingPaymentSystemListList["response"], ApiV1BillingPaymentSystemListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingPaymentSystemListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1BillingPaymentSystemListList["data"], ApiV1BillingPaymentSystemListList["error"]>({
        method: "get",
        url: `/api/v1/billing/payment/system/list/`,
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
 * @summary Список всех платежных систем
 * @link /api/v1/billing/payment/system/list/ */
export function useApiV1BillingPaymentSystemListListInfinite<
  TData = InfiniteData<ApiV1BillingPaymentSystemListList["response"]>,
  TQueryData = ApiV1BillingPaymentSystemListList["response"],
  TQueryKey extends QueryKey = ApiV1BillingPaymentSystemListListInfiniteQueryKey,
>(
  params?: ApiV1BillingPaymentSystemListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1BillingPaymentSystemListList["response"], ApiV1BillingPaymentSystemListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingPaymentSystemListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1BillingPaymentSystemListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingPaymentSystemListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1BillingPaymentSystemListList["data"], ApiV1BillingPaymentSystemListList["error"], TData, any>({
    ...apiV1BillingPaymentSystemListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1BillingPaymentSystemListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
