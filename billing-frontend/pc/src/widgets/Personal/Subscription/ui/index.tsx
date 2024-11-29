"use client"
import React, { FC, useEffect, useState } from "react"
import { useRef } from "react"
import { useDebounce } from "react-use"
import { Button } from "@/src/shared/ui/button"
import { AppHeader } from "@/src/widgets/AppHeader"
import { ChevronRight } from "lucide-react"
import { useRouter } from "next/router"
import { PageQueries } from "../types"
import { Input } from "@/src/shared/ui/input"
import { Checkbox } from "@/src/shared/ui/checkbox"
import { useDevices } from "../../../../shared/hooks/useDevices"
import { useSubscription } from "../../../../shared/hooks/useSubscription"
import { useQueryClient } from "@tanstack/react-query"
import { useApiV1UserDeviceListListInfinite } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList"
import { useTranslations } from "next-intl"

interface ComponentProps {}
const periodsData = [
  {
    daysCount: 30,
    percent: 0,
  },
  {
    daysCount: 90,
    percent: 0,
  },
]

type PeriodItemProps = (typeof periodsData)[number]

export const PersonalSubscription: FC<ComponentProps> = () => {
  const t = useTranslations("subscription")
  const { selectedDevices, onSelectOneDevice } = useDevices()
  const discountRef = useRef("")
  const router = useRouter()
  const { view } = router.query as PageQueries
  const [promoValue, promoValueSet] = useState("")
  const [autoRenewSubscr, autoRenewSubscrSet] = useState(false)
  const [selectedPeriod, selectedPeriodSet] = useState<PeriodItemProps>()
  const [flagErrSubscr, flagErrSubscrSet] = useState(false)
  const clientDevices = useQueryClient()
  const { queryKey: queryKeyInfinite } = useApiV1UserDeviceListListInfinite({ limit: 100000 })
  const {
    successPromocode,
    finishPrice,
    discount,
    handleSubmitPromo,
    discounts,
    messageSuccessPromo,
    promoErrorText,
    flagSubscription,
    succesSubscriptionDevices,
    errorSubscriptionDevices,
    subscrErrorText,
    buySubscription,
  } = useSubscription(selectedPeriod?.daysCount, autoRenewSubscr, promoValue)

  const onSelectPeriod = (periodsItem: PeriodItemProps) => () => {
    discountRef.current = `${periodsItem.daysCount}`
    selectedPeriodSet(periodsItem)
  }

  const onExtention = () => {
    buySubscription(false, undefined)
  }

  const onSetPeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!Number(event.target.value) && event.target.value.length > 0) return
    //** данные по скидке грузим с сервера и в вносим в стейт */
    let persentDiscount =
      +event.target.value < 180
        ? 0
        : +event.target.value >= 180 && +event.target.value < 360
          ? discounts.filter((item: { daysCount: number }) => item.daysCount === 180).map((value: { percent: number }) => value.percent)
          : discounts.filter((item: { daysCount: number }) => item.daysCount === 360).map((value: { percent: number }) => value.percent)
    selectedPeriodSet({ daysCount: +event.target.value, percent: persentDiscount && +persentDiscount })
    discountRef.current = event.target.value
  }

  const onAutoRenewSubscription = () => {
    autoRenewSubscrSet(!autoRenewSubscr)
  }

  const onPromoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = event.target.value.trim().toUpperCase()
    promoValueSet(val)
  }

  const [, cansel] = useDebounce(
    () => {
      if (promoValue.length > 0) {
        handleSubmitPromo()
        cansel()
      }
    },
    2000,
    [promoValue],
  )

  useEffect(() => {
    if (subscrErrorText) {
      flagErrSubscrSet(true)
      setTimeout(() => {
        flagErrSubscrSet(false)
      }, 5000)
    }
  }, [subscrErrorText])
  //* если успешно продлена, то ревалидация данных и отрпавление по маршруту в зависимсоти от величины массива
  useEffect(() => {
    if (succesSubscriptionDevices) {
      clientDevices.invalidateQueries(queryKeyInfinite)
      promoValueSet("")
      setTimeout(() => {
        if (selectedDevices.length === 1) {
          router.push("/personal-page/update-server")
        } else {
          router.push("/personal-page/devices")
        }
      }, 2000)
    }
  }, [router, selectedDevices, succesSubscriptionDevices])

  useEffect(() => {
    if (selectedDevices.length === 1) {
      localStorage.setItem(`updateServerID`, `${selectedDevices[0].id}`)
    }
  }, [selectedDevices])

  return (
    <>
      <div className="flex flex-1 flex-col">
        <AppHeader className="flex-row items-center justify-between space-y-2 lg:space-y-1">
          <h1>{t("h1")}</h1>
        </AppHeader>

        <div className="flex flex-1 flex-col bg-blue-soft pb-8 pt-4 lg:pb-4">
          <div className="container flex flex-1 space-x-4 lg:block lg:space-x-0 lg:px-0">
            {/* Perion START */}
            <div className="w-[66%] rounded-lg bg-white p-6 text-left lg:container">
              <p className="text-xl font-semibold lg:text-base"> {t("title")}</p>

              <div className="mt-6 flex space-x-6 lg:mt-4 lg:flex-col lg:space-x-0">
                {/* DISCOUNTS */}
                <div className="flex w-[40%] flex-col space-y-2 lg:w-full">
                  <Input
                    className="w-auto lg:inline-block"
                    placeholder={t("inputPlaceholder")}
                    value={discountRef.current}
                    onChange={onSetPeriodChange}
                  />
                  <div className="flex space-x-2">
                    {periodsData.concat(discounts).map((item, indx) => (
                      <div
                        className="flex-1 flex-col items-center space-y-1"
                        key={indx}
                      >
                        <Button
                          className="w-full"
                          variant={selectedPeriod?.daysCount === item.daysCount ? "accent" : "outline"}
                          onClick={onSelectPeriod(item)}
                        >
                          {item.daysCount}
                        </Button>
                        {item.percent > 0 && <div className="text-center text-sm font-bold text-purple">{item.percent} %</div>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CHECKBOXES */}
                <div className="mt-2.5 flex space-x-2 lg:mt-6">
                  <Checkbox
                    id="check1"
                    checked={autoRenewSubscr}
                    onCheckedChange={onAutoRenewSubscription}
                  />
                  <label
                    className="selection:bg-transparent"
                    htmlFor="check1"
                  >
                    {t("checkboxAuto")}
                  </label>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-xl font-semibold lg:text-base"> {t("devicesTitle")}</p>
                <div className="space-y-4">
                  {selectedDevices.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex space-x-2 lg:border-b lg:border-b-grey-soft lg:pb-2"
                      >
                        <Checkbox
                          onCheckedChange={() => onSelectOneDevice(item)}
                          checked={item.selected}
                          id={`${item.id}`}
                          disabled={selectedDevices.length === 1}
                        />
                        <label
                          className="w-full selection:bg-transparent"
                          htmlFor={`${item.id}`}
                        >
                          {item.name}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* Perion END */}

            {/* Стоимость подписки START */}
            <div className="flex h-auto w-full flex-1 flex-col rounded-lg bg-white p-6 lg:mt-4">
              <p className="text-2xl font-semibold lg:text-xl"> {t("priceCard.title")}</p>

              <div className="mt-6 flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <span>{t("priceCard.period")}:</span>
                  <span className="mx-2 mt-2 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
                  <span className="font-bold">{selectedPeriod && selectedPeriod?.daysCount >= 30 ? `${selectedPeriod?.daysCount} ${t("priceCard.periodHelper")}` : t("priceCard.periodNull")}</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span>{t("priceCard.devices")}:</span>
                  <span className="mx-2 mt-2 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
                  <span className="font-bold">{selectedDevices.length}</span>
                </div>

                <div className="relative mt-6 flex items-end justify-between overflow-hidden">
                  <div>
                    <div>Автопродление подписки</div>
                    <div className="relative z-10 inline-flex bg-white pr-2">с Вашего баланса:</div>
                    <div>{t("priceCard.renewal")}</div>
                    <div className="relative z-10 inline-flex bg-white pr-2">{t("priceCard.fromBalance")}:</div>
                  </div>
                  <span className="absolute bottom-1 right-8 w-full divide-dashed border border-b border-dashed border-grey-soft"></span>
                  <span className="font-bold">{autoRenewSubscr ? t("priceCard.yes") : t("priceCard.no")}</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span>{t("priceCard.discount")}:</span>
                  <span className="mx-2 mt-2 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
                  <span className="font-bold">{selectedPeriod && selectedPeriod?.daysCount >= 30 ? `${discount}%` : "0%"}</span>
                </div>

                <div className="my-6 flex items-center justify-between space-x-3">
                  <span>{t("priceCard.promocode")}:</span>
                  <Input
                    placeholder=""
                    value={promoValue}
                    onChange={onPromoInput}
                  />
                </div>
                {/* message */}
                <div>
                  <div className="min-h-5">
                    {successPromocode && flagSubscription && promoValue.length && selectedPeriod?.daysCount && selectedPeriod?.daysCount >= 30 ? (
                      <span className="text-purple">{messageSuccessPromo}</span>
                    ) : null}
                    {!promoErrorText && ((selectedPeriod && selectedPeriod?.daysCount < 30) || !selectedPeriod?.daysCount) ? <span>{t("priceCard.text1")}</span> : null}
                  </div>
                  <br />
                  <div> {t("priceCard.text2")}</div>
                </div>

                <br />
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-bold">{t("priceCard.total")}:</span>
                  <span className="mx-3 mt-4 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
                  <span className="text-xl font-bold">$ {selectedPeriod && selectedPeriod?.daysCount >= 30 ? finishPrice : "0"}</span>
                </div>
              </div>
              {/* Стоимость подписки END */}
            </div>
          </div>

          <AppHeader className="min-h-20 flex-row items-center justify-between py-8">
            {succesSubscriptionDevices && <p className="text-lg text-purple">{t("priceCard.success")}</p>}
            {subscrErrorText && flagErrSubscr && <p className="text-lg text-purple">{subscrErrorText}</p>}

            <Button
              className="ml-auto space-x-1 uppercase"
              disabled={!selectedPeriod || selectedPeriod.daysCount < 30 || succesSubscriptionDevices}
              onClick={onExtention}
            >
              <span>{t("priceCard.buy")}</span>
              <ChevronRight className="size-6 text-white" />
            </Button>
          </AppHeader>
        </div>
      </div>
    </>
  )
}
