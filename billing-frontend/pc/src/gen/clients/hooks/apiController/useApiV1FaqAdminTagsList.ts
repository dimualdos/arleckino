import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1FaqAdminTagsListQueryResponse } from "../../../models/ts/apiController/ApiV1FaqAdminTagsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1FaqAdminTagsListClient = typeof client<ApiV1FaqAdminTagsListQueryResponse, never, never>
type ApiV1FaqAdminTagsList = {
  data: ApiV1FaqAdminTagsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminTagsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminTagsListClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminTagsListClient>>
  }
}
export const apiV1FaqAdminTagsListQueryKey = () => [{ url: "/api/v1/faq/admin/tags/" }] as const
export type ApiV1FaqAdminTagsListQueryKey = ReturnType<typeof apiV1FaqAdminTagsListQueryKey>
export function apiV1FaqAdminTagsListQueryOptions<TData = ApiV1FaqAdminTagsList["response"], TQueryData = ApiV1FaqAdminTagsList["response"]>(
  options: ApiV1FaqAdminTagsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1FaqAdminTagsList["response"], ApiV1FaqAdminTagsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqAdminTagsListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1FaqAdminTagsList["data"], ApiV1FaqAdminTagsList["error"]>({
        method: "get",
        url: `/api/v1/faq/admin/tags/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список тегов.
 * @link /api/v1/faq/admin/tags/ */
export function useApiV1FaqAdminTagsList<TData = ApiV1FaqAdminTagsList["response"], TQueryData = ApiV1FaqAdminTagsList["response"], TQueryKey extends QueryKey = ApiV1FaqAdminTagsListQueryKey>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1FaqAdminTagsList["response"], ApiV1FaqAdminTagsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqAdminTagsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1FaqAdminTagsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqAdminTagsListQueryKey()
  const query = useQuery<ApiV1FaqAdminTagsList["data"], ApiV1FaqAdminTagsList["error"], TData, any>({
    ...apiV1FaqAdminTagsListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1FaqAdminTagsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1FaqAdminTagsListInfiniteQueryKey = () => [{ url: "/api/v1/faq/admin/tags/" }] as const
export type ApiV1FaqAdminTagsListInfiniteQueryKey = ReturnType<typeof apiV1FaqAdminTagsListInfiniteQueryKey>
export function apiV1FaqAdminTagsListInfiniteQueryOptions<TData = ApiV1FaqAdminTagsList["response"], TQueryData = ApiV1FaqAdminTagsList["response"]>(
  options: ApiV1FaqAdminTagsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1FaqAdminTagsList["response"], ApiV1FaqAdminTagsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqAdminTagsListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1FaqAdminTagsList["data"], ApiV1FaqAdminTagsList["error"]>({
        method: "get",
        url: `/api/v1/faq/admin/tags/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список тегов.
 * @link /api/v1/faq/admin/tags/ */
export function useApiV1FaqAdminTagsListInfinite<
  TData = InfiniteData<ApiV1FaqAdminTagsList["response"]>,
  TQueryData = ApiV1FaqAdminTagsList["response"],
  TQueryKey extends QueryKey = ApiV1FaqAdminTagsListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1FaqAdminTagsList["response"], ApiV1FaqAdminTagsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqAdminTagsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1FaqAdminTagsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqAdminTagsListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1FaqAdminTagsList["data"], ApiV1FaqAdminTagsList["error"], TData, any>({
    ...apiV1FaqAdminTagsListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1FaqAdminTagsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
