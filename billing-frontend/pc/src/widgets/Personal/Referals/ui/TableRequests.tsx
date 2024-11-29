import { useApiV1UserReferralsBalanceTransactionsList } from "@/src/gen/clients/hooks/apiController/useApiV1UserReferralsBalanceTransactionsList"
import { ApiV1UserReferralsTransactionsListQueryParams } from "@/src/gen/models/ts/apiController/ApiV1UserReferralsTransactionsList"
import { Button } from "@/src/shared/ui/button"
import { ReferalCard } from "@/src/shared/ui/referal-card"
import { formatDate } from "@/src/shared/utils"
import { AppPagination } from "@/src/widgets/AppPagination"
import { useTranslations } from "next-intl"
import React, { useEffect, useState } from "react"
import { DateRange } from "react-day-picker"

type Props = { date: DateRange | undefined }

export const TableRequests = ({ date }: Props) => {
  const t = useTranslations("referals")
  const [params, setParams] = useState<ApiV1UserReferralsTransactionsListQueryParams>()
  const { data: referals } = useApiV1UserReferralsBalanceTransactionsList(params)
  const referalsData = referals?.data.results

  const requestsStatus = {
    created: t("table.created"),
    approved: t("table.approved"),
    rejected: t("table.rejected"),
  }

  useEffect(() => {
    if (!date || !date.from || !date.to) return
    setParams({ d_begin: formatDate(date?.from)!, d_end: formatDate(date?.to)! })
  }, [date])

  return (
    <>
      <table className="w-full text-left lg:hidden">
        <thead className="bg-grey-extra-soft text-grey-extra-hard">
          <tr>
            <th
              scope="col"
              className="w-44 px-6 py-3.5 font-medium"
            >
              {t("table.date")}
            </th>
            <th
              scope="col"
              className="w-48 px-6 py-3.5 font-medium"
            >
              {t("table.paymentSystem")}
            </th>
            <th
              scope="col"
              className="px-6 py-3.5 font-medium"
            >
              {t("table.wallet")}
            </th>
            <th
              scope="col"
              className="px-6 py-3.5 font-medium"
            >
              {t("table.amount")}
            </th>
            <th
              scope="col"
              className="px-6 py-3.5 font-medium"
            >
              {t("table.status")}
            </th>
            <th
              scope="col"
              className="px-6 py-3.5 font-medium"
            >
              {t("table.done")}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* TODO ВЕРСТКА ADD NO DATA PLACEHOLDER */}
          {referalsData?.length === 0 && <>NO DATA</>}
          {referalsData?.map(({ dt_create, dt_update, withdrawal_system_name, withdrawal_system_user_identifier, amount, status }, indx) => (
            <tr
              key={indx}
              className="border-b bg-white"
            >
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium"
              >
                {formatDate(dt_create)}
              </th>
              <td className="px-6 py-4">
                <div className="line-clamp-1 font-medium">{withdrawal_system_name}</div>
              </td>
              <td className="px-6 py-4">
                <div className="line-clamp-1 font-medium">{withdrawal_system_user_identifier}</div>
              </td>
              <td className="px-6 py-4">
                <div className="line-clamp-1 font-medium">{amount}</div>
              </td>
              <td className="px-6 py-4">
                <div className="line-clamp-1 font-medium">{status && requestsStatus[status]}</div>
              </td>
              <td className="px-6 py-4">
                <div className="line-clamp-1 font-medium">{status !== "created" ? formatDate(dt_create) : ""}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="hidden space-y-10 lg:block">
        <div className="space-y-4">
          {/* TODO ВЕРСТКА ADD NO DATA PLACEHOLDER */}
          {referalsData?.length === 0 && <>NO DATA</>}
          {referalsData?.map(({ dt_create, dt_update, withdrawal_system_name, withdrawal_system_user_identifier, amount, status }, indx) => (
            <ReferalCard
              key={indx}
              items={[
                {
                  label: t("table.date"),
                  value: formatDate(dt_create)!,
                },
                {
                  label: t("table.paymentSystem"),
                  value: withdrawal_system_name,
                },
                {
                  label: t("table.wallet"),
                  value: withdrawal_system_user_identifier,
                },
                {
                  label: t("table.amount"),
                  value: amount?.toString()!,
                },
                {
                  label: t("table.status"),
                  value: status!,
                },
                {
                  label: t("table.done"),
                  value: status !== "created" ? formatDate(dt_create)! : "",
                },
              ]}
            />
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-10 hidden flex-col items-center space-y-4 md:flex">
          <Button
            className="w-full"
            variant={"outline"}
          >
            {t("table.next")}
          </Button>
          <div className="flex justify-center space-x-2">
            <AppPagination
              pathname={"/"}
              hideDots
              maxPageButtonsToShow={4}
              currentPage={1}
              onPageChange={() => console.log(1)}
              count={100}
              itemsPerPage={10}
            />
          </div>
        </div>
      </div>
    </>
  )
}
