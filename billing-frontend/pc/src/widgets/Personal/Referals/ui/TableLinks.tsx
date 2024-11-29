import { useApiV1UserReferralsLinkClickThroughsList } from "@/src/gen/clients/hooks/apiController/useApiV1UserReferralsLinkClickThroughsList"
import { ApiV1UserReferralsLinkClickThroughsListQueryParams } from "@/src/gen/models/ts/apiController/ApiV1UserReferralsLinkClickThroughsList"
import { Button } from "@/src/shared/ui/button"
import { ReferalCard } from "@/src/shared/ui/referal-card"
import { formatDate } from "@/src/shared/utils"
import { AppPagination } from "@/src/widgets/AppPagination"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { DateRange } from "react-day-picker"

type Props = { date: DateRange | undefined }

export const TableLinks = ({ date }: Props) => {
  const t = useTranslations("referals")
  const [params, setParams] = useState<ApiV1UserReferralsLinkClickThroughsListQueryParams>()
  const { data: referals } = useApiV1UserReferralsLinkClickThroughsList(params)
  const referalsData = referals?.data.results
  useEffect(() => {
    if (!date || !date.from || !date.to) return
    setParams({ d_begin: formatDate(date?.from)!, d_end: formatDate(date?.to)! })
  }, [date])

  const ReferralLinkClickThroughStatus = {
    transition: t("table.transition"),
    registration: t("table.registration"),
  }

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
              {t("table.action")}
            </th>
            <th
              scope="col"
              className="w-98 px-6 py-3.5 font-medium"
            >
              {t("table.user")}
            </th>
            <th
              scope="col"
              className="px-6 py-3.5 font-medium"
            >
              {t("table.source")}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* TODO ВЕРСТКА ADD NO DATA PLACEHOLDER */}
          {referalsData?.length === 0 && <>NO DATA</>}
          {referalsData?.map(({ dt_create, status, username, referer_url }, indx) => (
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
                <div className="line-clamp-1 font-medium">{status && ReferralLinkClickThroughStatus[status]}</div>
              </td>
              <td className="px-6 py-4">
                <div className="line-clamp-1 font-medium">{username}</div>
              </td>
              <td className="px-6 py-4">
                <div className="line-clamp-1 font-medium">{referer_url}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="hidden space-y-10 lg:block">
        <div className="space-y-4">
          {/* TODO ВЕРСТКА ADD NO DATA PLACEHOLDER */}
          {referalsData?.length === 0 && <>NO DATA</>}
          {referalsData?.map((item, indx) => (
            <ReferalCard
              key={indx}
              items={[
                {
                  label: t("table.date"),
                  value: formatDate(item.dt_create)!,
                },
                {
                  label: t("table.action"),
                  value: item.status!,
                },
                {
                  label: t("table.user"),
                  value: item.username!,
                },
                {
                  label: t("table.source"),
                  value: item.referer_url,
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
