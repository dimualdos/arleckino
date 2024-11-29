import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1BillingAdminPaymentSystemListListQueryResponse, ApiV1BillingAdminPaymentSystemListListQueryParams } from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentSystemListListClient = typeof client<ApiV1BillingAdminPaymentSystemListListQueryResponse, never, never>
type ApiV1BillingAdminPaymentSystemListList = {
  data: ApiV1BillingAdminPaymentSystemListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1BillingAdminPaymentSystemListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentSystemListListClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemListListClient>>
  }
}
export const apiV1BillingAdminPaymentSystemListListQueryKey = (params?: ApiV1BillingAdminPaymentSystemListList["queryParams"]) =>
  [{ url: "/api/v1/billing/admin/payment/system/list/" }, ...(params ? [params] : [])] as const
export type ApiV1BillingAdminPaymentSystemListListQueryKey = ReturnType<typeof apiV1BillingAdminPaymentSystemListListQueryKey>
export function apiV1BillingAdminPaymentSystemListListQueryOptions<TData = ApiV1BillingAdminPaymentSystemListList["response"], TQueryData = ApiV1BillingAdminPaymentSystemListList["response"]>(
  params?: ApiV1BillingAdminPaymentSystemListList["queryParams"],
  options: ApiV1BillingAdminPaymentSystemListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1BillingAdminPaymentSystemListList["response"], ApiV1BillingAdminPaymentSystemListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingAdminPaymentSystemListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1BillingAdminPaymentSystemListList["data"], ApiV1BillingAdminPaymentSystemListList["error"]>({
        method: "get",
        url: `/api/v1/billing/admin/payment/system/list/`,
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
 * @link /api/v1/billing/admin/payment/system/list/ */
export function useApiV1BillingAdminPaymentSystemListList<
  TData = ApiV1BillingAdminPaymentSystemListList["response"],
  TQueryData = ApiV1BillingAdminPaymentSystemListList["response"],
  TQueryKey extends QueryKey = ApiV1BillingAdminPaymentSystemListListQueryKey,
>(
  params?: ApiV1BillingAdminPaymentSystemListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1BillingAdminPaymentSystemListList["response"], ApiV1BillingAdminPaymentSystemListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingAdminPaymentSystemListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1BillingAdminPaymentSystemListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingAdminPaymentSystemListListQueryKey(params)
  const query = useQuery<ApiV1BillingAdminPaymentSystemListList["data"], ApiV1BillingAdminPaymentSystemListList["error"], TData, any>({
    ...apiV1BillingAdminPaymentSystemListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1BillingAdminPaymentSystemListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1BillingAdminPaymentSystemListListInfiniteQueryKey = (params?: ApiV1BillingAdminPaymentSystemListList["queryParams"]) =>
  [{ url: "/api/v1/billing/admin/payment/system/list/" }, ...(params ? [params] : [])] as const
export type ApiV1BillingAdminPaymentSystemListListInfiniteQueryKey = ReturnType<typeof apiV1BillingAdminPaymentSystemListListInfiniteQueryKey>
export function apiV1BillingAdminPaymentSystemListListInfiniteQueryOptions<TData = ApiV1BillingAdminPaymentSystemListList["response"], TQueryData = ApiV1BillingAdminPaymentSystemListList["response"]>(
  params?: ApiV1BillingAdminPaymentSystemListList["queryParams"],
  options: ApiV1BillingAdminPaymentSystemListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1BillingAdminPaymentSystemListList["response"], ApiV1BillingAdminPaymentSystemListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingAdminPaymentSystemListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1BillingAdminPaymentSystemListList["data"], ApiV1BillingAdminPaymentSystemListList["error"]>({
        method: "get",
        url: `/api/v1/billing/admin/payment/system/list/`,
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
 * @link /api/v1/billing/admin/payment/system/list/ */
export function useApiV1BillingAdminPaymentSystemListListInfinite<
  TData = InfiniteData<ApiV1BillingAdminPaymentSystemListList["response"]>,
  TQueryData = ApiV1BillingAdminPaymentSystemListList["response"],
  TQueryKey extends QueryKey = ApiV1BillingAdminPaymentSystemListListInfiniteQueryKey,
>(
  params?: ApiV1BillingAdminPaymentSystemListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1BillingAdminPaymentSystemListList["response"], ApiV1BillingAdminPaymentSystemListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingAdminPaymentSystemListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1BillingAdminPaymentSystemListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingAdminPaymentSystemListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1BillingAdminPaymentSystemListList["data"], ApiV1BillingAdminPaymentSystemListList["error"], TData, any>({
    ...apiV1BillingAdminPaymentSystemListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1BillingAdminPaymentSystemListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
