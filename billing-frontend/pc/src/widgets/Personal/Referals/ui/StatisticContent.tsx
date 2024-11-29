import React, { useEffect, useState } from "react"
import { ApiV1UserReferralsStatisticsReadQueryParams, useApiV1UserReferralsStatisticsRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserReferralsStatisticsRead"
import { ApiV1UserReferralsTransactionsListQueryParams } from "@/src/gen/models/ts/apiController/ApiV1UserReferralsTransactionsList"
import { DateRange } from "react-day-picker"
import { formatDate } from "@/src/shared/utils"
import { useTranslations } from "next-intl"

type Props = { date: DateRange | undefined }
const mockStat = [
  { title: "Зарегистрировано за период", value: "0" },
  { title: "Пополнений баланса за период", value: "0" },
  { title: "Сумма пополнений за период", value: "$ 0.00" },
  { title: "Средняя сумма пополнений", value: "$ 0.00" },
  { title: "Реферальных за период", value: "$ 0.00" },
]

export const StatisticContent = ({ date }: Props) => {
  const t = useTranslations("referals")
  const [params, setParams] = useState<ApiV1UserReferralsStatisticsReadQueryParams>()
  const { data } = useApiV1UserReferralsStatisticsRead(params)
  console.log(data)

  useEffect(() => {
    if (!date || !date.from || !date.to) return
    setParams({ d_begin: formatDate(date?.from)!, d_end: formatDate(date?.to)! })
  }, [date])

  return (
    <>
      <p className="font-bold">{t("stats.title")}</p>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span>{t("stats.1")}</span>
          <span className="mx-1 mt-2 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
          <span>{data?.data.registered_count}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>{t("stats.2")}</span>
          <span className="mx-1 mt-2 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
          <span>{data?.data.replenishment_count}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>{t("stats.3")}</span>
          <span className="mx-1 mt-2 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
          <span>{data?.data.replenishment_amount}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>{t("stats.4")}</span>
          <span className="mx-1 mt-2 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
          <span>{data?.data.replenishment_avg}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>{t("stats.5")}</span>
          <span className="mx-1 mt-2 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
          <span>{data?.data.referral_amount}</span>
        </div>
      </div>
    </>
  )
}
