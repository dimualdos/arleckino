import { useState, useEffect, useMemo } from "react"
import { useApiV1UserInfoRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserInfoRead"
import { useApiV1ServicePromocodeApplyCreate } from "@/src/gen/clients/hooks/apiController/useApiV1ServicePromocodeApplyCreate"
import { useApiV1OrdersCreate } from "@/src/gen/clients/hooks/apiController/useApiV1OrdersCreate"
import { useApiV1ServiceSystemSettingsList } from "@/src/gen/clients/hooks/apiController/useApiV1ServiceSystemSettingsList"
import { useDevices } from "./useDevices"
import { messageOrderSubscription, messagePromocode } from "../../widgets/Personal/Subscription/ui/message-types"

const PROMO_TYPES = { percent: "percent", amount: "amount" }

const promoDiscountInit = {
  discount: 0,
  promoType: PROMO_TYPES.amount,
}

export const useSubscription = (subscriptionPeriod = 0, autoRenewSubscr: boolean, promoTextValue: string) => {
  const { data: userInfo, isSuccess: successLoadUserInfo } = useApiV1UserInfoRead()
  const { data: dataPromocodeApply, isSuccess: successPromocode, isError: promocodeErr, error: errorMessagePromocode, mutate: mutatePromocodeApplyCreate } = useApiV1ServicePromocodeApplyCreate()
  const { mutate: mutateSubscriptionDevices, isSuccess: succesSubscriptionDevices, isError: subscrError, data: dataSubscriptionDevices, error: errorSubscriptionDevices } = useApiV1OrdersCreate()
  //* '/api/v1/service/system-settings/' - данные по скидкам
  const { data: dataSystemSetting } = useApiV1ServiceSystemSettingsList()
  const { selectedDevices } = useDevices()

  const [isPromoActivated, setIsPromoActivated] = useState(false)

  const usedDeviceIds = selectedDevices.map((d) => d.id) as number[]

  //* флаг срабатывания после введения в инпут промокода текста - после отправки запроса меняется на false
  const [isPromoChecking, setIsPromoChecking] = useState(false)

  //* Объект скидки по промокоду
  const [promoDiscount, setPromoDiscount] = useState(promoDiscountInit)
  //* eslint-disable-next-line no-unused-vars
  const [finishPrice, setFinishPrice] = useState<number>(0)
  //* Скидка, приходящая с бэкенда после рассчета стоимости
  const [orderDiscount, setOrderDiscount] = useState(0)
  //* Скидка по промокоду, приходящая с бэкенда после рассчета стоимости
  const [orderPromoDiscount, setOrderPromoDiscount] = useState(0)
  //* Скидка за число дней
  const [discount, setDiscount] = useState(0)
  //* Сумма отображаемой скидки
  const [discountValue, setDiscountValue] = useState(0)
  //* Текст отображаемой скидки
  const [discountText, setDiscountText] = useState("")
  //* Размер личной скидки пользователя (в %)
  const [personalDiscount, setPersonalDisount] = useState(0)
  //** сообщение ошибки по промокоду */
  const [promoErrorText, setPromoErrorText] = useState("")
  //** сообщение ошибки по покупке подписки */
  const [subscrErrorText, setSubscrErrorText] = useState("")

  const [messageSuccessPromo, messageSuccessPromoSet] = useState("")
  //* флаг для управления стейтом по скидкам и отображению контента.
  //* При  false блокирует внесение в стейт  setPromoDiscount(newPromoDiscount)  setPromoDiscount(promoDiscountInit)
  //*    setPromoErrorText(messagePromocode[err]) setIsPromoChecking(false) onDiscount() calcDiscountValue()
  const [flagSubscription, flagSubscriptionSet] = useState(false)

  //*  стейты  скидок и цен
  const [discounts, setDiscounts] = useState([{ daysCount: 0, percent: 0 }])
  const [prices, setPrices] = useState({ dayPrice: 0, dayPricePremium: 0 })

  //* стейт результата запроса  /api/v1/service/promocode/apply - скидки
  const [systemSettings, setSystemSettings] = useState(null)

 
  //** очистка промо */
  const clearPromo = () => {
    setPromoDiscount(promoDiscountInit)
    setDiscountValue(0)
    setOrderDiscount(0)
    setPromoErrorText("")
    setIsPromoChecking(false)
    messageSuccessPromoSet("")
    flagSubscriptionSet(false)
  }
  //!! расчет скидки на подписку - по примененному промокоду
  const calcDiscountValue = () => {
    let value = 0

    const orderAmountValue = parseFloat(`${finishPrice}`)
    if (orderDiscount === 0) {
      const xdata = promoDiscount
      switch (xdata.promoType) {
        case PROMO_TYPES.amount:
          value = +(xdata.discount < orderAmountValue ? xdata.discount : orderAmountValue).toFixed(2)
          break
        case PROMO_TYPES.percent:
          value = +(orderAmountValue * ((xdata.discount > 100 ? 100 : xdata.discount) / 100)).toFixed(2)
          break
        default:
          break
      }
    } else {
      value = orderDiscount
    }

    setDiscountValue(value)
    setDiscountText(`$${value}`)
  }

  //** заносим данные по скидкам и результат запроса в стейты */
  useEffect(() => {
    const arrDiscounts = dataSystemSetting?.data
    if (!systemSettings && arrDiscounts) {
      setPrices({
        dayPrice: parseFloat((dataSystemSetting?.data.day_price || 0).toString()),
        dayPricePremium: parseFloat((dataSystemSetting?.data.premium_day_price || 0).toString()),
      })
      setDiscounts((arrDiscounts.discounts || [{ daysCount: 0, percent: 0 }]).map((d: { days: number; discount: number }) => ({ daysCount: d?.days || 0, percent: d?.discount || 0 })))
      setSystemSettings(arrDiscounts)
    }
  }, [systemSettings, dataSystemSetting])

  //** проверка промоскидки - промочекинг setIsPromoChecking(true)*/
  const handleSubmitPromo = () => {
    setIsPromoChecking(true)
    setPromoDiscount(promoDiscountInit)
    setDiscountValue(0)
    setOrderDiscount(0)
    setPromoErrorText("")
    messageSuccessPromoSet("")
    //* promo: "/api/v1/service/promocode/apply"
  }
  //* если setIsPromoChecking(true) - выполнется запрос на проверку промокода
  useEffect(() => {
    if (isPromoChecking && promoTextValue.length > 0) {
      flagSubscriptionSet(true)
      mutatePromocodeApplyCreate({ code: promoTextValue })
    }
  }, [isPromoChecking, promoTextValue])

  //* если промокод применился или прилетела ошибка
  useEffect(() => {
    let isOk = false
    const err = promocodeErr && errorMessagePromocode.response.data.message_type
    if (successPromocode && flagSubscription) {
      const newPromoDiscount = { discount: dataPromocodeApply.data.discount, promoType: dataPromocodeApply.data.promocode_type } as { discount: number; promoType: string }
      setPromoDiscount(newPromoDiscount)
      calcDiscountValue()
      isOk = true
      setIsPromoChecking(false)
    } else if (promocodeErr && flagSubscription) {
      const correctTextValue = messagePromocode[err].replace(/{}/gi, `- ${promoTextValue}`)
      setPromoDiscount(promoDiscountInit)
      setPromoErrorText(correctTextValue)
      setIsPromoChecking(false)
    }
    setIsPromoChecking(false)
    setIsPromoActivated(isOk)
  }, [errorMessagePromocode, promocodeErr, successPromocode, promoTextValue])

  //* если прилетелеа ошибка при покупке подписки
  useEffect(() => {
    const err = subscrError && errorSubscriptionDevices.response.data.message_type
    if (subscrError && err) {
      const upBalance = (finishPrice - (userInfo?.data.balance || 0)).toFixed(2)
      const correctTextValue = messageOrderSubscription[err].replace(/{}/gi, `- ${promoTextValue}`).replace(/{amount}/gi, upBalance)
      setSubscrErrorText(correctTextValue)
    }
  }, [errorSubscriptionDevices, promoTextValue, subscrError])

  //* покупка подписки
  const buySubscription = (isEqualize = false, isTest: undefined) => {
    if (usedDeviceIds.length === 0) {
      console.error("no_device_ids")
      return
    }
    setSubscrErrorText("")
    const params = {
      //* id девайсов
      device_ids: usedDeviceIds,
      //*  количество дней
      days_amount: subscriptionPeriod,
      //* премиум- непонятно что
      is_premium: false,
      //* автоматическое продление
      is_auto_renew: autoRenewSubscr,
      //* промокод - применяется от условия величины промокода и количества дней
      promocode_transaction_id: (successPromocode && subscriptionPeriod < 180) || (successPromocode && promoDiscount.discount > discount) ? +promoTextValue : null,
      //* выранвнивание дат
      date_alignment: isEqualize,
      //* какое то усиление
      force: !isTest,
    }
    //* /api/v1/orders/ { method: 'POST', body: params }
    try {
      mutateSubscriptionDevices(params)
    } catch (errorSubscriptionDevices) {
      console.log(errorSubscriptionDevices)
    }
  }

  //* получение корректного периода
  const getCorrectPeriodValue = (period = 30) => {
    let retVal = period
    if (retVal < 30) {
      retVal = 30
    } else if (retVal > 360) {
      retVal = 360
    }
    return retVal
  }

  //* получение скидок - если есть персональная скидка и  промо активирован то возврат промо если  < 90 дней и промо меньше скидки за объем дней, если промо больше, то возврат промо

  const onDiscount = () => {
    let retVal = { percent: 0, message: "" }
    if (subscriptionPeriod >= 30 && subscriptionPeriod < 180 && promoDiscount.discount < prices.dayPrice * subscriptionPeriod) {
      return (retVal = { percent: promoDiscount.discount, message: "посчитана скидка по промокоду" })
    } else if (subscriptionPeriod >= 180 && promoDiscount.discount < prices.dayPrice * subscriptionPeriod) {
      ;(discounts || []).forEach((d) => {
        if (d.daysCount <= subscriptionPeriod) {
          retVal = { percent: d.percent, message: "посчитана скидка от количества дней" }
        }
      })
    } else if (promoDiscount.discount > prices.dayPrice * subscriptionPeriod) {
      retVal = { percent: promoDiscount.discount, message: "посчитана скидка по промомкоду" }
    }
    return retVal
  }
  //** внесение корректной скидки в стейт */
  useEffect(() => {
    const useDiscount = onDiscount()
    setDiscount(useDiscount.percent)
    messageSuccessPromoSet(useDiscount.message)
  }, [discounts, isPromoActivated, subscriptionPeriod])

  //**  получение прайса на подписку co скидкой от количества устройств и количества дней
  useEffect(() => {
    //* скидка от количества дней
    const cost = +(usedDeviceIds.length * prices.dayPrice * subscriptionPeriod * ((100 - discount) / 100)).toFixed(2)
    //* скидка от промокода
    const promoCalc = +(usedDeviceIds.length * prices.dayPrice * subscriptionPeriod * ((100 - promoDiscount.discount) / 100)).toFixed(2)
    //* если промоскидка больше скидки от дней - то промоскидка
    const discountValue = promoDiscount.discount > discount ? promoCalc : cost
    setFinishPrice(discountValue)
  }, [discount, prices, promoDiscount, subscriptionPeriod, usedDeviceIds])

  useEffect(() => {
    if (succesSubscriptionDevices) {
      // const res: any = dataSubscriptionDevices?.data || {}
      // setFinishPrice(res.amount)
      // setOrderDiscount(res.discount)
      // setOrderPromoDiscount(res.promocode_discount)
      clearPromo()
    }
  }, [succesSubscriptionDevices])

  //* выравнивание подписки - откуда приходят данные проверить в гитлабе

  const equalizeSubscription = () => {
    usedDeviceIds && buySubscription(true, undefined)
  }

  useEffect(() => {
    if (successLoadUserInfo) setPersonalDisount(userInfo.data.personal_discount_percent || 0)
  }, [successLoadUserInfo, userInfo])

  useEffect(() => {
    if (!promoTextValue.length || !promoTextValue) {
      clearPromo()
    }
  }, [promoTextValue])

  const valueSubscription = useMemo(
    () => ({
      succesSubscriptionDevices,
      successPromocode,
      isPromoChecking,
      handleSubmitPromo,
      promoDiscount,
      promoErrorText,
      discountValue,
      discountText,
      clearPromo,
      finishPrice,
      calcDiscountValue,
      discount,
      setDiscount,
      orderDiscount,
      setOrderDiscount,
      orderPromoDiscount,
      buySubscription,
      equalizeSubscription,
      dataPromocodeApply,
      dataSystemSetting,
      discounts,
      prices,
      messageSuccessPromo,
      flagSubscription,
      errorSubscriptionDevices,
      subscrErrorText,
    }),
    [
      succesSubscriptionDevices,
      isPromoChecking,
      promoDiscount,
      promoErrorText,
      discountValue,
      discountText,
      personalDiscount,
      finishPrice,
      discount,
      orderDiscount,
      orderPromoDiscount,
      dataSystemSetting,
      discounts,
      prices,
      messageSuccessPromo,
      flagSubscription,
      errorSubscriptionDevices,
      subscrErrorText,
    ],
  )

  return valueSubscription
}
