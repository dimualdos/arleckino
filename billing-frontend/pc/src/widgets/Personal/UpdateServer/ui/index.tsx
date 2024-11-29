"use client"
import { Button } from "@/src/shared/ui/button"
import { AppHeader } from "@/src/widgets/AppHeader"
import React, { FC, useEffect, useState } from "react"
import { RadioGroup } from "@/src/shared/ui/radio-group"
import { ServerCard } from "@/src/shared/ui/server-card"
import { Save, ChevronRight } from "lucide-react"
import { useApiV1UserDeviceListListInfinite } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList"
import { useCDNServer } from "@/src/shared/hooks/useCDNServer"
import { set } from "lodash"
import Link from "next/link"
import { useRouter } from "next/router"
import { Device } from "@/src/gen/models/ts/Device"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslations } from "next-intl"

interface ComponentProps {}

//** страница update-server */
const emptyMessage = { type: "", text: "" }

export const PersonalUpdateServer: FC<ComponentProps> = () => {
  const t = useTranslations("changeServer")

  const router = useRouter()
  const [isIdDeviceStore, setIsIdDeviceStore] = useState<string>("")
  const [textCreateServer, textCreateServerSet] = useState(false)
  const clientDevices = useQueryClient()
  const { data: dataDevicesUserInfinite, isSuccess: isSuccessInfinite, queryKey: queryKeyInfinite } = useApiV1UserDeviceListListInfinite({ limit: 100000000 })
  const { bindDeviceToServer, handleSetAutoServer, handleStartStopAllServersTest, testProgress, isGeneralTestError, selectedServer, isAllServerTest, successTestedServer, isSuccessCreateServer } =
    useCDNServer(Number(isIdDeviceStore))

  const [selectServerValue, setSelectServerValue] = useState("item1")
  const [serverFromDevice, serverFromDeviceSet] = useState()

  useEffect(() => {
    if (isSuccessInfinite && dataDevicesUserInfinite.pages[0]) {
      serverFromDeviceSet(dataDevicesUserInfinite.pages[0].data.results.find((item: Device) => item.id === +isIdDeviceStore)?.server)
    }
  }, [dataDevicesUserInfinite?.pages, isIdDeviceStore, isSuccessInfinite])

  const onSelectServer = (value: string) => {
    setSelectServerValue(value)
  }
  useEffect(() => {
    if (isSuccessCreateServer) {
      clientDevices.invalidateQueries(queryKeyInfinite)
      textCreateServerSet(true)
      setTimeout(() => {
        textCreateServerSet(false)
      }, 4000)
    }
  }, [isSuccessCreateServer])

  useEffect(() => {
    const id: string | null = localStorage.getItem("updateServerID")
    if (id) setIsIdDeviceStore(id)
  }, [dataDevicesUserInfinite, isSuccessInfinite])

  const statusTested = isAllServerTest ? "progress" : successTestedServer && !isGeneralTestError ? "completed" : isGeneralTestError ? "error" : "none"

  return (
    <>
      <div className="flex flex-1 flex-col">
        <AppHeader className="flex-row items-center justify-between space-y-2 lg:space-y-1">
          <h1> {t("h1")}</h1>
        </AppHeader>

        <div className="flex flex-1 flex-col bg-blue-soft py-10">
          {/* CONTENT START */}
          {/* TODO: Unificate start */}
          <div className="container max-w-[560px] flex-1 lg:max-w-none lg:rounded-lg lg:bg-white lg:p-6">
            <div className="space-y-2">
              <p className="text-2xl font-semibold lg:text-xl"> {t("title")}</p>
              <p className="font-medium text-grey-extra-hard">
                {t("desc")} ({!serverFromDevice ? t("subdesc1") : serverFromDevice === 9 ? t("subdesc2") : t("subdesc3")})
              </p>
            </div>
            {/* RADIO START */}
            <RadioGroup
              className="mt-6"
              onValueChange={onSelectServer}
              defaultValue="item1"
            >
              <ServerCard
                radioId="item1"
                radioValue="item1"
                name={t("server1.name")}
                variant="CDN"
                description={t("server1.desc")}
              />
              <ServerCard
                radioId="item2"
                radioValue="item2"
                variant="test"
                status={statusTested}
                loadingPercent={Number(testProgress.toFixed())}
                name={t("server2.name")}
                description={t("server2.desc")}
                startAllServersTest={handleStartStopAllServersTest}
              />
            </RadioGroup>
            {/* RADIO END */}

            {/* ACTIONS START */}
            <div className="mt-8 flex items-center space-x-2 lg:space-x-0">
              <Button
                onClick={selectServerValue === "item1" ? () => handleSetAutoServer(true) : () => bindDeviceToServer(Number(selectedServer?.id))}
                className="space-x-1 uppercase lg:w-full"
                disabled={(selectServerValue === "item2" && !selectedServer) || textCreateServer || isAllServerTest}
              >
                <Save className="size-5 text-white" />
                <span>{textCreateServer ? t("buttonSaved") : t("buttonSave")}</span>
              </Button>
            </div>
            {/* ACTIONS END */}
          </div>
          {/* TODO: Unificate end */}
          {/* CONTENT END */}
        </div>
      </div>

      <Link href={"/personal-page/subscription"}>
        <div className="flex h-[96px] max-w-[100vw] items-center justify-center">
          <div className="flex w-[60%] justify-between md:w-full md:px-5">
            <Link href={"/personal-page/subscription"}>
              <Button
                onClick={() => router.back()}
                className="space-x-1 uppercase"
                variant={"transparent"}
                disabled={(selectServerValue === "item2" && !selectedServer) || isAllServerTest}
              >
                <span>{t("back")}</span>
              </Button>
            </Link>
            <Link href={"/personal-page/update-channels"}>
              <Button
                className="space-x-1 uppercase"
                disabled={(selectServerValue === "item2" && !selectedServer) || textCreateServer || isGeneralTestError || !serverFromDevice || isAllServerTest}
              >
                <span>{t("next")}</span>
                <ChevronRight className="size-5 text-white" />
              </Button>
            </Link>
          </div>
        </div>
      </Link>
    </>
  )
}
