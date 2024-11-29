import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiExternalV1DasDataListQueryResponse } from "../../../models/ts/apiExternalController/ApiExternalV1DasDataList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiExternalV1DasDataListClient = typeof client<ApiExternalV1DasDataListQueryResponse, never, never>
type ApiExternalV1DasDataList = {
  data: ApiExternalV1DasDataListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiExternalV1DasDataListClient>>
  client: {
    parameters: Partial<Parameters<ApiExternalV1DasDataListClient>[0]>
    return: Awaited<ReturnType<ApiExternalV1DasDataListClient>>
  }
}
export const apiExternalV1DasDataListQueryKey = () => [{ url: "/api_external/v1/das-data/" }] as const
export type ApiExternalV1DasDataListQueryKey = ReturnType<typeof apiExternalV1DasDataListQueryKey>
export function apiExternalV1DasDataListQueryOptions<TData = ApiExternalV1DasDataList["response"], TQueryData = ApiExternalV1DasDataList["response"]>(
  options: ApiExternalV1DasDataList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiExternalV1DasDataList["response"], ApiExternalV1DasDataList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1DasDataListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiExternalV1DasDataList["data"], ApiExternalV1DasDataList["error"]>({
        method: "get",
        url: `/api_external/v1/das-data/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Отбираются активные устройства активных пользователей с активной подпиской.
 * @summary Данные для внешнего сервиса авторизации устройств.
 * @link /api_external/v1/das-data/ */
export function useApiExternalV1DasDataList<
  TData = ApiExternalV1DasDataList["response"],
  TQueryData = ApiExternalV1DasDataList["response"],
  TQueryKey extends QueryKey = ApiExternalV1DasDataListQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiExternalV1DasDataList["response"], ApiExternalV1DasDataList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1DasDataList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiExternalV1DasDataList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1DasDataListQueryKey()
  const query = useQuery<ApiExternalV1DasDataList["data"], ApiExternalV1DasDataList["error"], TData, any>({
    ...apiExternalV1DasDataListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiExternalV1DasDataList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiExternalV1DasDataListInfiniteQueryKey = () => [{ url: "/api_external/v1/das-data/" }] as const
export type ApiExternalV1DasDataListInfiniteQueryKey = ReturnType<typeof apiExternalV1DasDataListInfiniteQueryKey>
export function apiExternalV1DasDataListInfiniteQueryOptions<TData = ApiExternalV1DasDataList["response"], TQueryData = ApiExternalV1DasDataList["response"]>(
  options: ApiExternalV1DasDataList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiExternalV1DasDataList["response"], ApiExternalV1DasDataList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1DasDataListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiExternalV1DasDataList["data"], ApiExternalV1DasDataList["error"]>({
        method: "get",
        url: `/api_external/v1/das-data/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Отбираются активные устройства активных пользователей с активной подпиской.
 * @summary Данные для внешнего сервиса авторизации устройств.
 * @link /api_external/v1/das-data/ */
export function useApiExternalV1DasDataListInfinite<
  TData = InfiniteData<ApiExternalV1DasDataList["response"]>,
  TQueryData = ApiExternalV1DasDataList["response"],
  TQueryKey extends QueryKey = ApiExternalV1DasDataListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiExternalV1DasDataList["response"], ApiExternalV1DasDataList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1DasDataList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiExternalV1DasDataList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1DasDataListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiExternalV1DasDataList["data"], ApiExternalV1DasDataList["error"], TData, any>({
    ...apiExternalV1DasDataListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiExternalV1DasDataList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
