import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminTemplateContentsReadQueryResponse,
  ApiV1DbTemplatesAdminTemplateContentsReadPathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplateContentsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminTemplateContentsReadClient = typeof client<ApiV1DbTemplatesAdminTemplateContentsReadQueryResponse, never, never>
type ApiV1DbTemplatesAdminTemplateContentsRead = {
  data: ApiV1DbTemplatesAdminTemplateContentsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1DbTemplatesAdminTemplateContentsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplateContentsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminTemplateContentsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplateContentsReadClient>>
  }
}
export const apiV1DbTemplatesAdminTemplateContentsReadQueryKey = (id: ApiV1DbTemplatesAdminTemplateContentsReadPathParams["id"]) =>
  [{ url: "/api/v1/db_templates/admin/template-contents/:id/", params: { id: id } }] as const
export type ApiV1DbTemplatesAdminTemplateContentsReadQueryKey = ReturnType<typeof apiV1DbTemplatesAdminTemplateContentsReadQueryKey>
export function apiV1DbTemplatesAdminTemplateContentsReadQueryOptions<
  TData = ApiV1DbTemplatesAdminTemplateContentsRead["response"],
  TQueryData = ApiV1DbTemplatesAdminTemplateContentsRead["response"],
>(
  id: ApiV1DbTemplatesAdminTemplateContentsReadPathParams["id"],
  options: ApiV1DbTemplatesAdminTemplateContentsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1DbTemplatesAdminTemplateContentsRead["response"], ApiV1DbTemplatesAdminTemplateContentsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesAdminTemplateContentsReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1DbTemplatesAdminTemplateContentsRead["data"], ApiV1DbTemplatesAdminTemplateContentsRead["error"]>({
        method: "get",
        url: `/api/v1/db_templates/admin/template-contents/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение содержимого шаблона
 * @link /api/v1/db_templates/admin/template-contents/:id/ */
export function useApiV1DbTemplatesAdminTemplateContentsRead<
  TData = ApiV1DbTemplatesAdminTemplateContentsRead["response"],
  TQueryData = ApiV1DbTemplatesAdminTemplateContentsRead["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesAdminTemplateContentsReadQueryKey,
>(
  id: ApiV1DbTemplatesAdminTemplateContentsReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1DbTemplatesAdminTemplateContentsRead["response"], ApiV1DbTemplatesAdminTemplateContentsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesAdminTemplateContentsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1DbTemplatesAdminTemplateContentsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesAdminTemplateContentsReadQueryKey(id)
  const query = useQuery<ApiV1DbTemplatesAdminTemplateContentsRead["data"], ApiV1DbTemplatesAdminTemplateContentsRead["error"], TData, any>({
    ...apiV1DbTemplatesAdminTemplateContentsReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1DbTemplatesAdminTemplateContentsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1DbTemplatesAdminTemplateContentsReadInfiniteQueryKey = (id: ApiV1DbTemplatesAdminTemplateContentsReadPathParams["id"]) =>
  [{ url: "/api/v1/db_templates/admin/template-contents/:id/", params: { id: id } }] as const
export type ApiV1DbTemplatesAdminTemplateContentsReadInfiniteQueryKey = ReturnType<typeof apiV1DbTemplatesAdminTemplateContentsReadInfiniteQueryKey>
export function apiV1DbTemplatesAdminTemplateContentsReadInfiniteQueryOptions<
  TData = ApiV1DbTemplatesAdminTemplateContentsRead["response"],
  TQueryData = ApiV1DbTemplatesAdminTemplateContentsRead["response"],
>(
  id: ApiV1DbTemplatesAdminTemplateContentsReadPathParams["id"],
  options: ApiV1DbTemplatesAdminTemplateContentsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1DbTemplatesAdminTemplateContentsRead["response"], ApiV1DbTemplatesAdminTemplateContentsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1DbTemplatesAdminTemplateContentsReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1DbTemplatesAdminTemplateContentsRead["data"], ApiV1DbTemplatesAdminTemplateContentsRead["error"]>({
        method: "get",
        url: `/api/v1/db_templates/admin/template-contents/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение содержимого шаблона
 * @link /api/v1/db_templates/admin/template-contents/:id/ */
export function useApiV1DbTemplatesAdminTemplateContentsReadInfinite<
  TData = InfiniteData<ApiV1DbTemplatesAdminTemplateContentsRead["response"]>,
  TQueryData = ApiV1DbTemplatesAdminTemplateContentsRead["response"],
  TQueryKey extends QueryKey = ApiV1DbTemplatesAdminTemplateContentsReadInfiniteQueryKey,
>(
  id: ApiV1DbTemplatesAdminTemplateContentsReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1DbTemplatesAdminTemplateContentsRead["response"], ApiV1DbTemplatesAdminTemplateContentsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1DbTemplatesAdminTemplateContentsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1DbTemplatesAdminTemplateContentsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1DbTemplatesAdminTemplateContentsReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1DbTemplatesAdminTemplateContentsRead["data"], ApiV1DbTemplatesAdminTemplateContentsRead["error"], TData, any>({
    ...apiV1DbTemplatesAdminTemplateContentsReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1DbTemplatesAdminTemplateContentsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
