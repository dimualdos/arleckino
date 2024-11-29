"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { useApiV1ActionsUserLogsList } from "@/src/gen/clients/hooks/apiController/useApiV1ActionsUserLogsList"
import { ApiV1ActionsUserLogsListQueryParams, ApiV1ActionsUserLogsListQueryResponse } from "@/src/gen/models/ts/apiController/ApiV1ActionsUserLogsList"
import { useAuth } from "@/src/shared/hooks/useAuth"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { SharedQueryLogs } from "@/src/shared/types"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import { AppHeader } from "@/src/widgets/AppHeader"
import { LogMobileFilter } from "@/src/widgets/Dialogs/worklog/LogMobileFilter"
import { FaqPagination } from "@/src/widgets/FaqPagination"
import { addDays, format, subDays } from "date-fns"
import { ListFilter } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"
import qs from "query-string"
import React, { FC, useEffect, useState } from "react"
import { DateRange } from "react-day-picker"
import { MobileDatePicker } from "../../../Dialogs/MobileDatePicker"
import { FilterFields } from "./FilterFields"
import { useTranslations } from "next-intl"
import { useDevices } from "@/src/shared/hooks/useDevices"
import { Device } from "@/src/gen/models/ts/Device"

interface ComponentProps {}

export const REQUEST_DATE_FORMAT = "yyyy-MM-dd"

