import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Input } from "@/src/shared/ui/input"
import { Label } from "@/src/shared/ui/label"
import { Search, X } from "lucide-react"
import { useState } from "react"
import { threadsFilterProps } from "."
import { throttle } from "lodash"
import clsx from "clsx"
import { Button } from "@/src/shared/ui/button"
import { useTranslations } from "next-intl"

type Props = { threadsFilter: threadsFilterProps; setThreadsFilter: React.Dispatch<React.SetStateAction<threadsFilterProps>>; handleResetFilters: () => void }

export enum THREAD_STATUS {
  all = "Все тикеты",
  open = "Открытые",
  closed = "Закрытые",
  waiting = "В ожидании",
}

const threadStatusArray = Object.entries(THREAD_STATUS).map(([key, value]) => ({
  key: key,
  value: value,
}))

export const FilterFields = ({ threadsFilter, setThreadsFilter, handleResetFilters }: Props) => {
  const t = useTranslations("support")
  const handleSearchInput = (type: keyof threadsFilterProps, text: string) => {
    setThreadsFilter({ ...threadsFilter, [type]: text || null })
  }
  const onSelectStatus = (value: string | undefined) => {
    if (value) {
      handleSearchInput("status", value)
    }
  }
  const isFilterNotEmpty = !!threadsFilter.number || !!threadsFilter.status || !!threadsFilter.subject

  return (
    <>
      <div className="w-[41%] space-y-0.5 lg:w-full">
        <Label className="block">{t("theme")}</Label>
        <div className="relative">
          <Input
            placeholder={t("search")}
            value={threadsFilter["subject"] ?? ""}
            onChange={({ target }) => handleSearchInput("subject", target.value)}
          />
          <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-grey" />
        </div>
      </div>

      <div className="w-[28%] space-y-0.5 lg:w-full">
        <Label className="block">{t("number")}</Label>
        <div className="relative">
          <Input
            placeholder={t("search")}
            value={threadsFilter["number"] ?? ""}
            onChange={({ target }) => handleSearchInput("number", target.value)}
          />
          <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-grey" />
        </div>
      </div>

      <div className="w-[28%] space-y-0.5 lg:w-full">
        <Label>{t("status")}</Label>
        <Select onValueChange={onSelectStatus}>
          <SelectTrigger className="text-base">
            <SelectValue placeholder="Статус" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* TODO ВЕРСТКА  починить селект (прожимает насквозь + не отрабатывает onChange) */}
              {threadStatusArray.map((item) => (
                <SelectItem
                  className="px-4"
                  key={item.key}
                  value={item.key}
                >
                  <span className="text-base">{item.value}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div
        className={clsx("space-y-0.5 transition-all duration-300 lg:hidden", {
          "pointer-events-none opacity-0": !isFilterNotEmpty,
          "pointer-events-all opacity-100": isFilterNotEmpty,
        })}
      >
        <Label className="text-transparent opacity-0 selection:bg-transparent selection:text-transparent">{t("actions")}</Label>
        <Button
          variant={"outline"}
          size={"icon"}
          className="bg-white"
          onClick={handleResetFilters}
        >
          <X className="size-5 text-black" />
        </Button>
      </div>
    </>
  )
}
