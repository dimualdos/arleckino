import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationRequest,
  ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationResponse,
  ApiV1UserReferralsBalanceWithdrawalTransactionsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate"

/**
 * @description Список сообщений **message_type**:* **not_enough_money**Недостаточно средств на балансе реферального счета.* **withdrawal_transaction_is_transfered**Транзакция вывода средств уже обработана.* **amount_must_be_positive**Сумма должна быть больше нуля.* **amount_should_not_exceed_balance**Сумма не должна превышать остаток на балансе.
 * @summary Просмотр, изменение и удаление транзакции вывода средств
 * @link /api/v1/user/referrals/balance/withdrawal-transactions/:id */
export async function apiV1UserReferralsBalanceWithdrawalTransactionsUpdate(
  { id }: ApiV1UserReferralsBalanceWithdrawalTransactionsUpdatePathParams,
  data: ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationResponse>> {
  const res = await client<ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationResponse, ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/user/referrals/balance/withdrawal-transactions/${id}`,
    data,
    ...options,
  })
  return res
}
