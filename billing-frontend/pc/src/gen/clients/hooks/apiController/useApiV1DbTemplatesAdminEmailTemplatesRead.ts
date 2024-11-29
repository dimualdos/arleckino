import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1DbTemplatesAdminEmailTemplatesReadQueryResponse, ApiV1DbTemplatesAdminEmailTemplatesReadPathParams } from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminEmailTemplatesReadClient = typeof client<ApiV1DbTemplatesAdminEmailTemplatesReadQueryResponse, never, never>
type ApiV1DbTemplatesAdminEmailTemplatesRead = {
  data: ApiV1DbTemplatesAdminEmailTemplatesReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1DbTemplatesAdminEmailTemplatesReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminEmailTemplatesReadClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesReadClient>>
  }
}
export const apiV1DbTemplatesAdminEmailTemplatesReadQueryKey = (id: ApiV1DbTemplatesAdminEmailTemplatesReadPathParams["id"]) =>
  [{ url: "/api/v1/db_templates/admin/email-templates/:id/", params: { id: id } }] as const
export type ApiV1DbTemplatesAdminEmailTemplatesReadQueryKey = ReturnType<typeof apiV1DbTemplatesAdminEmailTemplatesReadQueryKey>
export function apiV1DbTemplatesAdminEmailTemplatesReadQueryOptions<TData = ApiV1DbTemplatesAdminEmailTemplatesRead["response"], TQueryData = ApiV1DbTemplatesAdminEmailTemplatesRead["response"]>(
  id: ApiV1DbTemplatesAdminEmailTemplatesReadPathParams["id"],
  options: ApiV1DbTemplatesAdminEmailTemplatesRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1DbTemplatesAdminEmailTemplatesRead["response"], ApiV1DbTemplatesAdminEmailTemplatesRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesAdminEmailTemplatesReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1DbTemplatesAdminEmailTemplatesRead["data"], ApiV1DbTemplatesAdminEmailTemplatesRead["error"]>({
        method: "get",
        url: `/api/v1/db_templates/admin/email-templates/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление шаблона
 * @link /api/v1/db_templates/admin/email-templates/:id/ */
export function useApiV1DbTemplatesAdminEmailTemplatesRead<
  TData = ApiV1DbTemplatesAdminEmailTemplatesRead["response"],
  TQueryData = ApiV1DbTemplatesAdminEmailTemplatesRead["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesAdminEmailTemplatesReadQueryKey,
>(
  id: ApiV1DbTemplatesAdminEmailTemplatesReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1DbTemplatesAdminEmailTemplatesRead["response"], ApiV1DbTemplatesAdminEmailTemplatesRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesAdminEmailTemplatesRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1DbTemplatesAdminEmailTemplatesRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesAdminEmailTemplatesReadQueryKey(id)
  const query = useQuery<ApiV1DbTemplatesAdminEmailTemplatesRead["data"], ApiV1DbTemplatesAdminEmailTemplatesRead["error"], TData, any>({
    ...apiV1DbTemplatesAdminEmailTemplatesReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1DbTemplatesAdminEmailTemplatesRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1DbTemplatesAdminEmailTemplatesReadInfiniteQueryKey = (id: ApiV1DbTemplatesAdminEmailTemplatesReadPathParams["id"]) =>
  [{ url: "/api/v1/db_templates/admin/email-templates/:id/", params: { id: id } }] as const
export type ApiV1DbTemplatesAdminEmailTemplatesReadInfiniteQueryKey = ReturnType<typeof apiV1DbTemplatesAdminEmailTemplatesReadInfiniteQueryKey>
export function apiV1DbTemplatesAdminEmailTemplatesReadInfiniteQueryOptions<
  TData = ApiV1DbTemplatesAdminEmailTemplatesRead["response"],
  TQueryData = ApiV1DbTemplatesAdminEmailTemplatesRead["response"],
>(
  id: ApiV1DbTemplatesAdminEmailTemplatesReadPathParams["id"],
  options: ApiV1DbTemplatesAdminEmailTemplatesRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1DbTemplatesAdminEmailTemplatesRead["response"], ApiV1DbTemplatesAdminEmailTemplatesRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesAdminEmailTemplatesReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1DbTemplatesAdminEmailTemplatesRead["data"], ApiV1DbTemplatesAdminEmailTemplatesRead["error"]>({
        method: "get",
        url: `/api/v1/db_templates/admin/email-templates/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление шаблона
 * @link /api/v1/db_templates/admin/email-templates/:id/ */
export function useApiV1DbTemplatesAdminEmailTemplatesReadInfinite<
  TData = InfiniteData<ApiV1DbTemplatesAdminEmailTemplatesRead["response"]>,
  TQueryData = ApiV1DbTemplatesAdminEmailTemplatesRead["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesAdminEmailTemplatesReadInfiniteQueryKey,
>(
  id: ApiV1DbTemplatesAdminEmailTemplatesReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1DbTemplatesAdminEmailTemplatesRead["response"], ApiV1DbTemplatesAdminEmailTemplatesRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesAdminEmailTemplatesRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1DbTemplatesAdminEmailTemplatesRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesAdminEmailTemplatesReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1DbTemplatesAdminEmailTemplatesRead["data"], ApiV1DbTemplatesAdminEmailTemplatesRead["error"], TData, any>({
    ...apiV1DbTemplatesAdminEmailTemplatesReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1DbTemplatesAdminEmailTemplatesRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
