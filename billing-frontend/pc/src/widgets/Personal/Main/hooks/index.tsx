import { useForm } from "react-hook-form"
import { PersonalMainProps } from "../types"
import { useRouter } from "next/router"
import { useApiV1UserProfileChangeEmailRequestCurrentCreate } from "@/src/gen/clients/hooks/apiController/useApiV1UserProfileChangeEmailRequestCurrentCreate"
import { useApiV1AuthPasswordResetCreate } from "@/src/gen/clients/hooks/apiController/useApiV1AuthPasswordResetCreate"
import { useApiV1UserInfoRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserInfoRead"
import { useApiV1UserProfilePartialUpdate } from "@/src/gen/clients/hooks/apiController/useApiV1UserProfilePartialUpdate"
import { useApiV1ActionsUserLogsList } from "@/src/gen/clients/hooks/apiController/useApiV1ActionsUserLogsList"
import { useEffect, useState } from "react"
import { ApiV1ActionsUserLogsListQueryParams } from "@/src/gen/models/ts/apiController/ApiV1ActionsUserLogsList"
import { useApiV1UserTimezoneList } from "@/src/gen/clients/hooks/apiController/useApiV1UserTimezoneList"
import { CompoboxItemProps } from "@/src/shared/ui/combobox/types"
import { useApiV1UserProfileWithdrawalWalletsCreate } from "@/src/gen/clients/hooks/apiController/useApiV1UserProfileWithdrawalWalletsCreate"
import { useApiV1UserProfileWithdrawalWalletsDelete } from "@/src/gen/clients/hooks/apiController/useApiV1UserProfileWithdrawalWalletsDelete"
import { useApiV1UserWithdrawalSystemsList } from "@/src/gen/clients/hooks/apiController/useApiV1UserWithdrawalSystemsList"

export const usePersonalMain = () => {
  const router = useRouter()
  const [logsQuery, logsQuerySet] = useState<ApiV1ActionsUserLogsListQueryParams>({ limit: 6, page: 1 })

  const useApiV1User = useApiV1UserInfoRead()
  const useApiProfile = useApiV1UserProfilePartialUpdate()
  const useApiChangeEmail = useApiV1UserProfileChangeEmailRequestCurrentCreate()
  const useApiChangePassword = useApiV1AuthPasswordResetCreate()
  const useApiTimeZones = useApiV1UserTimezoneList()
  const useApiBillingPayment = useApiV1UserWithdrawalSystemsList()
  const useApiWalletListCreate = useApiV1UserProfileWithdrawalWalletsCreate()
  const useApiWalletListDelete = useApiV1UserProfileWithdrawalWalletsDelete

  const useApiV1UserLogs = useApiV1ActionsUserLogsList(logsQuery, { query: { keepPreviousData: true } })

  const usePageState = useForm<PersonalMainProps>({
    mode: "onChange",
    defaultValues: {
      userWalletRequisites: "",
      is_balance_notifications: useApiV1User.data?.data.is_balance_notifications ?? false,
      is_get_news_notifications: useApiV1User.data?.data.is_get_news_notifications ?? false,
      is_notify_subscription_expiration: useApiV1User.data?.data.is_notify_subscription_expiration ?? false,
      is_referral_notifications: useApiV1User.data?.data.is_referral_notifications ?? false,
      is_subscribe_mail_list: useApiV1User.data?.data.is_subscribe_mail_list ?? false,
      is_system_events_notifications: useApiV1User.data?.data.is_system_events_notifications ?? false,
    },
  })

  let parsedTimeZones: CompoboxItemProps[] = []
  if (useApiTimeZones.data?.data) {
    parsedTimeZones = useApiTimeZones.data.data.map((item) => ({ label: item.country, value: item.timezone }))
  }

  const watchUserWalletRequisites = usePageState.watch("userWalletRequisites")
  const watch_is_balance_notifications = usePageState.watch("is_balance_notifications")
  const watch_is_get_news_notifications = usePageState.watch("is_get_news_notifications")
  const watch_is_notify_subscription_expiration = usePageState.watch("is_notify_subscription_expiration")
  const watch_is_referral_notifications = usePageState.watch("is_referral_notifications")
  const watch_is_subscribe_mail_list = usePageState.watch("is_subscribe_mail_list")
  const watch_is_system_events_notifications = usePageState.watch("is_system_events_notifications")

  useEffect(() => {
    if (useApiV1User.isFetched && useApiV1User.data?.data) {
      usePageState.setValue("is_balance_notifications", useApiV1User.data.data.is_balance_notifications)
      usePageState.setValue("is_get_news_notifications", useApiV1User.data.data.is_get_news_notifications)
      usePageState.setValue("is_notify_subscription_expiration", useApiV1User.data.data.is_notify_subscription_expiration)
      usePageState.setValue("is_referral_notifications", useApiV1User.data.data.is_referral_notifications)
      usePageState.setValue("is_subscribe_mail_list", useApiV1User.data.data.is_subscribe_mail_list)
      usePageState.setValue("is_system_events_notifications", useApiV1User.data.data.is_system_events_notifications)
    }
  }, [useApiV1User.isFetched])

  useEffect(() => {
    if (router.isReady && useApiV1UserLogs.isFetched) {
      const qCurrentPage = (router.query.page as string) ?? "1"
      const currentPage = parseInt(qCurrentPage)
      logsQuerySet((prev) => ({ ...prev, page: currentPage }))
    }
  }, [useApiV1UserLogs.isFetched, router])

  return {
    // API
    useApiChangeEmail,
    useApiChangePassword,
    useApiV1User,
    useApiProfile,
    useApiV1UserLogs,
    useApiBillingPayment,
    useApiWalletListCreate,
    useApiWalletListDelete,

    // STATES
    usePageState,
    logsState: {
      logsQuery,
      logsQuerySet,
    },
    watchUserWalletRequisites,
    parsedTimeZones,
    watch_is_balance_notifications,
    watch_is_get_news_notifications,
    watch_is_notify_subscription_expiration,
    watch_is_referral_notifications,
    watch_is_subscribe_mail_list,
    watch_is_system_events_notifications,
  }
}
