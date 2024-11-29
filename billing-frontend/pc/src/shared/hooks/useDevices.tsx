import { useEffect, useMemo, useState } from "react"
import { useApiV1UserDeviceCheckAllUpdate } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceCheckAllUpdate"
import { useApiV1UserDeviceDelete, useApiV1UserDevicesDelete } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceDelete"
import { useApiV1UserDeviceListList, useApiV1UserDeviceListListInfinite } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList"
import { useApiV1UserDevicePartialUpdate } from "@/src/gen/clients/hooks/apiController/useApiV1UserDevicePartialUpdate"
import { useApiV1UserDeviceSubscriptionAutoRenewCreate } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceSubscriptionAutoRenewCreate"
import { Device } from "@/src/gen/models/ts/Device"
import { ApiV1ActionsUserLogsListQueryParams } from "@/src/gen/models/ts/apiController/ApiV1ActionsUserLogsList"
import { ApiV1UserDeviceListListQueryParams } from "@/src/gen/models/ts/apiController/ApiV1UserDeviceListList"
import { useApiV1UserDeviceCheckedCreate as useApiV1UserDeviceCheckedChange, useApiV1UserDeviceCheckedListCreate } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceCheckedCreate"
import { useToggle } from "@/src/shared/hooks/useToggle"

