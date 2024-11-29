"use client"
import { useAuth } from "@/src/shared/hooks/useAuth"
import { Button } from "@/src/shared/ui/button"
import { AppHeader } from "@/src/widgets/AppHeader"
import React, { FC, use, useEffect, useState } from "react"
import { Input } from "@/src/shared/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Search } from "lucide-react"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import { TopActions } from "./TopActions"
import { TripleCheckbox } from "@/src/shared/ui/triple-checkbox"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { DialogDeleteDevice } from "@/src/widgets/Dialogs/device/CredenzaDeleteDevice"
import { SheetDeviceActions } from "@/src/widgets/Dialogs/device/SheetDeviceActions"
import { SheetChangeDeviceInfo } from "@/src/widgets/Dialogs/device/SheetChangeDeviceInfo"
import { SheetDeviceFilter } from "@/src/widgets/Dialogs/device/SheetDeviceFilter"
import { CredenzaDeleteDevices } from "@/src/widgets/Dialogs/device/CredenzaDeleteDevices"
import { SheetDevicesActions } from "@/src/widgets/Dialogs/device/SheetDevicesActions"
import Pagination from "./pagination"
import { ListDevices } from "./list-devices"
import { devicesSubscriptionArr } from "./devices-subsription-arr"
import { useDevices } from "@/src/shared/hooks/useDevices"
import { useApiV1UserDeviceListListInfinite } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList"
import { DeviceCard } from "@/src/shared/ui/device-card"
import { Device } from "@/src/gen/models/ts/Device"
import { CredenzaUpdateDeviceSubscriptions } from "@/src/widgets/Dialogs/device/CredenzaUpdateDeviceSubscriptions"

interface ComponentProps {}

