import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserReferralsBalanceWithdrawalTransactionsReadQueryResponse,
  ApiV1UserReferralsBalanceWithdrawalTransactionsReadPathParams,
} from "../../../models/ts/apiController/ApiV1UserReferralsBalanceWithdrawalTransactionsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserReferralsBalanceWithdrawalTransactionsReadClient = typeof client<ApiV1UserReferralsBalanceWithdrawalTransactionsReadQueryResponse, never, never>
type ApiV1UserReferralsBalanceWithdrawalTransactionsRead = {
  data: ApiV1UserReferralsBalanceWithdrawalTransactionsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserReferralsBalanceWithdrawalTransactionsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserReferralsBalanceWithdrawalTransactionsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserReferralsBalanceWithdrawalTransactionsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserReferralsBalanceWithdrawalTransactionsReadClient>>
  }
}
export const apiV1UserReferralsBalanceWithdrawalTransactionsReadQueryKey = (id: ApiV1UserReferralsBalanceWithdrawalTransactionsReadPathParams["id"]) =>
  [{ url: "/api/v1/user/referrals/balance/withdrawal-transactions/:id", params: { id: id } }] as const
export type ApiV1UserReferralsBalanceWithdrawalTransactionsReadQueryKey = ReturnType<typeof apiV1UserReferralsBalanceWithdrawalTransactionsReadQueryKey>
export function apiV1UserReferralsBalanceWithdrawalTransactionsReadQueryOptions<
  TData = ApiV1UserReferralsBalanceWithdrawalTransactionsRead["response"],
  TQueryData = ApiV1UserReferralsBalanceWithdrawalTransactionsRead["response"],
>(
  id: ApiV1UserReferralsBalanceWithdrawalTransactionsReadPathParams["id"],
  options: ApiV1UserReferralsBalanceWithdrawalTransactionsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserReferralsBalanceWithdrawalTransactionsRead["response"], ApiV1UserReferralsBalanceWithdrawalTransactionsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsBalanceWithdrawalTransactionsReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserReferralsBalanceWithdrawalTransactionsRead["data"], ApiV1UserReferralsBalanceWithdrawalTransactionsRead["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/balance/withdrawal-transactions/${id}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **not_enough_money**Недостаточно средств на балансе реферального счета.* **withdrawal_transaction_is_transfered**Транзакция вывода средств уже обработана.* **amount_must_be_positive**Сумма должна быть больше нуля.* **amount_should_not_exceed_balance**Сумма не должна превышать остаток на балансе.
 * @summary Просмотр, изменение и удаление транзакции вывода средств
 * @link /api/v1/user/referrals/balance/withdrawal-transactions/:id */
export function useApiV1UserReferralsBalanceWithdrawalTransactionsRead<
  TData = ApiV1UserReferralsBalanceWithdrawalTransactionsRead["response"],
  TQueryData = ApiV1UserReferralsBalanceWithdrawalTransactionsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsBalanceWithdrawalTransactionsReadQueryKey,
>(
  id: ApiV1UserReferralsBalanceWithdrawalTransactionsReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserReferralsBalanceWithdrawalTransactionsRead["response"], ApiV1UserReferralsBalanceWithdrawalTransactionsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserReferralsBalanceWithdrawalTransactionsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserReferralsBalanceWithdrawalTransactionsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsBalanceWithdrawalTransactionsReadQueryKey(id)
  const query = useQuery<ApiV1UserReferralsBalanceWithdrawalTransactionsRead["data"], ApiV1UserReferralsBalanceWithdrawalTransactionsRead["error"], TData, any>({
    ...apiV1UserReferralsBalanceWithdrawalTransactionsReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserReferralsBalanceWithdrawalTransactionsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserReferralsBalanceWithdrawalTransactionsReadInfiniteQueryKey = (id: ApiV1UserReferralsBalanceWithdrawalTransactionsReadPathParams["id"]) =>
  [{ url: "/api/v1/user/referrals/balance/withdrawal-transactions/:id", params: { id: id } }] as const
export type ApiV1UserReferralsBalanceWithdrawalTransactionsReadInfiniteQueryKey = ReturnType<typeof apiV1UserReferralsBalanceWithdrawalTransactionsReadInfiniteQueryKey>
export function apiV1UserReferralsBalanceWithdrawalTransactionsReadInfiniteQueryOptions<
  TData = ApiV1UserReferralsBalanceWithdrawalTransactionsRead["response"],
  TQueryData = ApiV1UserReferralsBalanceWithdrawalTransactionsRead["response"],
>(
  id: ApiV1UserReferralsBalanceWithdrawalTransactionsReadPathParams["id"],
  options: ApiV1UserReferralsBalanceWithdrawalTransactionsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserReferralsBalanceWithdrawalTransactionsRead["response"], ApiV1UserReferralsBalanceWithdrawalTransactionsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsBalanceWithdrawalTransactionsReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserReferralsBalanceWithdrawalTransactionsRead["data"], ApiV1UserReferralsBalanceWithdrawalTransactionsRead["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/balance/withdrawal-transactions/${id}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **not_enough_money**Недостаточно средств на балансе реферального счета.* **withdrawal_transaction_is_transfered**Транзакция вывода средств уже обработана.* **amount_must_be_positive**Сумма должна быть больше нуля.* **amount_should_not_exceed_balance**Сумма не должна превышать остаток на балансе.
 * @summary Просмотр, изменение и удаление транзакции вывода средств
 * @link /api/v1/user/referrals/balance/withdrawal-transactions/:id */
export function useApiV1UserReferralsBalanceWithdrawalTransactionsReadInfinite<
  TData = InfiniteData<ApiV1UserReferralsBalanceWithdrawalTransactionsRead["response"]>,
  TQueryData = ApiV1UserReferralsBalanceWithdrawalTransactionsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsBalanceWithdrawalTransactionsReadInfiniteQueryKey,
>(
  id: ApiV1UserReferralsBalanceWithdrawalTransactionsReadPathParams["id"],
  options: {
    query?: Partial<
      UseInfiniteQueryOptions<ApiV1UserReferralsBalanceWithdrawalTransactionsRead["response"], ApiV1UserReferralsBalanceWithdrawalTransactionsRead["error"], TData, TQueryData, TQueryKey>
    >
    client?: ApiV1UserReferralsBalanceWithdrawalTransactionsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserReferralsBalanceWithdrawalTransactionsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsBalanceWithdrawalTransactionsReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserReferralsBalanceWithdrawalTransactionsRead["data"], ApiV1UserReferralsBalanceWithdrawalTransactionsRead["error"], TData, any>({
    ...apiV1UserReferralsBalanceWithdrawalTransactionsReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserReferralsBalanceWithdrawalTransactionsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
