"use client"

import iconFreeKassa from "@/public/icon-freekassa.svg"
import iconPayPal from "@/public/icon-paypal.svg"
import imageQrCode1 from "@/public/img-paypal-qr-1.png"
import imageQrCode2 from "@/public/img-paypal-qr-2.png"
import { useApiV1BillingPaymentSystemListList } from "@/src/gen/clients/hooks/apiController/useApiV1BillingPaymentSystemListList"
import { useApiV1BillingPaymentTransactionCreateCreate } from "@/src/gen/clients/hooks/apiController/useApiV1BillingPaymentTransactionCreateCreate"
import { Alert } from "@/src/shared/ui/alert"
import { BalanceCard } from "@/src/shared/ui/balance-card"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import { Checkbox } from "@/src/shared/ui/checkbox"
import { Input } from "@/src/shared/ui/input"
import { RadioGroup } from "@/src/shared/ui/radio-group"
import { AppHeader } from "@/src/widgets/AppHeader"
import { CheckedState } from "@radix-ui/react-checkbox"
import { isAxiosError } from "axios"
import clsx from "clsx"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { FC } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { FormProps } from "../types"
import { useTranslations } from "next-intl"

interface ComponentProps {}

const ContentFreeKassa = () => {
  const t = useTranslations("balance")
  return (
    <div className="lg:text-xs">
      {t("freeKassa")}
      <div>
        <Link
          href="https://anypay.io/support"
          target="_blank"
          className="text-accent lg:text-xs"
        >
          https://anypay.io/support
        </Link>
      </div>
    </div>
  )
}

const ContentPaypal = () => {
  const t = useTranslations("balance")
  return (
    <div className="space-y-4 lg:text-sm">
      <p className="border-b border-b-grey-soft pb-4">
        {t("paypal.text0")}
        <b>{t("paypal.textBold0")}</b>
      </p>
      <div className="flex border-b border-b-grey-soft pb-4">
        <p>
          {t("paypal.text1")}
          <br />
          Telegram: <b className="md:text-accent">@santa171</b>
          <br />
          E-mail: <b className="md:text-accent">171santa@gmail.com</b>
          <br />
          Skype: <b className="md:text-accent">171santa@gmail.com</b>
        </p>
        <img
          width={imageQrCode1.width}
          height={imageQrCode1.height}
          src={imageQrCode1.src}
          className="mb-auto ml-auto h-auto max-w-18 md:hidden"
          alt=""
        />
      </div>
      <div className="flex">
        <p>
          {t("paypal.text2")} <br />
          Snapchat: <b className="md:text-accent">@Ivin85</b> <br />
          ICQ: <b className="md:text-accent">@Ivin85</b> <br />
          E-mail: <b className="md:text-accent">eugenieugeni82@gmail.com</b> <br />
          Skype: <b className="md:text-accent">Paypal-Tv</b>
        </p>
        <img
          width={imageQrCode2.width}
          height={imageQrCode2.height}
          src={imageQrCode2.src}
          className="mb-auto ml-auto h-auto max-w-18 md:hidden"
          alt=""
        />
      </div>
    </div>
  )
}

