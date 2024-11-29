import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceAdminPromocodeListListQueryResponse, ApiV1ServiceAdminPromocodeListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceAdminPromocodeListListClient = typeof client<ApiV1ServiceAdminPromocodeListListQueryResponse, never, never>
type ApiV1ServiceAdminPromocodeListList = {
  data: ApiV1ServiceAdminPromocodeListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ServiceAdminPromocodeListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminPromocodeListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminPromocodeListListClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminPromocodeListListClient>>
  }
}
export const apiV1ServiceAdminPromocodeListListQueryKey = (params?: ApiV1ServiceAdminPromocodeListList["queryParams"]) =>
  [{ url: "/api/v1/service/admin/promocode/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceAdminPromocodeListListQueryKey = ReturnType<typeof apiV1ServiceAdminPromocodeListListQueryKey>
export function apiV1ServiceAdminPromocodeListListQueryOptions<TData = ApiV1ServiceAdminPromocodeListList["response"], TQueryData = ApiV1ServiceAdminPromocodeListList["response"]>(
  params?: ApiV1ServiceAdminPromocodeListList["queryParams"],
  options: ApiV1ServiceAdminPromocodeListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceAdminPromocodeListList["response"], ApiV1ServiceAdminPromocodeListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminPromocodeListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceAdminPromocodeListList["data"], ApiV1ServiceAdminPromocodeListList["error"]>({
        method: "get",
        url: `/api/v1/service/admin/promocode/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Параметры фильтрации списка промокодов:- promocode_type - тип промокода, возможные значения amount/percent- is_active - активность промокода, возможные значения true/false- code - фраза для регистронезависимого поиска в поле code
 * @summary Список промокодов, создание нового промокода.
 * @link /api/v1/service/admin/promocode/list/ */
export function useApiV1ServiceAdminPromocodeListList<
  TData = ApiV1ServiceAdminPromocodeListList["response"],
  TQueryData = ApiV1ServiceAdminPromocodeListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminPromocodeListListQueryKey,
>(
  params?: ApiV1ServiceAdminPromocodeListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceAdminPromocodeListList["response"], ApiV1ServiceAdminPromocodeListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminPromocodeListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceAdminPromocodeListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminPromocodeListListQueryKey(params)
  const query = useQuery<ApiV1ServiceAdminPromocodeListList["data"], ApiV1ServiceAdminPromocodeListList["error"], TData, any>({
    ...apiV1ServiceAdminPromocodeListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceAdminPromocodeListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceAdminPromocodeListListInfiniteQueryKey = (params?: ApiV1ServiceAdminPromocodeListList["queryParams"]) =>
  [{ url: "/api/v1/service/admin/promocode/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceAdminPromocodeListListInfiniteQueryKey = ReturnType<typeof apiV1ServiceAdminPromocodeListListInfiniteQueryKey>
export function apiV1ServiceAdminPromocodeListListInfiniteQueryOptions<TData = ApiV1ServiceAdminPromocodeListList["response"], TQueryData = ApiV1ServiceAdminPromocodeListList["response"]>(
  params?: ApiV1ServiceAdminPromocodeListList["queryParams"],
  options: ApiV1ServiceAdminPromocodeListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceAdminPromocodeListList["response"], ApiV1ServiceAdminPromocodeListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminPromocodeListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceAdminPromocodeListList["data"], ApiV1ServiceAdminPromocodeListList["error"]>({
        method: "get",
        url: `/api/v1/service/admin/promocode/list/`,
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
 * @description Параметры фильтрации списка промокодов:- promocode_type - тип промокода, возможные значения amount/percent- is_active - активность промокода, возможные значения true/false- code - фраза для регистронезависимого поиска в поле code
 * @summary Список промокодов, создание нового промокода.
 * @link /api/v1/service/admin/promocode/list/ */
export function useApiV1ServiceAdminPromocodeListListInfinite<
  TData = InfiniteData<ApiV1ServiceAdminPromocodeListList["response"]>,
  TQueryData = ApiV1ServiceAdminPromocodeListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminPromocodeListListInfiniteQueryKey,
>(
  params?: ApiV1ServiceAdminPromocodeListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceAdminPromocodeListList["response"], ApiV1ServiceAdminPromocodeListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminPromocodeListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceAdminPromocodeListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminPromocodeListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ServiceAdminPromocodeListList["data"], ApiV1ServiceAdminPromocodeListList["error"], TData, any>({
    ...apiV1ServiceAdminPromocodeListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceAdminPromocodeListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
