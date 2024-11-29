import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1FaqTagsListQueryResponse } from "../../../models/ts/apiController/ApiV1FaqTagsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1FaqTagsListClient = typeof client<ApiV1FaqTagsListQueryResponse, never, never>
type ApiV1FaqTagsList = {
  data: ApiV1FaqTagsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqTagsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqTagsListClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqTagsListClient>>
  }
}
export const apiV1FaqTagsListQueryKey = () => [{ url: "/api/v1/faq/tags/" }] as const
export type ApiV1FaqTagsListQueryKey = ReturnType<typeof apiV1FaqTagsListQueryKey>
export function apiV1FaqTagsListQueryOptions<TData = ApiV1FaqTagsList["response"], TQueryData = ApiV1FaqTagsList["response"]>(
  options: ApiV1FaqTagsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1FaqTagsList["response"], ApiV1FaqTagsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqTagsListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1FaqTagsList["data"], ApiV1FaqTagsList["error"]>({
        method: "get",
        url: `/api/v1/faq/tags/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список тегов.
 * @link /api/v1/faq/tags/ */
export function useApiV1FaqTagsList<TData = ApiV1FaqTagsList["response"], TQueryData = ApiV1FaqTagsList["response"], TQueryKey extends QueryKey = ApiV1FaqTagsListQueryKey>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1FaqTagsList["response"], ApiV1FaqTagsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqTagsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1FaqTagsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqTagsListQueryKey()
  const query = useQuery<ApiV1FaqTagsList["data"], ApiV1FaqTagsList["error"], TData, any>({
    ...apiV1FaqTagsListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1FaqTagsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1FaqTagsListInfiniteQueryKey = () => [{ url: "/api/v1/faq/tags/" }] as const
export type ApiV1FaqTagsListInfiniteQueryKey = ReturnType<typeof apiV1FaqTagsListInfiniteQueryKey>
export function apiV1FaqTagsListInfiniteQueryOptions<TData = ApiV1FaqTagsList["response"], TQueryData = ApiV1FaqTagsList["response"]>(
  options: ApiV1FaqTagsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1FaqTagsList["response"], ApiV1FaqTagsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqTagsListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1FaqTagsList["data"], ApiV1FaqTagsList["error"]>({
        method: "get",
        url: `/api/v1/faq/tags/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список тегов.
 * @link /api/v1/faq/tags/ */
export function useApiV1FaqTagsListInfinite<
  TData = InfiniteData<ApiV1FaqTagsList["response"]>,
  TQueryData = ApiV1FaqTagsList["response"],
  TQueryKey extends QueryKey = ApiV1FaqTagsListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1FaqTagsList["response"], ApiV1FaqTagsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqTagsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1FaqTagsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqTagsListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1FaqTagsList["data"], ApiV1FaqTagsList["error"], TData, any>({
    ...apiV1FaqTagsListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1FaqTagsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