export const useDevices = () => {
  const [logsQuery, logsQuerySet] = useState<ApiV1ActionsUserLogsListQueryParams>({ limit: 10 })
  const [currentPageDevice, currentPageDeviceSet] = useState(1)

  const [deviceQuery, deviceQuerySet] = useState<ApiV1UserDeviceListListQueryParams>({ limit: 100000 })
  const { data: dataDevicesUserInfinite, isSuccess: isSuccessInfinite, queryKey: queryKeyInfinite } = useApiV1UserDeviceListListInfinite(deviceQuery)
  const { data: dataDevicesUser, isSuccess, queryKey } = useApiV1UserDeviceListList({ page: currentPageDevice })

  const [currentIDDevice, setCurrentIDDevice] = useState<{ id: string; updateDevice: Device }>({ id: "", updateDevice: {} as any })
  const [searchDevice, setSearchDevice] = useState<string>("")
  const [autoRenewID, setAutoRenewID] = useState<string>("")
  const [arrIDDeleteDevices, setIDArrDeleteDevices] = useState<string[]>([])
  const [arrInListDevices, arrInListDevicesSet] = useState<Device[]>([])
  const [filteredDeviceInlist, filteredDeviceInListSet] = useState<string[]>([])
  const [flagfilteredDeviceInlist, flagfilteredDeviceInlistSet] = useState(false)

  const [filteredDeviceInSubscription, filteredDeviceInSubscriptionSet] = useState<string[]>([])
  const [flagFliteredDevicesSubscription, flagFliteredDevicesSubscriptionSet] = useState(false)

  const [filteredDevicesForPage, filteredDevicesForPageSet] = useState<Device[]>([])

  const [totalPages, setTotalPages] = useState(1)

  const [selectedDevices, selectedDevicesSet] = useState<Device[]>([])
  const [inputChanged, setInputChanged] = useState({ name: "", description: "", id: "" })
  const [alertVisibleDevice, setAlertVisibleDevice] = useState(false)
  const [idDevaceDelete, setIdDevaceDelete] = useState<string>("")
  const [selectSubscriptionName, setSelectSubscriptionName] = useState<string>("")
  const { mutate: createMutateRenameDevice } = useApiV1UserDevicePartialUpdate(currentIDDevice!.id, queryKeyInfinite)
  const { mutate: createMutateDeviceChecked } = useApiV1UserDeviceCheckedChange(currentIDDevice!.id, queryKeyInfinite)
  const { mutate: createMutateDevicesInListSubcsription, isSuccess: successMutateDevicesInListSubcsription } = useApiV1UserDeviceCheckedListCreate(
    flagFliteredDevicesSubscription && !flagfilteredDeviceInlist ? filteredDeviceInSubscription : !flagFliteredDevicesSubscription && flagfilteredDeviceInlist ? filteredDeviceInlist : null,
    queryKeyInfinite,
  )

  const { mutate: createMutateDeviceCheckAll } = useApiV1UserDeviceCheckAllUpdate(queryKeyInfinite)
  const { mutate: createMutateDeviceDelete, isError: erorDeleteDevice } = useApiV1UserDeviceDelete(idDevaceDelete, queryKeyInfinite)
  const {
    mutate: createMutateDevicesCheckDelete,
    isSuccess: successDeleteDevices,
    isError: errorDeleteArrDevices,
  } = useApiV1UserDevicesDelete(arrIDDeleteDevices.length > 0 ? arrIDDeleteDevices : [], queryKeyInfinite)
  const { mutate: createMutateDeviceSubscriptionAutoRenew } = useApiV1UserDeviceSubscriptionAutoRenewCreate(autoRenewID, queryKeyInfinite)
  const { active: isActiveSheetActions, setActive: setActiveSheetActions, toggle: toggleSheetActions } = useToggle()
  const { active: isActiveAllDevicesActions, setActive: setActiveAllDevicesActions, toggle: toggleActiveAllDevicesActions } = useToggle()
  const { active: isActiveDeleteDevice, setActive: setActiveDeleteDevice, toggle: toggleDeleteDevice } = useToggle()
  const { active: isActiveDeleteDevices, setActive: setActiveDeleteDevices, toggle: toggleDeleteDevices } = useToggle()
  const { active: isActiveCahngeDeviceInfo, setActive: setActiveChangeDeviceInfo, toggle: toggleChangeDeviceInfo } = useToggle()
  const { active: isActiveFilter, setActive: isActiveFilterSet, toggle: toggleFilter } = useToggle()

  const devicesArr: Device[] = isSuccessInfinite && dataDevicesUserInfinite?.pages[0].data.results
  //** подтягивание имени девайса в инпут модального окна */
  useEffect(() => {
    if (currentIDDevice.updateDevice.name) {
      setInputChanged({ ...inputChanged, name: currentIDDevice.updateDevice.name, id: currentIDDevice.id })
    }
  }, [currentIDDevice.updateDevice.name])

  //* расчет количества страниц таблицы
  useEffect(() => {
    if (isSuccessInfinite) {
      const count = Math.ceil(dataDevicesUserInfinite?.pages[0].data.count / 10)
      setTotalPages(count)
    }
  }, [dataDevicesUserInfinite, isSuccessInfinite])

  //* перевод флагов в false после обновления стататуса выбора девайсов либо на листе либо по типу подписки
  //* в результате выполнения функции  onSelectAllDevicesTypeSubscription
  useEffect(() => {
    if (successMutateDevicesInListSubcsription) {
      flagfilteredDeviceInlistSet(false)
      flagFliteredDevicesSubscriptionSet(false)
    }
  }, [successMutateDevicesInListSubcsription])

  //**установка целевой странцы пагинации*/
  useEffect(() => {
    if (totalPages < currentPageDevice && totalPages !== 0) {
      currentPageDeviceSet(totalPages)
    }
  }, [currentPageDevice, totalPages])

  //* установка в состояние массива удаляемых ID устройств
  useEffect(() => {
    setIDArrDeleteDevices((devicesArr && devicesArr.filter((item: Device) => item.subscription_type !== "active" && item.selected).map((value: Device) => `${value.id}`)) || [])
  }, [devicesArr])

  //* установка выбранных девайсов в таблице
  useEffect(() => {
    selectedDevicesSet((devicesArr && devicesArr.filter((item: Device) => item.selected)) || [])
  }, [devicesArr])

  //**установка странцы пагинации  версии */
  const onPaginationClick = (page: number | string) => {
    currentPageDeviceSet(Number(page))
  }
  //** конпка "дальше" - пагинация */
  const onButtonNextClick = () => {
    currentPageDeviceSet(currentPageDevice + 1)
  }
  //* очистка инпутов
  const onRemoveInputs = () => {
    setInputChanged({ name: currentIDDevice.updateDevice.name || "", description: "", id: currentIDDevice.id || "" })
    setAlertVisibleDevice(false)
  }
  //**input имени девайса в модалке */
  const handleInputChange = (e: { target: { value: string } }) => {
    setInputChanged({ ...inputChanged, name: e.target.value, id: currentIDDevice.id })
  }
  //**input описания девайса в модалке */
  const handleInputTextArea = (e: { target: { value: string } }) => {
    setInputChanged({ ...inputChanged, description: e.target.value })
  }

  //! удаление всех девайсов в выпадающем меню */
  const onDeleteDevices = () => {
    setActiveDeleteDevices(true)
  }
  const onChangeDeviceInfo = (itemDeviceID: number, data: Device) => {
    setCurrentIDDevice({ id: `${itemDeviceID}`, updateDevice: data })
    setActiveChangeDeviceInfo(true)
  }

  //**удаление девайса в таблице - ID вносится с стейт
  const onDeleteDevice = (idDedvice: string) => {
    setIdDevaceDelete(idDedvice)
    setActiveDeleteDevice(true)
  }
  //**удаление девайса в модалке подтверждения удаления девайса */
  const onSubmitDeleteDevice = () => {
    createMutateDeviceDelete()
    setActiveDeleteDevice(false)
    setActiveSheetActions(false)
    const countDevice = Math.ceil((dataDevicesUser!.data.count - 1) / 10)
    setTotalPages(countDevice)
  }

  //** изменение имени устройства и описания Query Mutation
  const onRenameDevice = () => {
    //* проверка предложиния на длину каждого слова в инпуте имени или описания
    const validNameLenght = inputChanged.name
      .trim()
      .split(" ")
      .some((item) => item.length > 33)
    const valueDescriptionLenght = inputChanged.description
      .trim()
      .split(" ")
      .some((item) => item.length > 33)
    //*** проверка инпутов на непустые и не сосотоящих из пробелов а также длина слова в передложении  больше 33 букв */
    if ((inputChanged.name.trim() === "" && inputChanged.description.trim() === "") || validNameLenght || valueDescriptionLenght) {
      return
    } else {
      //** проверяем есть ли уже девайсы с такими названиями, если есть то выкидываем предупреждение */
      const validData =
        isSuccessInfinite &&
        dataDevicesUserInfinite.pages[0].data.results.find((device: { name: string; id: number }) => device.name?.toLowerCase() === inputChanged.name?.toLowerCase() && device.id !== +inputChanged.id)
      if (!validData) {
        //** если нет описания, то прокидываем только имя */
        const preparedData =
          inputChanged.name === "" || validData
            ? { description: inputChanged.description }
            : inputChanged.description === ""
              ? { name: inputChanged.name }
              : { name: inputChanged.name, description: inputChanged.description }
        createMutateRenameDevice(preparedData)
        setActiveChangeDeviceInfo(false)
        setActiveSheetActions(false)
        onRemoveInputs()
      } else {
        setAlertVisibleDevice(true)
        return
      }
    }
  }

  //!! функция выбора всех девайсов  */
  const everyDeviseseChecked = isSuccessInfinite && dataDevicesUserInfinite?.pages[0].data.results.every((item: { selected: boolean }) => item.selected)

  //** функция отправки состояния всех выбранных устройств на сервер */
  const onSelectAllDevices = () => {
    if (everyDeviseseChecked) {
      createMutateDeviceCheckAll({ condition: false })
      return
    }
    createMutateDeviceCheckAll({ condition: true })
  }

  //! отправка на сервер данных о выборе устройств на листе /api/v1/user/device/:id/checked/ */
  const onSelectAllDevicesInList = () => {
    if (arrInListDevices.length > 0 && arrInListDevices.some((device: Device) => device.selected)) {
      const items = arrInListDevices.filter((device: Device) => device.selected).map((item: Device) => `${item.id}`)
      filteredDeviceInListSet(items)
      flagfilteredDeviceInlistSet(true)
      createMutateDevicesInListSubcsription({ selected: false })
    } else {
      filteredDeviceInListSet(arrInListDevices.map((item: Device) => `${item.id}`))
      flagfilteredDeviceInlistSet(true)
      createMutateDevicesInListSubcsription({ selected: true })
    }
  }

  //! выбор всех устройств по типу подписки и отправки данных о выборе либо о снятии выбора
  const onSelectAllDevicesTypeSubscription = () => {
    if (isSuccessInfinite && (selectSubscriptionName === " " || !selectSubscriptionName)) {
      onSelectAllDevicesInList()
    } else {
      const arrIdDevice = devicesArr.filter((device: Device) => device.subscription_type === selectSubscriptionName).map((item: Device) => `${item.id}`)
      filteredDeviceInSubscriptionSet(arrIdDevice)
      if (devicesArr.filter((item) => item.subscription_type === selectSubscriptionName).some((device: Device) => device.selected)) {
        flagFliteredDevicesSubscriptionSet(true)
        createMutateDevicesInListSubcsription({ selected: false })
      } else {
        flagFliteredDevicesSubscriptionSet(true)
        createMutateDevicesInListSubcsription({ selected: true })
      }
    }
  }

  //** выбор девайса в чекбоксе таблицы */
  const onSelectOneDevice = (device: Device) => {
    let selectedBoolDevise = device.selected ? false : true
    setCurrentIDDevice({ id: `${device.id}`, updateDevice: device })
    createMutateDeviceChecked({ selected: selectedBoolDevise })
  }
  //* установка девайса в положение select - для продления подписки
  const onSelectOneDeviceFromSubscription = (device: Device) => () => {
    //** ищем в selectedDevices по id девайс у которого id совпадает с id девайса из списка всех устройств пользователя применяется реф в компоненете TripleCheckbox */
    setCurrentIDDevice({ id: `${device.id}`, updateDevice: device })
    if (!device.selected) {
      createMutateDeviceChecked({ selected: true })
    }
  }

  //* функция выбора id и девайса для попапа с настройками устройства в мобильной версии
  const onHandleClickSettings = (device: Device) => {
    if (device && device.id) {
      setActiveSheetActions(true)
      setIdDevaceDelete(`${device.id}`)
      setCurrentIDDevice({ id: `${device.id}`, updateDevice: device })
    }
  }

  //**проверка на правильность выбранных устройств для массового удаления */
  let checkedActiveSubsriptions = selectedDevices.length > 0 && selectedDevices.every((device) => device.subscription_type === "ending" || device.subscription_type === "inactive")
  //* удаление девайсов - показ модалки с предупреждением

  //!! удаление девайсов после нажатия кнопки 'удалить' в модалке с предупреждением
  const onSubmitRemoveDevices = () => {
    createMutateDevicesCheckDelete()
    const countDevices = Math.ceil((dataDevicesUser!.data.count - arrIDDeleteDevices.length) / 10)
    setTotalPages(countDevices)
    setActiveAllDevicesActions(false)
    setActiveDeleteDevices(false)
  }

  const onSelectLimit = (val: string) => {
    const parsedValue = parseInt(val)
    logsQuerySet((prev) => ({ ...prev, limit: parsedValue }))
  }
  //! фукция фильтрации девайсов в выпадающем меню декстоп*/
  useEffect(() => {
    if (isSuccessInfinite) {
      //* фильтруем и показываем на первых страницах девайсы с подпиской - отсортированные по дате оконочания

      const i = devicesArr.filter((item: Device) => item.subscription)
      const subscrDevice = i.sort((a, b) => +Date.parse(a.subscription!.date_end) - +Date.parse(b.subscription!.date_end))
      //* массив отсортированных девайсов
      const itemsArr = subscrDevice.concat(devicesArr.filter((item) => !item.subscription))

      const dataSelect = itemsArr.filter((item: Device) => {
        //** фильтрация подписок устройств */
        if (!selectSubscriptionName || selectSubscriptionName.trim() === "") {
          return item
        }
        return selectSubscriptionName === item.subscription_type
      })
      //**  формирование массива с найдеными девайсами либо по селекту, либо через поиск
      const searchDevicesArr = dataSelect.filter((item: Device) => {
        return item.name!.toLowerCase().indexOf(searchDevice.trim().toLowerCase()) > -1 || item.description!.toLowerCase().indexOf(searchDevice.trim().toLowerCase()) > -1
      })
      //** установка количества страниц исходя из количества найденных девайсов по фильтру или поиску */
      const count = Math.ceil(searchDevicesArr.length / 10)
      setTotalPages(count)
      //* формирование странциы в таблице исходя из номера кнопки пагинации
      const countSlice = searchDevicesArr.slice((currentPageDevice - 1) * 10, currentPageDevice * 10)
      arrInListDevicesSet(countSlice)
      filteredDevicesForPageSet(countSlice)
    }
  }, [searchDevice, selectSubscriptionName, isSuccessInfinite, currentPageDevice, dataDevicesUserInfinite, devicesArr])

  //**изменение данных по фильтрации и поиску на моб устройствах */
  const onDispatchDataMobileDevice = (subscriptionDevice: string, searchChar: string) => {
    setSearchDevice(searchChar)
    setSelectSubscriptionName(subscriptionDevice)
    currentPageDeviceSet(1)
  }
  //**автоматическое продление подписки по нажатию на switch (для активных подписок)*/
  const onAutoRenewSubscription = (auto_renew: boolean, idDevice: string) => {
    setAutoRenewID(idDevice)
    setTimeout(() => {
      createMutateDeviceSubscriptionAutoRenew({ auto_renew: !auto_renew })
    }, 10)
  }
  //* выбор типа подписки на декстопах и изменение данных в таблице
  const onSelectSubscriptionName = (subscriptionDevice: string) => {
    setSelectSubscriptionName(subscriptionDevice)
    currentPageDeviceSet(1)
  }

  //** чекбоксы выбора девайсов */
  const isSelectedAllDevices = arrInListDevices.length && arrInListDevices.every((device: Device) => device.selected)
  const isSelectedSomeDevices = isSuccessInfinite && dataDevicesUserInfinite?.pages[0].data.results.some((item: { selected: boolean }) => item.selected)
  const isSelectedSome = isSelectedSomeDevices && !isSelectedAllDevices

  const valueDevices = useMemo(
    () => ({
      arrInListDevices,
      filteredDevicesForPage,
      totalPages,
      currentPageDevice,
      currentIDDevice,
      searchDevice,
      autoRenewID,
      arrIDDeleteDevices,
      filteredDeviceInlist,
      selectedDevices,
      inputChanged,
      alertVisibleDevice,
      idDevaceDelete,
      selectSubscriptionName,
      onPaginationClick,
      onRemoveInputs,
      handleInputChange,
      handleInputTextArea,
      onDeleteDevices,
      onChangeDeviceInfo,
      onSubmitDeleteDevice,
      onDeleteDevice,
      onRenameDevice,
      everyDeviseseChecked,
      onSelectAllDevices,
      onSelectAllDevicesInList,
      onSelectOneDevice,
      onHandleClickSettings,
      checkedActiveSubsriptions,
      onSubmitRemoveDevices,
      onSelectLimit,
      onDispatchDataMobileDevice,
      onAutoRenewSubscription,
      isSelectedAllDevices,
      isSelectedSomeDevices,
      isSelectedSome,
      setSearchDevice,
      isActiveDeleteDevice,
      toggleDeleteDevice,
      setActiveDeleteDevice,
      isActiveDeleteDevices,
      setActiveDeleteDevices,
      toggleDeleteDevices,
      isActiveCahngeDeviceInfo,
      setActiveChangeDeviceInfo,
      toggleChangeDeviceInfo,
      isActiveFilter,
      isActiveFilterSet,
      toggleFilter,
      isActiveSheetActions,
      setActiveSheetActions,
      toggleSheetActions,
      isActiveAllDevicesActions,
      setActiveAllDevicesActions,
      toggleActiveAllDevicesActions,
      onButtonNextClick,
      onSelectAllDevicesTypeSubscription,
      onSelectSubscriptionName,
      onSelectOneDeviceFromSubscription,
      devicesArr,
    }),
    [
      arrInListDevices,
      filteredDevicesForPage,
      totalPages,
      currentPageDevice,
      currentIDDevice,
      searchDevice,
      autoRenewID,
      arrIDDeleteDevices,
      filteredDeviceInlist,
      selectedDevices,
      inputChanged,
      alertVisibleDevice,
      idDevaceDelete,
      selectSubscriptionName,
      isSelectedAllDevices,
      isSelectedSomeDevices,
      isSelectedSome,
      isActiveDeleteDevice,
      toggleDeleteDevice,
      isActiveDeleteDevices,
      toggleDeleteDevices,
      isActiveCahngeDeviceInfo,
      toggleChangeDeviceInfo,
      isActiveFilter,
      toggleFilter,
      isActiveSheetActions,
      toggleSheetActions,
      isActiveAllDevicesActions,
      toggleActiveAllDevicesActions,
      devicesArr,
    ],
  )

  return valueDevices
}
