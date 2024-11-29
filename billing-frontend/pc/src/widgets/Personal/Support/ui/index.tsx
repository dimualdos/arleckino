"use client"

import { useAuth } from "@/src/shared/hooks/useAuth"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import { AppHeader } from "@/src/widgets/AppHeader"
import { FC, useEffect, useState } from "react"

import { apiV1HelpdeskCasesList } from "@/src/gen/clients/axios/apiService"
import { HelpDeskCase } from "@/src/gen/models/ts/HelpDeskCase"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { SupportCard } from "@/src/shared/ui/support-card"
import { ChatMobileFilter } from "@/src/widgets/Dialogs/chat/ChatMobileFilter"
import clsx from "clsx"
import { format } from "date-fns"
import { ListFilter, PlusCircle, RotateCw } from "lucide-react"
import { useTranslations } from "next-intl"
import { FilterFields, THREAD_STATUS } from "./FilterFields"
import { SupportChat } from "./SupportChat"
import { SupportForm } from "./SupportForm"
import { log } from "console"

interface ComponentProps {}
type StatusMessageProps = "open" | "await" | "closed"

export type threadsFilterProps = {
  subject: string | null
  number: string | null
  status: string | null
}

export const PersonalSupport: FC<ComponentProps> = () => {
  const { signOut, redirectIfNotSignIn } = useAuth()
  const t = useTranslations("support")
  const { active: isActiveSupportForm, setActive: setActiveSupportForm, toggle: toggleSupportForm } = useToggle()
  const { active: isActiveSupportChat, setActive: setActiveSupportChat, toggle: toggleSupportChat } = useToggle()
  const { active: isActiveMobileFilter, setActive: setActiveMobileFilter, toggle: toggleMobileFilter } = useToggle()
  const [threadsFilter, setThreadsFilter] = useState<threadsFilterProps>({ subject: null, number: null, status: null })
  const [selectedCase, setSelectedCase] = useState<HelpDeskCase>()
  const [taskId, setTaskId] = useState<string | undefined>()
  const [casesListStatus, setCasesListStatus] = useState<"success" | "processed">("processed")
  const [casesList, setCasesList] = useState<HelpDeskCase[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    const longAction = () => {
      setIsLoading(true)
      if (casesListStatus === "success") {
        setIsLoading(false)
        return
      }
      if (taskId) {
        apiV1HelpdeskCasesList({
          params: {
            task_id: taskId,
          },
        }).then((d) => {
          setCasesListStatus(d.data.status)
          if (d.data.status === "success") {
            setCasesList(d.data.items ?? [])
            setIsLoading(false)
          } else longAction()
        })
        // setIsLoading(false)
      } else {
        apiV1HelpdeskCasesList().then((d) => {
          setTaskId(d.data.task_id)
        })
      }
    }
    longAction()
  }, [casesListStatus, taskId])

  const handleUpdate = () => {
    setIsLoading(true)
    setTaskId(undefined)
    setCasesListStatus("processed")
    setCasesList([])
  }

  const tHeader = useTranslations("header")

  const handleResetFilters = () => setThreadsFilter({ number: null, status: null, subject: null })
  const filteredCases = casesList.filter((item) => {
    const { status, number, subject } = threadsFilter
    console.log(item.status, status)

    // Проверяем, что каждый не-null фильтр совпадает хотя бы частично
    return (
      (status === null || status === "all" || (item.status && item.status === status)) &&
      (number === null || (item.case_id && item.case_number.toString().includes(number))) &&
      (subject === null || (item.subject && item.subject.includes(subject)))
    )
  })
  return (
    <>
      <div className="flex flex-1 flex-col">
        <AppHeader className="flex-row items-center justify-between space-y-2 lg:space-y-1">
          <div>
            <h1>
              {t("h1")} <span className="ml-4 text-grey"></span>
            </h1>
            <p className="text-base font-medium text-grey-extra-hard">{t("description")} </p>
          </div>
        </AppHeader>

        <div className="flex flex-1 flex-col bg-blue-soft pb-8 pt-4 lg:pb-10">
          {/* TOP ACTIONS START */}
          <div className="container flex items-center justify-between">
            <div className="inline-flex w-[60%] space-x-2 lg:hidden">
              <FilterFields
                threadsFilter={threadsFilter}
                setThreadsFilter={setThreadsFilter}
                handleResetFilters={handleResetFilters}
              />
            </div>

            <div className="ml-auto mt-auto inline-flex items-center space-x-2">
              <Button
                onClick={toggleSupportForm}
                className={buttonVariants({ className: "flex items-center space-x-1 uppercase" })}
              >
                <PlusCircle className="size-5 text-white lg:hidden" />
                <span className="lg:text-sm">{t("ButtonNewMessage")}</span>
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="bg-white"
                onClick={handleUpdate}
              >
                <RotateCw className="size-5 text-black" />
              </Button>
              <Button
                onClick={toggleMobileFilter}
                className="hidden lg:inline-flex"
                variant={"outline"}
                size={"icon"}
              >
                <ListFilter />
              </Button>
            </div>
          </div>
          {/* TOP ACTIONS END */}

          {/* CONTENT START */}
          <div className="container mt-4 flex w-full flex-1 flex-col lg:rounded-lg lg:bg-white lg:py-6">
            {/* Desktop */}
            <div className="relative flex-1 overflow-x-auto rounded-sm border bg-white lg:hidden">
              <table className="w-full border-b text-left font-medium">
                <thead className="bg-grey-extra-soft text-grey-extra-hard">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5w-[42.3%] pl-15 pr-6 font-medium"
                    >
                      {t("theme")}
                    </th>
                    <th
                      scope="col"
                      className="w-42 px-6 py-3.5 font-medium"
                    >
                      {t("number")}
                    </th>
                    <th
                      scope="col"
                      className="w-44 px-6 py-3.5 font-medium"
                    >
                      {t("created")}
                    </th>
                    <th
                      scope="col"
                      className="w-44 px-6 py-3.5 font-medium"
                    >
                      {t("updated")}
                    </th>
                    <th
                      scope="col"
                      className="w-44 px-6 py-3.5 font-medium"
                    >
                      {t("status")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!isLoading ? (
                    filteredCases.length > 0 ? (
                      filteredCases.map((item, indx) => {
                        const { status, dt_create, dt_update } = item
                        const statusType = status as StatusMessageProps
                        return (
                          <tr
                            key={indx}
                            className={clsx("relative border-b bg-white last:border-0", {
                              "font-bold": statusType === "open",
                            })}
                          >
                            <td className="relative py-4 pl-15 pr-6">
                              <div className="line-clamp-1">
                                <span
                                  className={clsx("absolute left-6 top-1/2 size-2 -translate-y-1/2 rounded-full", {
                                    "bg-valid": statusType === "open",
                                    "bg-accent": statusType === "await",
                                    "bg-grey-soft": statusType === "closed",
                                  })}
                                ></span>
                                <span>{item.subject}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="line-clamp-1">{item.case_number}</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="line-clamp-1">{format(dt_create, "dd.MM.yyyy HH:mm")}</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="line-clamp-1">{format(dt_update ?? dt_create, "dd.MM.yyyy HH:mm")}</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="line-clamp-1">{THREAD_STATUS[item.status as keyof typeof THREAD_STATUS]}</div>
                              <Button
                                onClick={() => {
                                  toggleSupportChat()
                                  setSelectedCase(item)
                                }}
                                variant={"transparent"}
                                className="absolute inset-0 m-1"
                              ></Button>
                            </td>
                          </tr>
                        )
                      })
                    ) : (
                      // TODO ВЕРСТКА плейсхолдер 'не найдено'
                      <>не найдено</>
                    )
                  ) : (
                    // TODO ВЕРСТКА лоадер
                    <>LOADING</>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="hidden space-y-4 lg:block">
              {!isLoading ? (
                filteredCases.length > 0 ? (
                  filteredCases.map((item, indx) => {
                    return (
                      <SupportCard
                        onClickItem={() => {
                          toggleSupportChat()
                          setSelectedCase(item)
                        }}
                        item={{
                          ...item,
                          is_unread: `${item.is_unread}`,
                          dt_update: new Date(item.dt_create),
                          dt_create: new Date(item.dt_create),
                          dt_close: item.dt_close,
                          dt_last_response: item.dt_last_response,
                        }}
                        key={indx}
                      />
                    )
                  })
                ) : (
                  // TODO ВЕРСТКА! плейсхолдер 'не найдено'
                  <>не найдено</>
                )
              ) : (
                // TODO ВЕРСТКА! лоадер
                <>LOADING</>
              )}
            </div>

            {/* Pagination */}
            {/* <div className="mt-10 hidden flex-col items-center space-y-4 bg-white lg:flex">
              <Button
                className="w-full"
                variant={"outline"}
              >
                Дальше
              </Button>
              <div className="flex justify-center space-x-2">
                <Button
                  className="size-8 rounded-xs"
                  size={"none"}
                >
                  1
                </Button>
                <Button
                  className="size-8 rounded-xs"
                  variant={"grey-extra-soft"}
                  size={"none"}
                >
                  2
                </Button>
                <Button
                  className="size-8 rounded-xs"
                  variant={"grey-extra-soft"}
                  size={"none"}
                >
                  3
                </Button>
                <Button
                  className="size-8 rounded-xs"
                  variant={"grey-extra-soft"}
                  size={"none"}
                >
                  4
                </Button>
                <Button
                  className="size-8 rounded-xs"
                  variant={"grey-extra-soft"}
                  size={"none"}
                >
                  5
                </Button>
                <Button
                  className="size-8 rounded-xs"
                  variant={"grey-extra-soft"}
                  size={"none"}
                >
                  6
                </Button>
                <Button
                  className="size-8 rounded-xs"
                  variant={"grey-extra-soft"}
                  size={"none"}
                >
                  7
                </Button>
              </div>
            </div> */}
          </div>
          {/* CONTENT END */}
        </div>
      </div>

      <SupportForm
        isActive={isActiveSupportForm}
        setActive={setActiveSupportForm}
        handleUpdate={handleUpdate}
      />

      <SupportChat
        selectedCase={selectedCase}
        isActive={isActiveSupportChat}
        setActive={setActiveSupportChat}
      />

      <ChatMobileFilter
        handleResetFilters={handleResetFilters}
        isActive={isActiveMobileFilter}
        setActive={setActiveMobileFilter}
      >
        <FilterFields
          handleResetFilters={handleResetFilters}
          threadsFilter={threadsFilter}
          setThreadsFilter={setThreadsFilter}
        />
      </ChatMobileFilter>
    </>
  )
}
