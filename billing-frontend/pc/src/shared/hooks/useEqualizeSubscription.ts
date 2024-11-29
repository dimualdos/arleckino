import { useState, useEffect, useMemo } from "react"
import { useDevices } from "./useDevices"
import { useApiV1UserInfoRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserInfoRead"
import { useApiV1OrdersCreate } from "@/src/gen/clients/hooks/apiController/useApiV1OrdersCreate"
import { messageOrderSubscription } from "@/src/widgets/Personal/Subscription/ui/message-types"
import { DevicesSubscrStore } from "../store/devicesSubscrStore"
import { useApiV1UserDeviceListListInfinite } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList"
import { useQueryClient } from "@tanstack/react-query"

export interface IdeviceArrServer {
  amount: number
  days_amount: number
  device_name: string
  validEndData: string
}

export const useEqualizeSubscription = () => {
  //* данные по прайсам
  const clientDevices = useQueryClient()
  const { queryKey: queryKeyInfinite } = useApiV1UserDeviceListListInfinite({ limit: 100000 })
  const { mutate: mutateEqualizeSubscriptions, isSuccess: succesEqualize, isLoading: loadingEqualize, isError: isErrorequalize, error: errorEqualize } = useApiV1OrdersCreate()
  const { data: userInfo } = useApiV1UserInfoRead()
  const { selectedDevices } = useDevices()
  //** суммарная цена на выравнивание подписки */
  const [totalPrice, totalPriceSet] = useState(0)
  //**  количство денег для пополнеия баланса и выравнивания подписки*/
  //** сообщение ошибки выравнивания подписки */
  const [subscrErrorText, setSubscrErrorText] = useState("")
  //* id для отображенияв таблице
  const [devicesArrServer, devicesArrServerSet] = useState([{ device_name: "", validEndData: "", days_amount: 0, amount: 0 }])
  //* id для отправки на расчет вырованивания подписки
  const [selectedDevisesId, selectedDevisesIdSet] = useState([0])

  //** устанавливаем ID выбранных девайсов для функции buySubscriptionEqualize*/
  useEffect(() => {
    if (selectedDevices.length > 1) {
      selectedDevisesIdSet(selectedDevices.map((item) => item?.id!))
    }
  }, [selectedDevices])

  //* закидываем в стор данные по предварительному расчету подписки девайсов
  useEffect(() => {
    DevicesSubscrStore.update((s) => {
      s.data = devicesArrServer
      s.totalPrice = totalPrice
      s.subscrErrorText = subscrErrorText
    })
  }, [devicesArrServer, subscrErrorText, totalPrice])

  //* предвариетельный расчет цен на подписку для выбранных устройств
  useEffect(() => {
    if (isErrorequalize && errorEqualize && errorEqualize.response.data.items) {
      const data = errorEqualize.response.data.items.map((item: { date_end: string }) => new Date(item.date_end))
      const currentDateAllDeviceTable = data[0].toLocaleDateString("ru-RU")
      let validDataDevice = errorEqualize.response.data.items.map((item: IdeviceArrServer) => ({ ...item, validEndData: currentDateAllDeviceTable }))
      const price = errorEqualize.response.data?.amount
      devicesArrServerSet(validDataDevice)
      totalPriceSet(price)
    }
  }, [errorEqualize, isErrorequalize])

  //* если прилетелеа ошибка при выравнивании подписки
  useEffect(() => {
    const err = isErrorequalize && errorEqualize.response.data?.message_type
    if (isErrorequalize && err) {
      const upBalance = (totalPrice - (userInfo?.data.balance || 0)).toFixed(2)
      const correctTextValue = messageOrderSubscription[err].replace(/{amount}/gi, upBalance)
      setSubscrErrorText(correctTextValue)
    }
  }, [errorEqualize, isErrorequalize, totalPrice, userInfo?.data.balance])

  const buySubscriptionEqualize = (iTest: boolean) => {
    if (selectedDevisesId.length <= 1) {
      console.error("device ids length < 2")
      return
    }
    clientDevices.invalidateQueries(queryKeyInfinite)

    setSubscrErrorText("")
    const params = {
      //* id девайсов
      device_ids: selectedDevisesId,
      //*  количество дней
      days_amount: 30,
      //* премиум- непонятно что
      is_premium: false,
      //* автоматическое продление
      is_auto_renew: false,
      //* промокод - применяется от условия величины промокода и количества дней
      promocode_transaction_id: null,
      //* выранвнивание дат
      date_alignment: true,
      //* переводим в true после расчета подписки отображении на странице по клику кнопки "оплатить"
      force: iTest,
    }
    //* /api/v1/orders/ { method: 'POST', body: params }
    try {
      mutateEqualizeSubscriptions(params)
    } catch (errorSubscriptionDevices) {
      console.error(errorSubscriptionDevices)
    }
  }

  //* очистка
  const clearDevicesArr = () => {
    totalPriceSet(0)
    setSubscrErrorText("")
    devicesArrServerSet([{ amount: 0, days_amount: 0, device_name: "", validEndData: "0" }])
  }

  const value = useMemo(
    () => ({
      loadingEqualize,
      selectedDevisesId,
      devicesArrServer,
      totalPrice,
      buySubscriptionEqualize,
      succesEqualize,
      subscrErrorText,
      clearDevicesArr,
      isErrorequalize,
    }),
    [selectedDevisesId, devicesArrServer, totalPrice, succesEqualize, subscrErrorText, isErrorequalize],
  )
  return value
}
