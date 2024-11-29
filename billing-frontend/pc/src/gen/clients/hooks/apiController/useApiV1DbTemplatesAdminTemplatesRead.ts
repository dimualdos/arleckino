import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1DbTemplatesAdminTemplatesReadQueryResponse, ApiV1DbTemplatesAdminTemplatesReadPathParams } from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminTemplatesReadClient = typeof client<ApiV1DbTemplatesAdminTemplatesReadQueryResponse, never, never>
type ApiV1DbTemplatesAdminTemplatesRead = {
  data: ApiV1DbTemplatesAdminTemplatesReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1DbTemplatesAdminTemplatesReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminTemplatesReadClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesReadClient>>
  }
}
export const apiV1DbTemplatesAdminTemplatesReadQueryKey = (id: ApiV1DbTemplatesAdminTemplatesReadPathParams["id"]) =>
  [{ url: "/api/v1/db_templates/admin/templates/:id/", params: { id: id } }] as const
export type ApiV1DbTemplatesAdminTemplatesReadQueryKey = ReturnType<typeof apiV1DbTemplatesAdminTemplatesReadQueryKey>
export function apiV1DbTemplatesAdminTemplatesReadQueryOptions<TData = ApiV1DbTemplatesAdminTemplatesRead["response"], TQueryData = ApiV1DbTemplatesAdminTemplatesRead["response"]>(
  id: ApiV1DbTemplatesAdminTemplatesReadPathParams["id"],
  options: ApiV1DbTemplatesAdminTemplatesRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1DbTemplatesAdminTemplatesRead["response"], ApiV1DbTemplatesAdminTemplatesRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesAdminTemplatesReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1DbTemplatesAdminTemplatesRead["data"], ApiV1DbTemplatesAdminTemplatesRead["error"]>({
        method: "get",
        url: `/api/v1/db_templates/admin/templates/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение шаблона
 * @link /api/v1/db_templates/admin/templates/:id/ */
export function useApiV1DbTemplatesAdminTemplatesRead<
  TData = ApiV1DbTemplatesAdminTemplatesRead["response"],
  TQueryData = ApiV1DbTemplatesAdminTemplatesRead["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesAdminTemplatesReadQueryKey,
>(
  id: ApiV1DbTemplatesAdminTemplatesReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1DbTemplatesAdminTemplatesRead["response"], ApiV1DbTemplatesAdminTemplatesRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesAdminTemplatesRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1DbTemplatesAdminTemplatesRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesAdminTemplatesReadQueryKey(id)
  const query = useQuery<ApiV1DbTemplatesAdminTemplatesRead["data"], ApiV1DbTemplatesAdminTemplatesRead["error"], TData, any>({
    ...apiV1DbTemplatesAdminTemplatesReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1DbTemplatesAdminTemplatesRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1DbTemplatesAdminTemplatesReadInfiniteQueryKey = (id: ApiV1DbTemplatesAdminTemplatesReadPathParams["id"]) =>
  [{ url: "/api/v1/db_templates/admin/templates/:id/", params: { id: id } }] as const
export type ApiV1DbTemplatesAdminTemplatesReadInfiniteQueryKey = ReturnType<typeof apiV1DbTemplatesAdminTemplatesReadInfiniteQueryKey>
export function apiV1DbTemplatesAdminTemplatesReadInfiniteQueryOptions<TData = ApiV1DbTemplatesAdminTemplatesRead["response"], TQueryData = ApiV1DbTemplatesAdminTemplatesRead["response"]>(
  id: ApiV1DbTemplatesAdminTemplatesReadPathParams["id"],
  options: ApiV1DbTemplatesAdminTemplatesRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1DbTemplatesAdminTemplatesRead["response"], ApiV1DbTemplatesAdminTemplatesRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesAdminTemplatesReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1DbTemplatesAdminTemplatesRead["data"], ApiV1DbTemplatesAdminTemplatesRead["error"]>({
        method: "get",
        url: `/api/v1/db_templates/admin/templates/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение шаблона
 * @link /api/v1/db_templates/admin/templates/:id/ */
export function useApiV1DbTemplatesAdminTemplatesReadInfinite<
  TData = InfiniteData<ApiV1DbTemplatesAdminTemplatesRead["response"]>,
  TQueryData = ApiV1DbTemplatesAdminTemplatesRead["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesAdminTemplatesReadInfiniteQueryKey,
>(
  id: ApiV1DbTemplatesAdminTemplatesReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1DbTemplatesAdminTemplatesRead["response"], ApiV1DbTemplatesAdminTemplatesRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesAdminTemplatesRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1DbTemplatesAdminTemplatesRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesAdminTemplatesReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1DbTemplatesAdminTemplatesRead["data"], ApiV1DbTemplatesAdminTemplatesRead["error"], TData, any>({
    ...apiV1DbTemplatesAdminTemplatesReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1DbTemplatesAdminTemplatesRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