export const PersonalLog: FC<ComponentProps> = () => {
  const { signOut, redirectIfNotSignIn } = useAuth()
  const router = useRouter()
  const query = router.query as SharedQueryLogs
  const t = useTranslations("workLog")
  const { selectedDevices } = useDevices()
  const [limit, limitSet] = useState(10)
  const [pageNumber, pageNumberSet] = useState(1)
  const [logsQuery, logsQuerySet] = useState<ApiV1ActionsUserLogsListQueryParams>({ limit: 10 })

  const [search, setSearch] = useState<string | null>(null)
  const [device, setDevice] = useState<Device | undefined>()

  useEffect(() => {
    if (query.limit) {
      limitSet(parseInt(query.limit))
      logsQuerySet((prev) => ({ ...prev, page: 1, limit: parseInt(query.limit!) }))
    }
    if (query.page) {
      pageNumberSet(parseInt(query.page))
      logsQuerySet((prev) => ({ ...prev, page: parseInt(query.page!) }))
    }
  }, [query])

  const { data, isLoading, isError, error } = useApiV1ActionsUserLogsList(logsQuery)

  const { results, count } = data?.data ?? ({} as ApiV1ActionsUserLogsListQueryResponse)

  const useApiV1UserLogs = useApiV1ActionsUserLogsList(logsQuery, { query: { keepPreviousData: true } })
  const { active: openMobileFilter, setActive: openMobileFilterSet, toggle: openMobileFilterToggle } = useToggle()
  const { active: isActiveDatePicker, setActive: setActiveDatePicker, toggle: toggleDatePicker } = useToggle()
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: subDays(new Date(), 31),
    to: new Date(),
  })
  useEffect(() => {
    onSelectDate(date)
  }, [date])
  useEffect(() => {
    onChangeSearch(search)
  }, [search])
  useEffect(() => {
    onChangeDevice(device)
  }, [device])

  const pages = [
    {
      label: "10 на стр.",
      value: `10`,
    },
    {
      label: "30 на стр.",
      value: `30`,
    },
    {
      label: "100 на стр.",
      value: `100`,
    },
  ]

  const onSelectLimit = async (val: string) => {
    const parsedValue = parseInt(val)
    logsQuerySet((prev) => ({ ...prev, limit: parsedValue }))
    const currentUrl = qs.exclude(router.asPath, ["limit, page"], {
      arrayFormat: "comma",
      encode: false,
    })
    const prepareUrl = qs.stringifyUrl(
      {
        url: currentUrl,
        query: {
          page: 1,
          limit: val,
        },
      },
      {
        encode: false,
      },
    )
    await router.push(prepareUrl, undefined, { shallow: true })
  }
  const onSelectDate = (date: DateRange | undefined) => {
    logsQuerySet((prev) => ({ ...prev, d_begin: date?.from ? format(date?.from, REQUEST_DATE_FORMAT) : "", d_end: date?.to ? format(date?.to, REQUEST_DATE_FORMAT) : "" }))
  }
  const onChangeSearch = (search: string | null) => {
    search && logsQuerySet((prev) => ({ ...prev, q: search }))
  }

  const onChangeDevice = (device: Device | undefined) => {
    // TODO добавить фильтрацию по устройству когда она будет готова
    // device && logsQuerySet((prev) => ({ ...prev, group: }))
  }

  redirectIfNotSignIn()

  return (
    <>
      <form className="flex flex-1 flex-col">
        <AppHeader className="flex-row items-center justify-between space-y-2 lg:space-y-1">
          <h1> {t("h1")}</h1>

          <div className="flex items-start space-x-2 lg:hidden lg:flex-row-reverse">
            <Link
              href="/personal-page/devices"
              className={buttonVariants({ className: "uppercase selection:bg-transparent", variant: "outline" })}
            >
              {t("HeaderButton")}
            </Link>
          </div>
          <Button
            onClick={openMobileFilterToggle}
            className="hidden lg:inline-flex"
            variant={"outline"}
            size={"icon"}
          >
            <ListFilter />
          </Button>
        </AppHeader>

        <div className="flex flex-1 flex-col bg-blue-soft pb-8 pt-4 lg:pb-10">
          {/* FILTERS START */}
          <div className="container flex items-center justify-between lg:hidden">
            <FilterFields
              toggleDatePicker={toggleDatePicker}
              date={date}
              setDate={setDate}
              setSearch={setSearch}
              setDevice={setDevice}
              selectedDevices={selectedDevices}
            />
          </div>
          {/* FILTERS END */}

          {/* CONTENT START */}
          <div className="container mt-4 w-full flex-1 lg:rounded-lg lg:bg-white lg:py-6">
            {/* Desktop */}
            <div className="relative overflow-x-auto rounded-sm border bg-white lg:hidden">
              <table className="w-full text-left">
                <thead className="bg-grey-extra-soft text-grey-extra-hard">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3.5 font-medium"
                    >
                      {t("date")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 font-medium"
                    >
                      {t("desc")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results?.map(({ created_at, message }, indx) => (
                    <tr
                      key={indx}
                      className="border-b bg-white last:border-0"
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium"
                      >
                        {format(created_at!, "dd.MM.yyyy HH:mm")}
                      </th>
                      <td className="px-6 py-4">
                        <div className="line-clamp-1">{message}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-between border-t px-6 py-4">
                <FaqPagination
                  meta={{
                    page: query.page ? parseInt(query.page) : 1,
                    total: count ? count : 1,
                    pageSize: query.limit ? parseInt(query.limit) : 10,
                  }}
                  baseRoute="/personal-page/logs"
                />

                <Select onValueChange={onSelectLimit}>
                  <SelectTrigger className="w-36 text-base">
                    <SelectValue placeholder={pages.find((p) => p.value === logsQuery?.limit?.toString())?.label} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {pages.map((item) => (
                        <SelectItem
                          className="px-4"
                          key={item.value}
                          value={item.value}
                        >
                          <span className="text-base">{item.label}</span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mobile */}
            <div className="hidden space-y-4 pt-4 lg:block">
              {results?.map(({ created_at, message }, indx) => (
                <div
                  className="mb-4 border-b pb-4 last:mb-0 last:border-0 last:pb-0"
                  key={indx}
                >
                  <p className="text-grey-hard">{format(created_at!, "dd.MM.yyyy HH:mm")}</p>
                  <p>{message}</p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 hidden flex-col items-center space-y-4 bg-white lg:flex">
              <FaqPagination
                meta={{
                  page: query.page ? parseInt(query.page) : 1,
                  total: count ? count : 1,
                  pageSize: query.limit ? parseInt(query.limit) : 10,
                }}
                baseRoute="/personal-page/logs"
              />
            </div>
          </div>
          {/* CONTENT END */}
        </div>
      </form>

      <LogMobileFilter
        isOpen={openMobileFilter}
        openChange={openMobileFilterSet}
      >
        <FilterFields
          toggleDatePicker={toggleDatePicker}
          date={date}
          setDate={setDate}
          setSearch={setSearch}
          setDevice={setDevice}
          selectedDevices={selectedDevices}
        />
      </LogMobileFilter>

      <MobileDatePicker
        isActive={isActiveDatePicker}
        setActive={setActiveDatePicker}
        date={date}
        setDate={setDate}
      />
    </>
  )
}
