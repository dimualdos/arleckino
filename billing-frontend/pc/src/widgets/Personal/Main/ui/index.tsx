"use client"

import { useAuth } from "@/src/shared/hooks/useAuth"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import { AppHeader } from "@/src/widgets/AppHeader"
import React, { FC, useState } from "react"
import { format } from "date-fns"
import { AlertCircle, AlertCircleIcon, CheckCircle2, Edit2, LucideMoreVertical, X } from "lucide-react"
import { Label } from "@/src/shared/ui/label"
import { Input } from "@/src/shared/ui/input"
import { Switch } from "@/src/shared/ui/switch"
import { useSelectTimeZone } from "@/src/widgets/SelectTimeZone/hooks"
import { TrashIcon } from "@radix-ui/react-icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import clsx from "clsx"
import { usePersonalMain } from "../hooks"
import { UpdateUserProfileFieldProps } from "../types"
import { InputMessage } from "@/src/shared/ui/input-message"
import { sleep } from "@/src/shared/helpers/sleep"
import { useMedia } from "react-use"
import { isAxiosError } from "axios"
import { toast } from "sonner"
import { apiV1UserProfileWithdrawalWalletsDelete } from "@/src/gen/clients/axios/apiService"
import { useApiV1UserProfileWithdrawalWalletsList } from "@/src/gen/clients/hooks/apiController/useApiV1UserProfileWithdrawalWalletsList"
import { SelectTimeZone } from "@/src/widgets/SelectTimeZone/ui"
import { WithdrawalSystem } from "@/src/gen/models/ts/WithdrawalSystem"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { WithdrawalWallet } from "@/src/gen/models/ts/WithdrawalWallet"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { AppPagination } from "@/src/widgets/AppPagination"
import { useRouter } from "next/router"
import { CredenzaDeletePayment } from "@/src/widgets/Dialogs/profile/CredenzaDeletePayment"
import { CredenzaDeleteAccount } from "@/src/widgets/Dialogs/profile/CredenzaDeleteAccount"
import { CredenzaChangeEmail } from "@/src/widgets/Dialogs/profile/CredenzaChangeEmail"
import { CredenzaChangePassword } from "@/src/widgets/Dialogs/profile/CredenzaChangePassword"
import { CredenzaConfirmPaymentWallet } from "@/src/widgets/Dialogs/profile/CredenzaConfirmPaymentWallet"
import { CredenzaAddPayment } from "@/src/widgets/Dialogs/profile/CredenzaAddPayment"
import { DrawerRootActions } from "@/src/widgets/Dialogs/profile/DrawerRootActions"
import { SimpleTooltip } from "@/src/shared/ui/simple-tooltip"

interface ComponentProps {}

