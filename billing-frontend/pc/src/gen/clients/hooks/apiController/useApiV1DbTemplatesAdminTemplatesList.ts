import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1DbTemplatesAdminTemplatesListQueryResponse, ApiV1DbTemplatesAdminTemplatesListQueryParams } from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminTemplatesListClient = typeof client<ApiV1DbTemplatesAdminTemplatesListQueryResponse, never, never>
type ApiV1DbTemplatesAdminTemplatesList = {
  data: ApiV1DbTemplatesAdminTemplatesListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1DbTemplatesAdminTemplatesListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminTemplatesListClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesListClient>>
  }
}
export const apiV1DbTemplatesAdminTemplatesListQueryKey = (params?: ApiV1DbTemplatesAdminTemplatesList["queryParams"]) =>
  [{ url: "/api/v1/db_templates/admin/templates/" }, ...(params ? [params] : [])] as const
export type ApiV1DbTemplatesAdminTemplatesListQueryKey = ReturnType<typeof apiV1DbTemplatesAdminTemplatesListQueryKey>
export function apiV1DbTemplatesAdminTemplatesListQueryOptions<TData = ApiV1DbTemplatesAdminTemplatesList["response"], TQueryData = ApiV1DbTemplatesAdminTemplatesList["response"]>(
  params?: ApiV1DbTemplatesAdminTemplatesList["queryParams"],
  options: ApiV1DbTemplatesAdminTemplatesList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1DbTemplatesAdminTemplatesList["response"], ApiV1DbTemplatesAdminTemplatesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesAdminTemplatesListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1DbTemplatesAdminTemplatesList["data"], ApiV1DbTemplatesAdminTemplatesList["error"]>({
        method: "get",
        url: `/api/v1/db_templates/admin/templates/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список шаблонов
 * @link /api/v1/db_templates/admin/templates/ */
export function useApiV1DbTemplatesAdminTemplatesList<
  TData = ApiV1DbTemplatesAdminTemplatesList["response"],
  TQueryData = ApiV1DbTemplatesAdminTemplatesList["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesAdminTemplatesListQueryKey,
>(
  params?: ApiV1DbTemplatesAdminTemplatesList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1DbTemplatesAdminTemplatesList["response"], ApiV1DbTemplatesAdminTemplatesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesAdminTemplatesList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1DbTemplatesAdminTemplatesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesAdminTemplatesListQueryKey(params)
  const query = useQuery<ApiV1DbTemplatesAdminTemplatesList["data"], ApiV1DbTemplatesAdminTemplatesList["error"], TData, any>({
    ...apiV1DbTemplatesAdminTemplatesListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1DbTemplatesAdminTemplatesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1DbTemplatesAdminTemplatesListInfiniteQueryKey = (params?: ApiV1DbTemplatesAdminTemplatesList["queryParams"]) =>
  [{ url: "/api/v1/db_templates/admin/templates/" }, ...(params ? [params] : [])] as const
export type ApiV1DbTemplatesAdminTemplatesListInfiniteQueryKey = ReturnType<typeof apiV1DbTemplatesAdminTemplatesListInfiniteQueryKey>
export function apiV1DbTemplatesAdminTemplatesListInfiniteQueryOptions<TData = ApiV1DbTemplatesAdminTemplatesList["response"], TQueryData = ApiV1DbTemplatesAdminTemplatesList["response"]>(
  params?: ApiV1DbTemplatesAdminTemplatesList["queryParams"],
  options: ApiV1DbTemplatesAdminTemplatesList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1DbTemplatesAdminTemplatesList["response"], ApiV1DbTemplatesAdminTemplatesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesAdminTemplatesListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1DbTemplatesAdminTemplatesList["data"], ApiV1DbTemplatesAdminTemplatesList["error"]>({
        method: "get",
        url: `/api/v1/db_templates/admin/templates/`,
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
 * @summary Список шаблонов
 * @link /api/v1/db_templates/admin/templates/ */
export function useApiV1DbTemplatesAdminTemplatesListInfinite<
  TData = InfiniteData<ApiV1DbTemplatesAdminTemplatesList["response"]>,
  TQueryData = ApiV1DbTemplatesAdminTemplatesList["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesAdminTemplatesListInfiniteQueryKey,
>(
  params?: ApiV1DbTemplatesAdminTemplatesList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1DbTemplatesAdminTemplatesList["response"], ApiV1DbTemplatesAdminTemplatesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesAdminTemplatesList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1DbTemplatesAdminTemplatesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesAdminTemplatesListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1DbTemplatesAdminTemplatesList["data"], ApiV1DbTemplatesAdminTemplatesList["error"], TData, any>({
    ...apiV1DbTemplatesAdminTemplatesListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1DbTemplatesAdminTemplatesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
