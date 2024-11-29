import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1FaqAdminTagsReadQueryResponse, ApiV1FaqAdminTagsReadPathParams } from "../../../models/ts/apiController/ApiV1FaqAdminTagsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1FaqAdminTagsReadClient = typeof client<ApiV1FaqAdminTagsReadQueryResponse, never, never>
type ApiV1FaqAdminTagsRead = {
  data: ApiV1FaqAdminTagsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1FaqAdminTagsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminTagsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminTagsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminTagsReadClient>>
  }
}
export const apiV1FaqAdminTagsReadQueryKey = (id: ApiV1FaqAdminTagsReadPathParams["id"]) => [{ url: "/api/v1/faq/admin/tags/:id/", params: { id: id } }] as const
export type ApiV1FaqAdminTagsReadQueryKey = ReturnType<typeof apiV1FaqAdminTagsReadQueryKey>
export function apiV1FaqAdminTagsReadQueryOptions<TData = ApiV1FaqAdminTagsRead["response"], TQueryData = ApiV1FaqAdminTagsRead["response"]>(
  id: ApiV1FaqAdminTagsReadPathParams["id"],
  options: ApiV1FaqAdminTagsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1FaqAdminTagsRead["response"], ApiV1FaqAdminTagsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqAdminTagsReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1FaqAdminTagsRead["data"], ApiV1FaqAdminTagsRead["error"]>({
        method: "get",
        url: `/api/v1/faq/admin/tags/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление тега.
 * @link /api/v1/faq/admin/tags/:id/ */
export function useApiV1FaqAdminTagsRead<TData = ApiV1FaqAdminTagsRead["response"], TQueryData = ApiV1FaqAdminTagsRead["response"], TQueryKey extends QueryKey = ApiV1FaqAdminTagsReadQueryKey>(
  id: ApiV1FaqAdminTagsReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1FaqAdminTagsRead["response"], ApiV1FaqAdminTagsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqAdminTagsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1FaqAdminTagsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqAdminTagsReadQueryKey(id)
  const query = useQuery<ApiV1FaqAdminTagsRead["data"], ApiV1FaqAdminTagsRead["error"], TData, any>({
    ...apiV1FaqAdminTagsReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1FaqAdminTagsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1FaqAdminTagsReadInfiniteQueryKey = (id: ApiV1FaqAdminTagsReadPathParams["id"]) => [{ url: "/api/v1/faq/admin/tags/:id/", params: { id: id } }] as const
export type ApiV1FaqAdminTagsReadInfiniteQueryKey = ReturnType<typeof apiV1FaqAdminTagsReadInfiniteQueryKey>
export function apiV1FaqAdminTagsReadInfiniteQueryOptions<TData = ApiV1FaqAdminTagsRead["response"], TQueryData = ApiV1FaqAdminTagsRead["response"]>(
  id: ApiV1FaqAdminTagsReadPathParams["id"],
  options: ApiV1FaqAdminTagsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1FaqAdminTagsRead["response"], ApiV1FaqAdminTagsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqAdminTagsReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1FaqAdminTagsRead["data"], ApiV1FaqAdminTagsRead["error"]>({
        method: "get",
        url: `/api/v1/faq/admin/tags/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление тега.
 * @link /api/v1/faq/admin/tags/:id/ */
export function useApiV1FaqAdminTagsReadInfinite<
  TData = InfiniteData<ApiV1FaqAdminTagsRead["response"]>,
  TQueryData = ApiV1FaqAdminTagsRead["response"],
  TQueryKey extends QueryKey = ApiV1FaqAdminTagsReadInfiniteQueryKey,
>(
  id: ApiV1FaqAdminTagsReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1FaqAdminTagsRead["response"], ApiV1FaqAdminTagsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqAdminTagsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1FaqAdminTagsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqAdminTagsReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1FaqAdminTagsRead["data"], ApiV1FaqAdminTagsRead["error"], TData, any>({
    ...apiV1FaqAdminTagsReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1FaqAdminTagsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
