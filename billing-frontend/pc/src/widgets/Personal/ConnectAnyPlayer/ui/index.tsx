"use client"

import { Button } from "@/src/shared/ui/button"
import { AppHeader } from "@/src/widgets/AppHeader"
import React, { FC } from "react"
import { PlusCircle } from "lucide-react"
import { Label } from "@/src/shared/ui/label"
import { Input } from "@/src/shared/ui/input"
import { useTranslations } from "next-intl"

interface ComponentProps {}

export const PersonalConnectAnyPlayer: FC<ComponentProps> = () => {
  const t = useTranslations("anyPlayer")
  return (
    <>
      <div className="flex flex-1 flex-col">
        <AppHeader className="flex-row items-center justify-between space-y-2 lg:space-y-1">
          <h1>{t("connect.title")}</h1>
        </AppHeader>

        <div className="flex flex-1 flex-col bg-blue-soft py-10">
          {/* TODO: Unificate code START */}
          <div className="container max-w-[560px] space-y-6 rounded-lg bg-white p-8 lg:max-w-none lg:p-6">
            <p className="text-2xl font-semibold lg:text-xl">{t("connect.text")} </p>
            <div className="flex space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2">
              <div className="space-y-0.5">
                <Label>{t("connect.code")}</Label>
                <Input />
              </div>
              <Button className="mt-auto items-center space-x-2 uppercase">
                <PlusCircle className="size-5 text-white" />
                <span>{t("connect.connect")}</span>
              </Button>
            </div>
          </div>
          {/* TODO: Unificate code END */}
        </div>
      </div>
    </>
  )
}
