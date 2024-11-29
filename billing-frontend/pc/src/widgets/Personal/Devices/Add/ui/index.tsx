import React from "react"
import { AddDeviceName } from "./AddDeviceName"
import { Footer } from "./Footer"
import { AddDeviceServer } from "./AddDeviceServer"
import { useAddDevice } from "../hooks"
import { AddDeviceSubscription } from "./AddDeviceSubscription"
import { Header } from "./Header"
import { CredenzaUpdateDeviceSubscriptions } from "@/src/widgets/Dialogs/device/CredenzaUpdateDeviceSubscriptions"
import { AddDeviceChannels } from "./AddDeviceChannels"

type Props = {}

export const PersonalAddDevice = (props: Props) => {
  const {
    query,
    parsedStepNumber,
    useFormAPI,
    watchServerType,
    watchServerTypeStatus,
    watchServerTypeProgress,
    isActiveUpdateSubscription,
    getBack,
    getForward,
    onStartTestCustomServer,
    getForwardCallback,
    onChageUpdateSubscription,
    toggleUpdateSubscription,
    onSubmitUpdateSubscription,
  } = useAddDevice()

  const renderSteps = () => {
    // @ts-ignore
    if (parsedStepNumber <= 1) return <AddDeviceName useFormAPI={useFormAPI} />
    if (parsedStepNumber === 2)
      return (
        <AddDeviceServer
          // @ts-ignore
          useFormAPI={useFormAPI}
          watchServerType={watchServerType}
          watchServerTypeStatus={watchServerTypeStatus}
          watchServerTypeProgress={watchServerTypeProgress}
          onStartTestCustomServer={onStartTestCustomServer}
        />
      )
    if (parsedStepNumber === 3) return <AddDeviceChannels />
    if (parsedStepNumber === 4) return <AddDeviceSubscription />
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header
        parsedStepNumber={parsedStepNumber}
        query={query}
      />

      <div className="flex-1 bg-purple-soft py-10 pb-10 lg:py-4">{renderSteps()}</div>

      <Footer
        getBack={getBack}
        getForward={getForward}
        watchServerTypeStatus={watchServerTypeStatus}
        parsedStepNumber={parsedStepNumber}
        getForwardCallback={getForwardCallback}
      />

      <CredenzaUpdateDeviceSubscriptions
        open={isActiveUpdateSubscription}
        removeUpdateDates={toggleUpdateSubscription}
      // onChange={onChageUpdateSubscription}
      // toggle={toggleUpdateSubscription}
      // onSubmit={onSubmitUpdateSubscription}
      // title="Подтверждение покупки подписки"
      // description="Средства спишутся с Вашего баланса"
      />
    </div>
  )
}