export const PersonalBalance: FC<ComponentProps> = () => {
  const t = useTranslations("balance")
  const useGetPayments = useApiV1BillingPaymentSystemListList()
  const useAddBalance = useApiV1BillingPaymentTransactionCreateCreate()
  const useFormValidation = useForm<FormProps>({
    mode: "onChange",
    defaultValues: {
      isAgree: false,
      amount: 0,
    },
  })

  const watchAmount = useFormValidation.watch("amount")
  const watchIsAgree = useFormValidation.watch("isAgree")
  const watchSelectedPayment = useFormValidation.watch("selectedPaymentMethod")
  const isButtonDisalbed = !useFormValidation.formState.isValid || !useFormValidation.formState.isDirty || !watchIsAgree || !!watchSelectedPayment == false || useAddBalance.isLoading

  const onSelectBalance = (value: string | undefined) => {
    const match = useGetPayments.data?.data.results.find((search) => `${search.id}` === `${value}`)
    if (match && match.title.toLowerCase().startsWith("pay")) {
      useFormValidation.setValue("selectedPaymentMethod", null, {
        shouldValidate: true,
        shouldDirty: true,
      })
    }
    if (match && match.id && !match.title.toLowerCase().startsWith("pay")) {
      useFormValidation.setValue("payment_system_id", match.id, {
        shouldValidate: true,
        shouldDirty: true,
      })
      useFormValidation.setValue("selectedPaymentMethod", match, {
        shouldValidate: true,
        shouldDirty: true,
      })
    }
  }

  const onAgreeChange = (checked: CheckedState) => {
    useFormValidation.setValue("isAgree", Boolean(checked), {
      shouldValidate: true,
      shouldDirty: true,
    })
  }

  const renderPaymentCards = () => {
    if (useGetPayments.isLoading) {
      return (
        <>
          <RadioGroup
            className="mt-4"
            onValueChange={onSelectBalance}
          >
            {Array.from({ length: 2 }).map((item, key) => (
              <BalanceCard
                isLoading
                key={key}
                radioId={`${key}`}
                radioValue={`${key}`}
                walletProps={{
                  name: "",
                  content: <></>,
                  image: null,
                }}
              />
            ))}
          </RadioGroup>
        </>
      )
    }

    if (!useGetPayments.isLoading && useGetPayments.data?.data) {
      return (
        <>
          <RadioGroup
            className="mt-4"
            onValueChange={onSelectBalance}
          >
            {useGetPayments.data.data.results.map((item, key) => {
              const isFreeKassa = item.title.toLowerCase().startsWith("free")
              const isPayPal = item.title.toLowerCase().startsWith("pay")
              const currentIcon: StaticImageData | null = isFreeKassa ? iconFreeKassa : isPayPal ? iconPayPal : null
              const currentContent = isFreeKassa ? <ContentFreeKassa /> : isPayPal ? <ContentPaypal /> : null
              return (
                <BalanceCard
                  key={key}
                  radioId={`${item.id}`}
                  radioValue={`${item.id}`}
                  walletProps={{
                    name: item.title,
                    content: currentContent,
                    image: currentIcon,
                  }}
                />
              )
            })}
          </RadioGroup>
        </>
      )
    }
    return null
  }

  const onSubmit: SubmitHandler<FormProps> = async (data: FormProps) => {
    if (!data.selectedPaymentMethod?.id) return
    try {
      const res = await useAddBalance.mutateAsync({ amount: data.amount, payment_system_id: data.selectedPaymentMethod.id, force: true, policy_agreement: data.isAgree })
      if (Object.hasOwn(res.data, "payment_url")) {
        // @ts-ignore
        window.open(res.data.payment_url)
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    }
  }

  return (
    <>
      <div
        className={clsx("flex flex-1 flex-col", {
          "cursor-wait": useAddBalance.isLoading,
        })}
      >
        <AppHeader className="flex-row items-center justify-between space-y-2 lg:space-y-1">
          <h1>{t("h1")}</h1>
        </AppHeader>

        <div className="flex flex-1 flex-col bg-blue-soft pb-8 pt-4 lg:pb-4">
          {/* CONTENT START */}
          <form
            onSubmit={useFormValidation.handleSubmit(onSubmit)}
            className="container max-w-[885px] flex-1 rounded-lg bg-white p-8 text-left lg:container lg:p-6"
          >
            <p className="text-xl font-semibold lg:text-base">{t("title")}</p>

            {renderPaymentCards()}

            <div>
              <div className="mt-8 flex flex-col space-y-0.5">
                <div className="text-grey-hard">{t("summ")}</div>
                <div className="flex items-center lg:block">
                  <Input
                    disabled={!watchSelectedPayment}
                    type="number"
                    {...useFormValidation.register("amount", {
                      required: t("minimalSumm"),
                      validate: (value) => {
                        return value <= 9 ? t("minimalSumm") : true
                      },
                    })}
                    className="w-full max-w-[240px] lg:max-w-none"
                  />
                  <span className="hidden text-xs text-grey-hard lg:block">{t("minimalSumm")}</span>

                  <div className="ml-6 lg:ml-0 lg:mt-8">
                    {/* TODO: How to add a bonus */}
                    <p className="lg:hidden">
                      {t("toBeCredited")}: {watchAmount} $
                    </p>
                    {/* <p className="lg:hidden">Будет зачислено: 100.00 $ + бонус 10.00 $</p> */}
                    <p className="hidden text-xl font-bold lg:block">
                      <span className="text-grey-hard">
                        {t("toBeCreditedOnBalance")}: {watchAmount} $
                      </span>
                      {/* TODO: How to add a bonus */}
                      {/* <span>$ 100.00 + бонус $ 10.00</span> */}
                    </p>
                  </div>
                </div>
                {!useFormValidation.formState.errors?.amount ? null : <span className="text-xs text-grey-hard lg:hidden">{t("minimalSumm")}</span>}
              </div>

              {/* AGREE START */}
              <div className="mt-8 flex space-x-2">
                <Checkbox
                  disabled={!watchSelectedPayment}
                  onCheckedChange={onAgreeChange}
                  checked={watchIsAgree}
                  id={"agree"}
                />
                <label
                  className="flex flex-col space-y-1 text-left selection:bg-transparent"
                  htmlFor={"agree"}
                >
                  <span>{t("checkboxTitle")} </span>
                  <span className="text-sm">{t("checkboxDesc")} </span>
                </label>
              </div>
              {/* AGREE END */}

              <div className="mt-8">
                <Alert description={t("alert")} />
              </div>
            </div>

            {/* ACTIONS START */}
            <div className="mt-8 flex items-center space-x-2 lg:space-x-0">
              <Button
                type="submit"
                disabled={isButtonDisalbed}
                className="uppercase lg:w-full"
              >
                {t("buttonTopup")}
              </Button>
              <Link
                href="/personal-page/profile"
                className={buttonVariants({ className: "uppercase lg:hidden", variant: "outline" })}
              >
                {t("buttonCancel")}
              </Link>
            </div>
            {/* ACTIONS END */}

            {/* CONTENT END */}
          </form>
        </div>
      </div>
    </>
  )
}
