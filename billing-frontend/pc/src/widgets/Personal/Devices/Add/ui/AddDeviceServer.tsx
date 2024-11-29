import React from "react"
import { RadioGroup } from "@/src/shared/ui/radio-group"
import { ServerCard } from "@/src/shared/ui/server-card"
import { UseFormReturn } from "react-hook-form"
import { AddDeviceProps, ServerType, ServerTypeStatus } from "../types"

type Props = {
  useFormAPI: UseFormReturn<AddDeviceProps, any, AddDeviceProps>
  watchServerType: ServerType
  watchServerTypeStatus: ServerTypeStatus
  watchServerTypeProgress: number
  onStartTestCustomServer: () => Promise<void>
}

export const AddDeviceServer = ({ useFormAPI, watchServerType, watchServerTypeProgress, watchServerTypeStatus, onStartTestCustomServer }: Props) => {
  const onSelectServer = (value: string | undefined) => {
    console.log("selected: ", value)
  }

  const renderTestCard = () => {
    switch (watchServerTypeStatus) {
      case "none":
        return (
          <ServerCard
            radioId="item2"
            radioValue="item2"
            name="Оптимальный сервер с помощью теста"
            status="none"
            startAllServersTest={onStartTestCustomServer}
            variant="test"
          cssVariant="white"
            description="С помощью теста и выбирается наилучший сервер на основе вашего интернет соединения"
          />
        )
      case "progress":
        return (
          <ServerCard
            radioId="item2"
            radioValue="item2"
            name="Оптимальный сервер с помощью теста"
            loadingPercent={watchServerTypeProgress}
            status="progress"
            variant="test"
          cssVariant="white"
            description="С помощью теста и выбирается наилучший сервер на основе вашего интернет соединения"
          />
        )
      case "error":
        return (
          <ServerCard
            radioId="item2"
            radioValue="item2"
            name="Оптимальный сервер с помощью теста"
            status="error"
            variant="test"
          cssVariant="white"
            startAllServersTest={onStartTestCustomServer}
            description="С помощью теста и выбирается наилучший сервер на основе вашего интернет соединения"
          />
        )
      case "completed":
        return (
          <ServerCard
            radioId="item2"
            radioValue="item2"
            name="Оптимальный сервер с помощью теста"
            status="completed"
            startAllServersTest={onStartTestCustomServer}
            variant="test"
          cssVariant="white"
            description="С помощью теста и выбирается наилучший сервер на основе вашего интернет соединения"
          />
        )
    }
  }

  return (
    <div className="container space-y-6 max-w-[600px] flex-1 lg:max-w-none">
      <div className="space-y-2">
        <p className="text-2xl font-semibold">Выбор сервера</p>
        <p className="font-medium lg:hidden text-grey-extra-hard">Выберите хотя бы один сервер</p>
      </div>
      {/* RADIO START */}
      <RadioGroup
        onValueChange={onSelectServer}
        defaultValue="item1"
      >
        <ServerCard
          radioId="item1"
          radioValue="item1"
          name="CDN"
          variant="CDN"
          cssVariant="white"
          description="Сервер по результам тестов других пользователей и вашему местоположению"
        />
        {renderTestCard()}
      </RadioGroup>
      {/* RADIO END */}
    </div>
  )
}