// Настройки профиля
export const PersonalMain: FC<ComponentProps> = () => {
  const { signOut, redirectIfNotSignIn } = useAuth()
  const useApiUserWalletList = useApiV1UserProfileWithdrawalWalletsList()
  const pageState = usePersonalMain()
  const {
    usePageState,

    useApiChangeEmail,
    useApiChangePassword,
    useApiV1User,
    useApiProfile,
    useApiV1UserLogs,
    useApiBillingPayment,
    useApiWalletListCreate,
    logsState,
    watchUserWalletRequisites,
    watch_is_balance_notifications,
    watch_is_get_news_notifications,
    watch_is_notify_subscription_expiration,
    watch_is_referral_notifications,
    watch_is_subscribe_mail_list,
    watch_is_system_events_notifications,
  } = pageState

  const { selectedTimeZone, selectedTimeZoneSet, useApiV1UserTimezoneListQuery } = useSelectTimeZone()
  const isSmall = useMedia("(max-width: 767px)", false)
  const tHeader = useTranslations("header")
  const t = useTranslations("profileSettings")
  const router = useRouter()

  const qCurrentPage = (router.query.page as string) ?? "1"
  const currentPage = parseInt(qCurrentPage)

  const { active: isActiveRootSheet, close: closeRootSheet, setActive: changeRootSheet, toggle: toggleRootSheet } = useToggle()
  const { active: isActiveDeleteAccount, close: closeDeleteAccount, setActive: changeDeleteAccount, toggle: toggleDeleteAccount } = useToggle()
  const { active: isActiveDeletePayment, close: closeDeletePayment, setActive: changeDeletePayment, toggle: toggleDeletePayment } = useToggle()
  const { active: isActiveChangeEmail, close: closeChangeEmail, setActive: changeChangeEmail } = useToggle()
  const { active: isActiveChangePassword, setActive: changeChangePassword } = useToggle()
  const { active: isActiveConfirmPaymentWallet, setActive: changeConfirmPaymentWallet, toggle: toggleChangeConfirmPaymentWallet } = useToggle()
  const { active: isActiveAddPayment, close: closeAddPayment, setActive: changeAddPayment, toggle: toggleAddPayment } = useToggle()
  const [selectedPayment, selectedPaymentSet] = useState<WithdrawalSystem | null>(null)
  const [selectedPaymentToDelete, selectedPaymentToDeleteSet] = useState<WithdrawalWallet | null>(null)

  const onNotifyChange = (field: keyof UpdateUserProfileFieldProps) => async (value: boolean) => {
    try {
      await useApiProfile.mutateAsync({
        [field]: value,
      })
      usePageState.setValue(`${field}`, value)
    } catch (error) {}
  }

  const onChangeEmail = async () => {
    try {
      const req = await useApiChangeEmail.mutateAsync()
      await sleep(500)
      changeChangeEmail(true)
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.data.message?.length) {
          toast.error(error.response?.data.message)
        }
      }
    }
  }

  const onChangePassword = async () => {
    if (!useApiV1User.data?.data.email) return
    try {
      await useApiChangePassword.mutateAsync({ email: useApiV1User.data.data.email })
      await sleep(500)
      changeChangePassword(true)
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    }
  }

  const onSelectWallet = (walletId: string) => {
    const match = useApiBillingPayment.data?.data.results.find((search) => `${search.id}` === walletId)
    if (!match) return
    usePageState.resetField("userWalletRequisites")
    selectedPaymentSet(match)
  }

  const onSelectPaymentToDeleteAndOpenAlert = (wallet: WithdrawalWallet) => () => {
    selectedPaymentToDeleteSet(wallet)
    closeAddPayment()
    toggleDeletePayment()
  }

  const onConfirmAddPayment = async () => {
    if (!selectedPayment) return
    const match = useApiUserWalletList.data?.data.results.find((wallet) => `${wallet.id}` === `${selectedPayment.id}`)
    if (match) return
    try {
      await useApiWalletListCreate.mutateAsync({ withdrawal_system_id: selectedPayment.id!, withdrawal_system_user_identifier: usePageState.getValues("userWalletRequisites") })
      await sleep(500)
      useApiUserWalletList.refetch()
      toggleChangeConfirmPaymentWallet()
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    }
  }

  const onConfirmRemoveWallet = (wallet: WithdrawalWallet) => async () => {
    try {
      await apiV1UserProfileWithdrawalWalletsDelete({ id: `${wallet.id}` })
      useApiUserWalletList.refetch()
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    } finally {
      closeDeletePayment()
    }
  }

  function handleLoadMoreLogs(): void {
    logsState.logsQuerySet((prev) => ({ ...prev, limit: prev?.limit ? prev.limit + 6 : 6, page: currentPage }))
  }

  function handleChangePage(pageNumber: number): void {
    logsState.logsQuerySet((prev) => ({ ...prev, page: pageNumber }))
  }

  redirectIfNotSignIn()

  return (
    <>
      <form className="flex flex-1 flex-col">
        <AppHeader className="flex-row items-center justify-between space-y-2 lg:space-y-1">
          <div className="flex space-x-2 truncate xl:flex-col xl:space-x-0 xl:space-y-1">
            <h1>{tHeader("mainMenu.viewSettings")}</h1>
            <span className="max-w-lg text-grey lg:text-base lg:font-medium lg:text-grey-extra-hard md:max-w-none">{useApiV1User.data?.data.email}</span>
          </div>

          <div className="flex items-start space-x-2 lg:hidden lg:flex-row-reverse">
            <Button
              className="selection:bg-transparent"
              onClick={signOut}
              variant={"outline"}
            >
              {t("exitAllButton")}
            </Button>
            <Button
              onClick={toggleDeleteAccount}
              size={"none"}
              className="size-10"
              variant={"outline"}
            >
              <TrashIcon className="size-6" />
            </Button>
          </div>
          <Button
            onClick={toggleRootSheet}
            className="hidden lg:inline-flex"
            variant={"outline"}
            size={"icon"}
          >
            <LucideMoreVertical />
          </Button>
        </AppHeader>

        <div className="flex-1 bg-blue-soft">
          <div className="container lg:px-0">
            <div className="mb-9 mt-4 rounded-md bg-white px-10 py-8 lg:bg-transparent lg:p-0">
              {/* ROOT */}
              <div className="space-y-10 lg:space-y-4">
                {/* Личная информация + Уведомления */}
                <div className="flex space-x-28 lg:block lg:space-x-0 lg:space-y-4">
                  {/* Личная информация */}
                  <div className="w-full space-y-4 lg:container lg:rounded-lg lg:bg-white lg:py-6">
                    <p className="text-xl font-bold"> {t("title1")}</p>
                    <div className="space-y-px">
                      <Label htmlFor="email"> {t("email")}</Label>
                      <div className="flex space-x-2">
                        <Input
                          className="pointer-events-none"
                          readOnly
                          id="email"
                          defaultValue={useApiV1User.data?.data.email}
                        />

                        <Button
                          onClick={onChangeEmail}
                          type="button"
                          variant={"accent-app"}
                          size={"icon"}
                        >
                          <Edit2 className="size-4 text-white md:text-foreground" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-px">
                      <Label className="text-grey-hard"> {t("password")}</Label>
                      <div className="flex space-x-2">
                        <div className="relative w-full">
                          <Input
                            className="pointer-events-none"
                            readOnly
                            value={"********"}
                            autoComplete="off"
                            type={"password"}
                          />
                        </div>
                        <Button
                          onClick={onChangePassword}
                          type="button"
                          variant={"accent-app"}
                          size={"icon"}
                        >
                          <Edit2 className="size-4 text-white md:text-foreground" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-px">
                      <Label className="text-grey-hard"> {t("timezone")}</Label>
                      <div className="min-h-10 w-full max-w-[500px]">
                        <SelectTimeZone
                          availableTimeZones={useApiV1UserTimezoneListQuery.data?.data}
                          selectedTimeZone={selectedTimeZone}
                          selectedTimeZoneSet={selectedTimeZoneSet}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Уведомления */}
                  <div className="w-full space-y-4 lg:container lg:space-y-0 lg:rounded-lg lg:bg-white lg:py-6">
                    <p className="text-xl font-bold"> {t("title2")}</p>
                    <div className="space-y-5 lg:space-y-0 *:lg:pt-4">
                      {/* 1 */}
                      <Label
                        htmlFor={"is_balance_notifications"}
                        className="flex items-center space-x-2 lg:cursor-pointer lg:flex-row-reverse lg:items-start lg:justify-between lg:space-x-0 lg:border-b lg:pb-4 lg:last:border-0"
                      >
                        <Switch
                          {...usePageState.register("is_balance_notifications")}
                          onCheckedChange={onNotifyChange("is_balance_notifications")}
                          checked={watch_is_balance_notifications}
                          className="lg:ml-2"
                          id={"is_balance_notifications"}
                        />
                        <span className="lg:text-foreground"> {t("switch1")}</span>
                      </Label>

                      {/* 2 */}
                      <Label
                        htmlFor={"is_notify_subscription_expiration"}
                        className="flex items-center space-x-2 lg:cursor-pointer lg:flex-row-reverse lg:items-start lg:justify-between lg:space-x-0 lg:border-b lg:pb-4 lg:last:border-0"
                      >
                        <Switch
                          {...usePageState.register("is_notify_subscription_expiration")}
                          onCheckedChange={onNotifyChange("is_notify_subscription_expiration")}
                          checked={watch_is_notify_subscription_expiration}
                          className="lg:ml-2"
                          id={"is_notify_subscription_expiration"}
                        />
                        <span className="lg:text-foreground">{t("switch2")}</span>
                      </Label>

                      {/* 3 */}
                      <Label
                        htmlFor={"is_system_events_notifications"}
                        className="flex items-center space-x-2 lg:cursor-pointer lg:flex-row-reverse lg:items-start lg:justify-between lg:space-x-0 lg:border-b lg:pb-4 lg:last:border-0"
                      >
                        <Switch
                          {...usePageState.register("is_system_events_notifications")}
                          onCheckedChange={onNotifyChange("is_system_events_notifications")}
                          checked={watch_is_system_events_notifications}
                          className="lg:ml-2"
                          id={"is_system_events_notifications"}
                        />
                        <span className="lg:text-foreground">{t("switch3")}</span>
                      </Label>

                      {/* 4 */}
                      <Label
                        htmlFor={"is_get_news_notifications"}
                        className="flex items-center space-x-2 lg:cursor-pointer lg:flex-row-reverse lg:items-start lg:justify-between lg:space-x-0 lg:border-b lg:pb-4 lg:last:border-0"
                      >
                        <Switch
                          {...usePageState.register("is_get_news_notifications")}
                          onCheckedChange={onNotifyChange("is_get_news_notifications")}
                          checked={watch_is_get_news_notifications}
                          className="lg:ml-2"
                          id={"is_get_news_notifications"}
                        />
                        <span className="lg:text-foreground">{t("switch4")}</span>
                      </Label>

                      {/* 5 */}
                      <Label
                        htmlFor={"is_referral_notifications"}
                        className="flex items-center space-x-2 lg:cursor-pointer lg:flex-row-reverse lg:items-start lg:justify-between lg:space-x-0 lg:border-b lg:pb-4 lg:last:border-0"
                      >
                        <Switch
                          {...usePageState.register("is_referral_notifications")}
                          onCheckedChange={onNotifyChange("is_referral_notifications")}
                          checked={watch_is_referral_notifications}
                          className="lg:ml-2"
                          id={"is_referral_notifications"}
                        />
                        <span className="lg:text-foreground">{t("switch5")}</span>
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Счета и финансы */}
                <div className="w-full max-w-xl lg:container lg:max-w-none lg:rounded-lg lg:bg-white lg:py-6">
                  <p className="text-xl font-bold">{t("title3")}</p>
                  <Label className="mt-4">{t("description3")}</Label>

                  {useApiUserWalletList.data?.data.results && (
                    <>
                      {/* DESKTOP */}
                      <div className="mt-4 border-t md:hidden">
                        {useApiUserWalletList.data?.data.results.map((wallet, indx) => {
                          console.log("wallet: ", wallet)

                          const { id, is_verified, withdrawal_system, user } = wallet
                          return (
                            <div
                              className="flex border-b px-4 py-2.5"
                              key={id}
                            >
                              <span className="w-[28%] truncate">{withdrawal_system?.name}</span>
                              <span className="w-[36%] truncate">{user?.email}</span>
                              <div className="group inline-flex min-w-5 items-center justify-center">
                                {!is_verified ? (
                                  <div className="relative">
                                    <AlertCircle className="text-destructive" />
                                    <SimpleTooltip content="Кошелек не подтвержден" />
                                  </div>
                                ) : (
                                  <CheckCircle2 className="text-valid" />
                                )}
                              </div>
                              <span className="ml-auto inline-flex min-w-6 items-center justify-center">
                                <Button
                                  onClick={onSelectPaymentToDeleteAndOpenAlert(wallet)}
                                  size={"none"}
                                  variant={"transparent"}
                                >
                                  <TrashIcon className="size-6" />
                                </Button>
                              </span>
                            </div>
                          )
                        })}
                      </div>

                      {/* MOBILE */}
                      <div className="mt-4 hidden space-y-4 md:block">
                        {useApiUserWalletList.data?.data.results.map((wallet) => {
                          const { id, is_verified, withdrawal_system, user } = wallet
                          return (
                            <div
                              className="space-y-4 rounded-lg border p-4"
                              key={id}
                            >
                              <div className="relative pr-5">
                                <Button
                                  onClick={onSelectPaymentToDeleteAndOpenAlert(wallet)}
                                  className="absolute right-0 top-0"
                                  variant={"transparent"}
                                  size={"icon-sm"}
                                >
                                  <TrashIcon className="size-6 text-accent" />
                                </Button>
                                <p className="text-grey-hard">{t("addPayment.method")}</p>
                                <p>{withdrawal_system?.name}</p>
                              </div>
                              <div>
                                <p className="text-grey-hard">{t("addPayment.account")}</p>
                                <p>{user?.email}</p>
                              </div>
                              <div>
                                <p className="text-grey-hard">{t("addPayment.status")}</p>
                                <div
                                  className={clsx({
                                    "text-destructive": !is_verified,
                                    "text-valid": is_verified,
                                  })}
                                >
                                  <div hidden={is_verified === true}>
                                    <p>{t("addPayment.unconfirmed")}</p>
                                    <p>{t("addPayment.unconfirmedDesc")}</p>
                                  </div>

                                  <div hidden={is_verified === false}>
                                    <p>{t("addPayment.confirmed")}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </>
                  )}

                  {/* Desktop */}
                  <Button
                    onClick={toggleAddPayment}
                    className={clsx("mt-6 lg:!hidden", {
                      hidden: isActiveAddPayment,
                    })}
                    variant={"link"}
                  >
                    {t("addPayment.buttonMain")}
                  </Button>

                  {/* Mobile */}
                  <Button
                    onClick={toggleAddPayment}
                    variant={"outline"}
                    className="mt-4 hidden w-full lg:flex"
                  >
                    {t("addPayment.buttonAdd")}
                  </Button>

                  <div
                    className={clsx("mt-6 items-start space-x-2 lg:hidden", {
                      hidden: isActiveAddPayment === false,
                      flex: isActiveAddPayment === true,
                    })}
                  >
                    {/* Платежная система */}
                    <div className="space-y-0.5">
                      <Label>{t("addPayment.method")}</Label>
                      {useApiBillingPayment.data?.data && (
                        <Select onValueChange={onSelectWallet}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={t("addPayment.method")} />
                          </SelectTrigger>
                          <SelectContent>
                            {useApiBillingPayment.data.data.results.map((item) => {
                              if (item.is_disabled) return null
                              return (
                                <SelectItem
                                  key={item.id}
                                  value={`${item.id}`}
                                >
                                  <div className="first-letter:uppercase">{item.name}</div>
                                </SelectItem>
                              )
                            })}
                          </SelectContent>
                        </Select>
                      )}
                    </div>

                    {/* User info */}
                    <div className="space-y-0.5">
                      <Label className="inline-block min-h-[19px] first-letter:uppercase">{!selectedPayment ? "" : selectedPayment.user_identifier_name}</Label>
                      <Input
                        disabled={!selectedPayment}
                        {...usePageState.register("userWalletRequisites", {
                          required: true,
                          ...(!selectedPayment
                            ? {}
                            : {
                                pattern: {
                                  value: new RegExp(`${selectedPayment.user_identifier_regexp}`),
                                  message: selectedPayment.user_identifier_example!,
                                },
                              }),
                        })}
                        autoComplete="off"
                        placeholder={!selectedPayment ? "" : selectedPayment.user_identifier_example!}
                      />
                      <InputMessage
                        variant={
                          !usePageState.formState.errors.userWalletRequisites && usePageState.getFieldState("userWalletRequisites").isDirty
                            ? "valid"
                            : usePageState.formState.errors.userWalletRequisites &&
                                usePageState.getFieldState("userWalletRequisites").isDirty &&
                                usePageState.getValues("userWalletRequisites").length > 0
                              ? "invalid"
                              : "text-grey-hard"
                        }
                      >
                        <span>
                          {usePageState.formState.errors?.userWalletRequisites?.message
                            ? usePageState.formState.errors?.userWalletRequisites?.message
                            : !selectedPayment
                              ? ""
                              : selectedPayment.user_identifier_example}
                        </span>
                      </InputMessage>
                    </div>

                    {/* Actions */}
                    <div className="space-y-0.5">
                      <Label className="pointer-events-none text-transparent opacity-0 selection:bg-transparent">{t("addPayment.actions")}</Label>
                      <div className="inline-flex space-x-2">
                        <Button
                          // disabled={!selectedWallet || !watchSelectedEmail.length || usePageState.getFieldState("selectedEmail").invalid}
                          type="button"
                          onClick={onConfirmAddPayment}
                        >
                          Добавить
                        </Button>
                        <Button
                          type="button"
                          onClick={closeAddPayment}
                          size={"icon"}
                          variant={"outline"}
                        >
                          <X className="text-black" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Лог работы */}
                <div className="w-full lg:container lg:rounded-lg lg:bg-white lg:py-6">
                  <p className="text-xl font-bold">{t("log")}</p>
                  {/* TODO: Сделать переиспользуемой */}
                  {/* Desktop */}
                  <div className="relative mt-4 overflow-x-auto rounded-sm border md:hidden">
                    <table className="w-full text-left">
                      <thead className="bg-grey-extra-soft text-grey-extra-hard">
                        <tr>
                          <th
                            scope="col"
                            className="w-48 px-6 py-3.5 font-medium"
                          >
                            {t("date")}
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3.5 font-medium"
                          >
                            {t("desc")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {useApiV1UserLogs.data?.data?.results.map(({ created_at, message }, indx) => (
                          <tr
                            key={indx}
                            className="border-b bg-white font-medium last:border-0"
                          >
                            <th
                              scope="row"
                              className="whitespace-nowrap px-6 py-4 font-medium"
                            >
                              {format(created_at!, "dd.MM.yyyy HH:mm")}
                            </th>
                            <td className="px-6 py-4">
                              <span className=" line-clamp-1">{message}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {!useApiV1UserLogs.data?.data?.results.length ? null : (
                    <Link
                      className={buttonVariants({ variant: "link", className: "ml-0 mt-4 md:hidden" })}
                      href="/personal-page/worklog"
                    >
                      {t("buttonAllOperations")}
                    </Link>
                  )}

                  {/* Mobile */}
                  <div className="hidden space-y-4 pt-4 md:block">
                    {useApiV1UserLogs.data?.data?.results.map(({ created_at, message }, indx) => (
                      <div
                        className="mb-4 border-b pb-4 last:mb-0 last:border-0 last:pb-0"
                        key={indx}
                      >
                        <p className="text-grey-hard">{format(created_at!, "dd.MM.yyyy HH:mm")}</p>
                        <p>{message}</p>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="mt-10 hidden flex-col items-center space-y-4 md:flex">
                    <Button
                      onClick={handleLoadMoreLogs}
                      className="w-full"
                      variant={"outline"}
                    >
                      {t("more")}
                    </Button>
                    <div className="flex justify-center space-x-2">
                      <AppPagination
                        pathname={router.pathname}
                        maxPageButtonsToShow={3}
                        currentPage={currentPage}
                        onPageChange={handleChangePage}
                        count={useApiV1UserLogs.data?.data.count ?? 0}
                        itemsPerPage={pageState?.logsState?.logsQuery?.limit ?? 6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <DrawerRootActions
        isActive={isActiveRootSheet}
        onChange={changeRootSheet}
        toggleDeleteAccount={toggleDeleteAccount}
      />

      {isSmall && (
        <CredenzaAddPayment
          isActive={isActiveAddPayment}
          onChange={changeAddPayment}
          onConfirmAddPayment={onConfirmAddPayment}
          onSelectWallet={onSelectWallet}
          selectedPayment={selectedPayment}
          // @ts-ignore
          usePageState={usePageState}
        />
      )}

      <CredenzaDeletePayment
        isActive={isActiveDeletePayment}
        onChange={changeDeletePayment}
        closeDeletePayment={closeDeletePayment}
        onConfirmRemoveWallet={onConfirmRemoveWallet}
        selectedPaymentToDelete={selectedPaymentToDelete}
      />

      <CredenzaChangeEmail
        isActive={isActiveChangeEmail}
        onChange={changeChangeEmail}
      />

      <CredenzaChangePassword
        isActive={isActiveChangePassword}
        onChange={changeChangePassword}
      />

      <CredenzaConfirmPaymentWallet
        isActive={isActiveConfirmPaymentWallet}
        onChange={changeConfirmPaymentWallet}
      />

      <CredenzaDeleteAccount
        isActive={isActiveDeleteAccount}
        onChange={changeDeleteAccount}
      />
    </>
  )
}