export const PersonalDevices: FC<ComponentProps> = () => {
  // https://api.arlekino.tv/api/v1/user/device/list
  const { signOut, redirectIfNotSignIn } = useAuth()
  const tHeader = useTranslations("header")
  const { isSuccess: isSuccessInfinite, data: dataDevicesUserInfinite } = useApiV1UserDeviceListListInfinite({ limit: 100000 })

  const {
    filteredDevicesForPage,
    totalPages,
    currentPageDevice,
    currentIDDevice,
    searchDevice,
    selectedDevices,
    inputChanged,
    alertVisibleDevice,
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
    onSelectOneDevice,
    onHandleClickSettings,
    checkedActiveSubsriptions,
    onSubmitRemoveDevices,
    onDispatchDataMobileDevice,
    onAutoRenewSubscription,
    onSelectSubscriptionName,
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
    isActiveAllDevicesActions,
    setActiveAllDevicesActions,
    toggleActiveAllDevicesActions,
    onButtonNextClick,
    onSelectAllDevicesTypeSubscription,
    onSelectOneDeviceFromSubscription,
    arrInListDevices,
    devicesArr,
  } = useDevices()

  const { active: isActiveChangeDates, setActive: isActiveChangeDatesSet, toggle: toggleChangeDates } = useToggle()
  const { active: isActiveUpdateServer, setActive: isActiveUpdateServerSet, toggle: toggleUpdateServer } = useToggle()
  const { active: isActiveConnectAnyPlayer, setActive: isActiveConnectAnyPlayerSet, toggle: toggleConnectAnyPlayer } = useToggle()
  const [comparisonData, comparisonDataSet] = useState(false)
  const [selectedDevicesLocal, selectedDevicesLocalSet] = useState<Device[]>([])
  const [arrInListDevicesLocal, arrInListDevicesLocalSet] = useState<Device[]>([])

  //* установка лоакльного состояния устройств
  useEffect(() => {
    selectedDevicesLocalSet(filteredDevicesForPage)
  }, [filteredDevicesForPage])

  useEffect(() => {
    arrInListDevicesLocalSet(arrInListDevices)
  }, [arrInListDevices])

  //*! локальное переключение свитчей, потом данные снова отрисовываются после ревалидации
  const onAutoRenewSubscrLocal = (autorenew: boolean, deviceId: string) => {
    onAutoRenewSubscription(autorenew, deviceId)
    selectedDevicesLocalSet(
      selectedDevicesLocal.map((item: Device) => {
        if (item.id === +deviceId && item.subscription?.date_end) {
          return { ...item, subscription: { ...item.subscription, auto_renew: !autorenew } }
        } else {
          return item
        }
      }),
    )
  }

  //*! локальное переключение чекбоксов, потом данные снова отрисовываются после ревалидации от запроса с сервера
  const onSelectDeviceLocal = (device: Device) => {
    onSelectOneDevice(device)
    selectedDevicesLocalSet(
      selectedDevicesLocal.map((item: Device) => {
        if (item.id === device?.id) {
          return { ...item, selected: !item.selected }
        } else {
          return item
        }
      }),
    )
  }

  //! отправка на сервер данных о массовом выборе устройств на листе /api/v1/user/device/:id/checked/ */
  const onSelectAllDevicesInListLocal = () => {
    if (arrInListDevicesLocal.length > 0 && arrInListDevicesLocal.some((device: Device) => device.selected)) {
      // const items = arrInListDevicesLocal.filter((device: Device) => device.selected).map((item: Device) => `${item.id}`)
      selectedDevicesLocalSet(
        selectedDevicesLocal.map((item: Device) => {
          if (item.selected) {
            return { ...item, selected: false }
          } else {
            return item
          }
        }),
      )
    } else {
      selectedDevicesLocalSet(
        selectedDevicesLocal.map((item: Device) => {
          return { ...item, selected: true }
        }),
      )
    }
  }

  //! выбор всех устройств по типу подписки и отправки данных о выборе либо о снятии выбора
  const onSelectAllDevicesTypeSubscriptionLocal = () => {
    if (isSuccessInfinite && (selectSubscriptionName === " " || !selectSubscriptionName)) {
      onSelectAllDevicesInListLocal()
      onSelectAllDevicesTypeSubscription()
    } else {
      const arrIdDevice = devicesArr.filter((device: Device) => device.subscription_type === selectSubscriptionName).map((item: Device) => `${item.id}`)
      if (devicesArr.filter((item) => item.subscription_type === selectSubscriptionName).some((device: Device) => device.selected)) {
        selectedDevicesLocalSet(
          selectedDevicesLocal.map((item: Device) => {
            if (arrIdDevice.find((id: string) => id === `${item.id}`)) {
              return { ...item, selected: false }
            } else {
              return item
            }
          }),
        )

        onSelectAllDevicesTypeSubscription()
      } else {
        selectedDevicesLocalSet(
          selectedDevicesLocal.map((item: Device) => {
            if (arrIdDevice.find((id: string) => id === `${item.id}`)) {
              return { ...item, selected: true }
            } else {
              return item
            }
          }),
        )
        onSelectAllDevicesTypeSubscription()
      }
    }
  }

  //! чекбоксы выбора девайсов локальное состояние */
  const isSelectedAllDevicesLocal = selectedDevicesLocal.length && selectedDevicesLocal.every((device: Device) => device.selected)
  const isSelectedSomeDevicesLocal = selectedDevicesLocal?.some((item) => item.selected)
  const isSelectedSomeLocal = isSelectedSomeDevicesLocal && !isSelectedAllDevicesLocal

  //* проверка девайсов по датам
  useEffect(() => {
    if (selectedDevices[0]?.subscription?.date_end) {
      const oneTimeData = selectedDevices[0]?.subscription?.date_end && new Date(selectedDevices[0]?.subscription?.date_end).toLocaleDateString("ru-RU")
      comparisonDataSet(selectedDevices.every((item) => item.subscription && new Date(item.subscription.date_end).toLocaleDateString("ru-RU") === oneTimeData))
    }
  }, [selectedDevices])

  const onSubmitChangeServer = () => {
    console.log("onSubmitChangeServer")
  }
  const onSubmitConnectAnyPlayer = () => {
    console.log("onSubmitConnectAnyPlayer")
  }

  //* скрытие модального окна на выравниивание дат
  const onRemoveUpdateDatesSubscription = () => {
    isActiveChangeDatesSet(false)
  }

  const onRenameChannelsForDevices = () => {}
  const onUpdateDatesForDevices = () => {}

  const onAddStoreIdDeviceChangeCdn = () => {
    localStorage.setItem(`updateServerID`, `${currentIDDevice.id}`)
  }

  const onAddStoreIdDevice = (value: number): void => {
    localStorage.setItem(`updateServerID`, `${value}`)
  }

  const isSelectedEmpty = !selectedDevices.length

  redirectIfNotSignIn()
  return (
    <>
      <div className="flex flex-1 flex-col">
        <AppHeader className="flex-row items-center justify-between space-y-2 lg:space-y-1">
          <div>
            <h1>
              {tHeader("mainMenu.myDevices")} <span className="ml-4 text-grey">{isSuccessInfinite && dataDevicesUserInfinite?.pages[0].data.results.length}</span>
            </h1>
            <p className="text-base font-medium text-grey-extra-hard">Добавьте устройство в список и оформите ему подписку. Затем, скачайте плейлист и добавьте его в плеер. </p>
          </div>
        </AppHeader>

        <div className="flex flex-1 flex-col bg-blue-soft pb-8 pt-6 lg:pb-0 lg:pt-4">
          {/* TOP ACTIONS START */}

          <TopActions
            onDeleteHandler={onDeleteDevices}
            selectedDevices={selectedDevices}
            openFilter={toggleFilter}
            openMobileActions={toggleActiveAllDevicesActions}
            openUpdateDates={toggleChangeDates}
            comparisonData={comparisonData}
          />

          {/* TOP ACTIONS END */}

          {/* CONTENT START */}
          <div className="container flex w-full flex-1 flex-col lg:mt-4 lg:rounded-lg lg:rounded-b-none lg:bg-white lg:pb-14 lg:pt-6">
            {/* Desktop */}
            <div className="relative mt-4 flex-1 overflow-x-auto rounded-sm border bg-white lg:hidden">
              <table className="w-full text-left font-medium">
                <thead className="bg-grey-extra-soft text-grey-extra-hard">
                  <tr>
                    {/* Устройство */}
                    <th
                      scope="col"
                      className="w-96 px-6 py-3.5 font-medium"
                    >
                      <div className="flex space-x-2">
                        {/* чекбокс выбора всех устройств */}
                        <TripleCheckbox
                          onClick={onSelectAllDevicesTypeSubscriptionLocal}
                          selected={isSelectedAllDevicesLocal ? "all-selected" : isSelectedSomeLocal ? "some-selected" : "none"}
                        />
                        <div className="space-y-2">
                          <div className="cursor-pointer selection:bg-transparent">Устройство</div>

                          {/* поиск по названиям устройств */}
                          <div className="relative min-w-74">
                            <Input
                              placeholder="Начните вводить название"
                              value={searchDevice}
                              onChange={(e) => setSearchDevice(e.target.value)}
                            />
                            <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-grey" />
                          </div>
                          {/* поиск по названиям устройств - конец*/}
                        </div>
                      </div>
                    </th>

                    {/* Подписка - выпдающее меню с видами подписки*/}
                    <th
                      scope="col"
                      className="w-72 px-6 py-3.5 font-medium"
                    >
                      <div className="flex flex-col space-y-2">
                        <div>Подписка</div>
                        <Select
                          onValueChange={onSelectSubscriptionName}
                          value={selectSubscriptionName}
                        >
                          <SelectTrigger className="text-base">
                            <SelectValue placeholder="Устройства" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {/* статичный импрот массив подписок девайсов */}
                              {devicesSubscriptionArr?.map((item) => (
                                <SelectItem
                                  className="px-4"
                                  key={item.value}
                                  value={item.subscription_type}
                                >
                                  <span className="text-base">{item.label}</span>
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </th>

                    {/* Автопродление с баланса */}
                    <th
                      scope="col"
                      className="relative w-44 px-6 py-3.5 font-medium"
                    >
                      <div className="absolute inset-0 flex h-full w-full items-start justify-center px-6 py-3.5 text-center">Автопродление с баланса</div>
                    </th>

                    {/* Плейлист */}
                    <th
                      scope="col"
                      className="relative w-32 px-6 py-3.5 font-medium"
                    >
                      <div className="absolute inset-0 flex h-full w-full items-start justify-center px-6 py-3.5 text-center">Плейлист</div>
                    </th>

                    {/* Действия */}
                    <th
                      scope="col"
                      className="px-6 py-3.5"
                    >
                      <div className="sr-only">Действия</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* список устройств комп версия*/}
                  <ListDevices
                    onAutoRenewSubscription={onAutoRenewSubscrLocal}
                    onSelectDevice={onSelectDeviceLocal}
                    filteredDevicesForPage={selectedDevicesLocal}
                    onDeleteDevice={onDeleteDevice}
                    onChangeDeviceInfo={onChangeDeviceInfo}
                    onSelectOneDeviceFromSubscription={onSelectOneDeviceFromSubscription}
                    onAddStoreIdDevice={onAddStoreIdDevice}
                  />
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="hidden lg:block">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pl-4">
                  {/* чекбокс выбора всех устройств */}
                  <TripleCheckbox
                    onClick={onSelectAllDevicesTypeSubscriptionLocal}
                    selected={isSelectedAllDevicesLocal ? "all-selected" : isSelectedSomeLocal ? "some-selected" : "none"}
                  />
                  <button>Выбрать все устройства</button>
                </div>
                <div className="space-y-4">
                  {selectedDevicesLocal?.map((item: Device) => {
                    //* карточка устройства в мобильной версии приложения
                    return (
                      <DeviceCard
                        onHandleClickSettings={() => onHandleClickSettings(item)}
                        onHandleSelect={() => onSelectDeviceLocal(item)}
                        key={item.id}
                        selected={!item.selected ? "none" : "all-selected"}
                        device={item}
                        autoRenewSubscription={onAutoRenewSubscrLocal}
                        onSelectOneDeviceFromSubscription={onSelectOneDeviceFromSubscription}
                      />
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Pagination */}
            {totalPages === 1 ? null : (
              <div className="mt-10  flex flex-col items-center space-y-4">
                <Button
                  className={clsx("hidden lg:block lg:w-full")}
                  variant={"outline"}
                  disabled={currentPageDevice === totalPages}
                  onClick={onButtonNextClick}
                >
                  Дальше
                </Button>
                {/* вычисляем количество страниц и передаем в компонент пагинации*/}
                <Pagination
                  currentPageDevice={currentPageDevice}
                  totalPages={totalPages}
                  onPaginationClick={onPaginationClick}
                />
              </div>
            )}
          </div>
          {/* CONTENT END */}
        </div>
      </div>

      {/* действия с единичными девайсами в появляющемся меню мобильной версии */}
      <SheetDeviceActions
        isOpen={isActiveSheetActions}
        onChange={setActiveSheetActions}
        onRenameDevice={toggleChangeDeviceInfo}
        onDeleteDevice={toggleDeleteDevice}
        subsriptionType={currentIDDevice.updateDevice?.subscription_type}
        onUpdateServer={onAddStoreIdDeviceChangeCdn}
        onOpenConnectAnyPlayer={toggleConnectAnyPlayer}
        currentIDDevice={currentIDDevice}
      />
      {/* массовые действия с девайсами в появляющемся меню мобильной версии */}
      <SheetDevicesActions
        isOpen={isActiveAllDevicesActions}
        onChange={setActiveAllDevicesActions}
        onDeleteDevices={onDeleteDevices}
        onRenameChannels={onRenameChannelsForDevices}
        openUpdateDates={toggleChangeDates}
        selectedDevices={selectedDevices}
        checkedActiveSubsriptions={checkedActiveSubsriptions}
        disableActionsForOneDevice={selectedDevices.length < 2}
        comparisonData={comparisonData}
      />
      {/* модалка - удаление выбранного девайса */}
      <DialogDeleteDevice
        open={isActiveDeleteDevice}
        onChange={setActiveDeleteDevice}
        toggle={toggleDeleteDevice}
        onChangeDeleteDevices={onSubmitDeleteDevice}
      />
      {/* удаление группы устройств - модалка */}
      <CredenzaDeleteDevices
        open={isActiveDeleteDevices}
        onChange={setActiveDeleteDevices}
        toggle={toggleDeleteDevices}
        onSubmitRemoveDevices={onSubmitRemoveDevices}
      />
      {/*модалка. изменение имени и описания устройства */}
      <SheetChangeDeviceInfo
        isOpen={isActiveCahngeDeviceInfo}
        onChange={setActiveChangeDeviceInfo}
        onSubmit={onRenameDevice}
        handleInputChange={handleInputChange}
        handleInputAreaChange={handleInputTextArea}
        inputChanged={inputChanged.name}
        inputTextArea={inputChanged.description}
        handleRemoveInputs={onRemoveInputs}
        alertVisible={alertVisibleDevice}
      />

      {/* поиск девайса по назаванию или из выпдающего списка на мобильных утсройствах */}
      <SheetDeviceFilter
        isOpen={isActiveFilter}
        onChange={isActiveFilterSet}
        devicesSubscrType={devicesSubscriptionArr}
        onDispatchData={onDispatchDataMobileDevice}
        selectSubscriptionName={selectSubscriptionName}
      />

      <CredenzaUpdateDeviceSubscriptions
        removeUpdateDates={onRemoveUpdateDatesSubscription}
        open={isActiveChangeDates}
      />
    </>
  )
}
