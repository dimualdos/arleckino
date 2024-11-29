"use client"

import { Button } from "@/src/shared/ui/button"
import { AppHeader } from "@/src/widgets/AppHeader"
import React, { FC, useEffect, useState } from "react"
import { addDays, subDays } from "date-fns"
import { DateRange } from "react-day-picker"
import { Link2 } from "lucide-react"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { useRouter } from "next/router"
import { TableTransactions } from "./TableTransactions"
import { TableLinks } from "./TableLinks"
import { TableRequests } from "./TableRequests"
import { PageQueries } from "../types"
import { TableTabs } from "./TableTabs"
import { MobileDatePicker } from "../../../Dialogs/MobileDatePicker"
import { PeriodAndStats } from "./PeriodAndStats"
import { DialogReferal } from "@/src/widgets/Dialogs/referals/DialogReferal"
import { useApiV1UserInfoRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserInfoRead"
import { useTranslations } from "next-intl"

interface ComponentProps {}

export const PersonalReferals: FC<ComponentProps> = () => {
  const t = useTranslations("referals")
  const router = useRouter()
  const { view } = router.query as PageQueries
  const { data: userInfo } = useApiV1UserInfoRead()
  const { active: isActiveModalOutMoney, setActive: setChangeIsActiveModalOutMoney, toggle: toggleIsActiveModalOutMoney } = useToggle(false) // For modal
  const [selectedTabOutMoney, selectedTabOutMoneySet] = useState<1 | 2>(1) // For modal
  const onSelectTabOutMoney = (val: 1 | 2) => () => selectedTabOutMoneySet(val) // For modal
  const [refLink, setRefLink] = useState<string>("")
  const { active: isActiveDatePicker, setActive: setActiveDatePicker, toggle: toggleDatePicker } = useToggle()
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: subDays(new Date(), 90),
    to: new Date(),
  })

  useEffect(() => {
    setRefLink(window?.location.origin + userInfo?.data.referral_link)
  }, [userInfo?.data.referral_link])
  const copyTextToClipboard = (text: string) => {
    if (!navigator.clipboard) {
      console.log("Буфер обмена не доступен")
      return
    }
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Текст скопирован: " + text))
      .catch((err) => console.error("Ошибка при копировании текста: ", err))
  }

  const fixDigits = (num: number, digitsCount: number) => num.toFixed(digitsCount)
  console.log(date)

  return (
    <>
      <div className="flex flex-1 flex-col">
        <AppHeader className="flex-row items-center justify-between space-y-2 lg:space-y-1">
          <h1>{t("h1")}</h1>
        </AppHeader>

        <div className="flex flex-1 flex-col bg-blue-soft pb-8 pt-4">
          <div className="container mb-8 flex space-x-4 lg:block lg:space-x-0 lg:px-0">
            {/* Зарабатывайте на IPTV */}
            <div className="w-[66%] rounded-lg bg-white p-6 text-left lg:container">
              <p className="text-2xl font-semibold lg:text-xl">{t("title")}</p>
              <p className="mt-4">{t("descr1")}</p>
              <p className="mt-4">{t("descr2")}</p>
              <Button
                className="mt-5 inline-flex items-center space-x-2"
                variant={"link"}
                // TODO ВЕРСТКА ДОБАВИТЬ SUCCESS ALERT
                onClick={() => copyTextToClipboard(refLink)}
              >
                <Link2 className="size-5 text-accent" />
                <span>{t("copyLink")} </span>
              </Button>
            </div>
            {/* Доступно к выводу */}
            <div className="flex h-auto w-full flex-1 flex-col rounded-lg bg-white p-6 lg:mt-4">
              <p className="flex items-center justify-between whitespace-nowrap text-2xl font-semibold">
                <span className="lg:text-xl">{t("withdrawCard.available")}</span>
                <span className="ml-3 truncate text-purple">$ {fixDigits(userInfo?.data.referral_balance || 0, 2)}</span>
              </p>
              <div className="mt-4 flex items-center justify-between text-grey-hard">
                <p>{t("withdrawCard.earned")}</p>
                <p>$ {fixDigits(userInfo?.data.referral_transactions_amount_current_month || 0, 2)}</p>
              </div>
              <Button
                onClick={toggleIsActiveModalOutMoney}
                className="ml-auto mt-auto uppercase lg:hidden"
              >
                {t("withdrawCard.requestWithdraw")}
              </Button>
              <Button
                variant={"white"}
                onClick={toggleIsActiveModalOutMoney}
                className="mt-6 hidden uppercase text-grey-hard lg:flex lg:w-full"
              >
                {t("withdrawCard.requestWithdraw")}
              </Button>
            </div>
          </div>

          {/* Статистика по рефералам */}
          <div className="container flex flex-1 flex-col lg:rounded-lg lg:bg-white lg:p-4 lg:px-0 lg:pb-6 lg:pt-8">
            <p className="text-2xl font-semibold lg:px-6"> {t("table.title")}</p>

            {/* HEAD START */}
            <div className="mt-4 flex justify-between lg:block">
              <div className="h-full lg:px-6">
                <PeriodAndStats
                  isActive={isActiveDatePicker}
                  setActive={setActiveDatePicker}
                  toggleDatePicker={toggleDatePicker}
                  date={date}
                  setDate={setDate}
                />
              </div>
              <div className="mt-auto lg:mt-8">
                <TableTabs queries={{ view }} />
              </div>
            </div>
            {/* HEAD END */}

            {/* TABLES START */}
            <div className="mt-6 flex flex-1 flex-col lg:mt-4 lg:px-6">
              <div className="lg:rounded-0 relative flex-1 overflow-x-auto rounded-sm border bg-white lg:overflow-hidden lg:border-none">
                {!view || view === "transactions" ? <TableTransactions date={date} /> : null}
                {view === "links" ? <TableLinks date={date} /> : null}
                {view === "requests" ? <TableRequests date={date} /> : null}
              </div>
            </div>
            {/* TABLES END */}
          </div>
        </div>
      </div>

      <DialogReferal
        isActive={isActiveModalOutMoney}
        isActiveChange={setChangeIsActiveModalOutMoney}
        toggleModal={toggleIsActiveModalOutMoney}
        onSelectTabOutMoney={onSelectTabOutMoney}
        selectedTabOutMoney={selectedTabOutMoney}
      />

      <MobileDatePicker
        isActive={isActiveDatePicker}
        setActive={setActiveDatePicker}
        date={date}
        setDate={setDate}
      />
    </>
  )
}
