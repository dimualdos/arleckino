import clsx from "clsx"
import React from "react"
import { RadioGroupItem } from "./radio-group"
import { Button } from "./button"
import { CheckIcon, Server, X } from "lucide-react"

interface IButtonClick {
  startStopAllServersTest?: () => void
  percent?: number
}
type Props = {
  radioId: string
  radioValue: string
  name: string
  description: string
  variant: "CDN" | "test"
  status?: "none" | "progress" | "completed" | "error"
  cssVariant?: "default" | "white"
  loadingPercent?: number
  startAllServersTest?: () => void
}

const StateDefault = ({ startStopAllServersTest }: IButtonClick) => (
  <div className="flex items-center space-x-6 md:flex-col md:items-start md:space-x-0 md:space-y-3">
    <Button
      variant={"outline"}
      onClick={startStopAllServersTest}
      className="uppercase md:hidden"
    >
      Подобрать
    </Button>

    <div className="flex items-center text-grey-hard md:space-x-2.5 md:text-foreground">
      <Server className="hidden size-5 text-grey-hard md:block" />
      <div>Сервер не подобран</div>
    </div>
    <button
      onClick={startStopAllServersTest}
      className="hidden text-accent md:inline-block"
    >
      Подобрать
    </button>
  </div>
)

const StateLoading = ({ percent = 0, startStopAllServersTest }: IButtonClick) => (
  <div className="flex items-start space-x-6 md:flex-col md:items-start md:space-x-0 md:space-y-3">
    <Button
      onClick={startStopAllServersTest}
      variant={"outline"}
      className="uppercase md:hidden"
    >
      Отмена
    </Button>
    <div className="space-y-2">
      <div className="text-sm">
        Идет подбор сервера.
        <br /> Пожалуйста не уходите и не обновляйте страницу
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex h-1.5 flex-1 items-center overflow-hidden rounded-full bg-grey-soft">
          <span
            style={{ width: `${percent}%` }}
            className="h-full bg-purple"
          />
        </div>
        <div className="text-xs">{percent}%</div>
      </div>
    </div>
    <button className="hidden text-accent md:inline-block">Отмена</button>
  </div>
)

const StateSuccess = ({ startStopAllServersTest }: IButtonClick) => (
  <div className="flex items-center space-x-6 md:flex-col md:items-start md:space-x-0 md:space-y-3">
    <Button
      onClick={startStopAllServersTest}
      variant={"outline"}
      className="uppercase md:hidden"
    >
      Подобрать
    </Button>
    <div className="flex space-x-2">
      <CheckIcon className="size-5 text-valid" />
      <span>Сервер успешно подобран</span>
    </div>
    <button
      onClick={startStopAllServersTest}
      className="hidden text-accent md:inline-block"
    >
      Повторить подбор
    </button>
  </div>
)

const StateError = ({ startStopAllServersTest }: IButtonClick) => (
  <div className="flex items-center space-x-6 md:flex-col md:items-start md:space-x-0 md:space-y-3">
    <Button
      onClick={startStopAllServersTest}
      variant={"outline"}
      className="uppercase md:hidden"
    >
      Подобрать
    </Button>
    <div className="flex space-x-2">
      <span className="inline-flex size-5 min-w-5 items-center justify-center rounded-full border-2 border-destructive">
        <X className="size-3 stroke-[3px] text-destructive" />
      </span>
      <span>
        Не удалось подобрать сервер. <br /> Попробуйте еще раз позже или выберите сервер «CDN»{" "}
      </span>
    </div>
    <button
      onClick={startStopAllServersTest}
      className="hidden pl-7 text-accent md:inline-block"
    >
      Повторить подбор
    </button>
  </div>
)

export const ServerCard = ({ radioId, radioValue, name, description, variant, cssVariant = "default", status = "none", loadingPercent, startAllServersTest }: Props) => {
  const renderState = () => {
    switch (status) {
      case "none":
        return <StateDefault startStopAllServersTest={startAllServersTest} />
      case "progress":
        return (
          <StateLoading
            startStopAllServersTest={startAllServersTest}
            percent={loadingPercent}
          />
        )
      case "completed":
        return <StateSuccess startStopAllServersTest={startAllServersTest} />
      case "error":
        return <StateError startStopAllServersTest={startAllServersTest} />
      default:
        break
    }
  }

  return (
    <div className={clsx("relative rounded-lg", {})}>
      <RadioGroupItem
        className="peer absolute left-8 top-6 z-10 lg:left-4 lg:top-4"
        id={radioId}
        value={radioValue}
      />
      <div
        className={clsx(
          "absolute inset-0 h-full w-full rounded-lg border border-transparent peer-data-[state=checked]:border-purple peer-data-[state=unchecked]:border-transparent peer-data-[state=checked]:bg-white peer-data-[state=unchecked]:bg-white lg:peer-data-[state=unchecked]:border-grey-soft",
          {
            "lg:peer-data-[state=unchecked]:bg-transparent": cssVariant === "default",
            "lg:peer-data-[state=unchecked]:bg-white": cssVariant === "white",
          },
        )}
      ></div>

      <div className="py-6 pl-16 pr-8 lg:py-4 lg:pl-12 lg:pr-4">
        <div className="relative z-20">
          <p className="flex flex-1 items-center space-x-2 font-bold">{name}</p>
          <p className="mt-1 text-grey-extra-hard">{description}</p>
          {variant === "test" && <div className="relative z-20 mt-3.5">{renderState()}</div>}
        </div>
      </div>
      <label
        className="absolute inset-0 z-10 h-full w-full"
        htmlFor={radioId}
      />
    </div>
  )
}
