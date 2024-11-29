import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ActionsAdminTypesReadQueryResponse, ApiV1ActionsAdminTypesReadPathParams } from "../../../models/ts/apiController/ApiV1ActionsAdminTypesRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsAdminTypesReadClient = typeof client<ApiV1ActionsAdminTypesReadQueryResponse, never, never>
type ApiV1ActionsAdminTypesRead = {
  data: ApiV1ActionsAdminTypesReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1ActionsAdminTypesReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminTypesReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminTypesReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminTypesReadClient>>
  }
}
export const apiV1ActionsAdminTypesReadQueryKey = (id: ApiV1ActionsAdminTypesReadPathParams["id"]) => [{ url: "/api/v1/actions/admin/types/:id/", params: { id: id } }] as const
export type ApiV1ActionsAdminTypesReadQueryKey = ReturnType<typeof apiV1ActionsAdminTypesReadQueryKey>
export function apiV1ActionsAdminTypesReadQueryOptions<TData = ApiV1ActionsAdminTypesRead["response"], TQueryData = ApiV1ActionsAdminTypesRead["response"]>(
  id: ApiV1ActionsAdminTypesReadPathParams["id"],
  options: ApiV1ActionsAdminTypesRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsAdminTypesRead["response"], ApiV1ActionsAdminTypesRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminTypesReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsAdminTypesRead["data"], ApiV1ActionsAdminTypesRead["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/types/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Представление для выборки данных конкретного действия
 * @link /api/v1/actions/admin/types/:id/ */
export function useApiV1ActionsAdminTypesRead<
  TData = ApiV1ActionsAdminTypesRead["response"],
  TQueryData = ApiV1ActionsAdminTypesRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminTypesReadQueryKey,
>(
  id: ApiV1ActionsAdminTypesReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsAdminTypesRead["response"], ApiV1ActionsAdminTypesRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminTypesRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsAdminTypesRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminTypesReadQueryKey(id)
  const query = useQuery<ApiV1ActionsAdminTypesRead["data"], ApiV1ActionsAdminTypesRead["error"], TData, any>({
    ...apiV1ActionsAdminTypesReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsAdminTypesRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsAdminTypesReadInfiniteQueryKey = (id: ApiV1ActionsAdminTypesReadPathParams["id"]) => [{ url: "/api/v1/actions/admin/types/:id/", params: { id: id } }] as const
export type ApiV1ActionsAdminTypesReadInfiniteQueryKey = ReturnType<typeof apiV1ActionsAdminTypesReadInfiniteQueryKey>
export function apiV1ActionsAdminTypesReadInfiniteQueryOptions<TData = ApiV1ActionsAdminTypesRead["response"], TQueryData = ApiV1ActionsAdminTypesRead["response"]>(
  id: ApiV1ActionsAdminTypesReadPathParams["id"],
  options: ApiV1ActionsAdminTypesRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsAdminTypesRead["response"], ApiV1ActionsAdminTypesRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminTypesReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsAdminTypesRead["data"], ApiV1ActionsAdminTypesRead["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/types/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Представление для выборки данных конкретного действия
 * @link /api/v1/actions/admin/types/:id/ */
export function useApiV1ActionsAdminTypesReadInfinite<
  TData = InfiniteData<ApiV1ActionsAdminTypesRead["response"]>,
  TQueryData = ApiV1ActionsAdminTypesRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminTypesReadInfiniteQueryKey,
>(
  id: ApiV1ActionsAdminTypesReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsAdminTypesRead["response"], ApiV1ActionsAdminTypesRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminTypesRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsAdminTypesRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminTypesReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1ActionsAdminTypesRead["data"], ApiV1ActionsAdminTypesRead["error"], TData, any>({
    ...apiV1ActionsAdminTypesReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsAdminTypesRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
