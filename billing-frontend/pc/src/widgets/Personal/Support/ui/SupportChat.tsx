import { apiV1HelpdeskCasesCloseCreate, apiV1HelpdeskCasesMessagesCreate, apiV1HelpdeskCasesMessagesList } from "@/src/gen/clients/axios/apiService"
import { HelpDeskCase } from "@/src/gen/models/ts/HelpDeskCase"
import { HelpDeskCaseMessage } from "@/src/gen/models/ts/HelpDeskCaseMessage"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { Button } from "@/src/shared/ui/button"
import { Credenza, CredenzaClose, CredenzaContent } from "@/src/shared/ui/credenza"
import { Label } from "@/src/shared/ui/label"
import { ScrollArea } from "@/src/shared/ui/scroll-area"
import { Sheet, SheetContent } from "@/src/shared/ui/sheet"
import { Textarea } from "@/src/shared/ui/textarea"
import { useUploadFiles } from "@/src/widgets/UploadFiles/hooks"
import clsx from "clsx"
import { AlertCircleIcon, CircleUser, PaperclipIcon, TrashIcon, X } from "lucide-react"
import React, { FC, useEffect, useState } from "react"
import { MdSupportAgent } from "react-icons/md"
// @ts-ignore
import parse from "html-react-parser"

interface ComponentProps {
  isActive: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  selectedCase: HelpDeskCase | undefined
}

export const SupportChat: FC<ComponentProps> = ({ isActive, setActive, selectedCase }) => {
  const acceptedFormats = ""
  const { active: isActiveAlert, setActive: setActiveAlert, toggle: toggleActiveAlert } = useToggle()
  const { files, setFiles, fileInputRef, handleDeleteFile, handleDragOver, handleDrop, handleFileChange, handleOpenSystemDialog } = useUploadFiles({ acceptedFormats, maxFiles: 3, maxSizeInMB: 2 })
  const onAcceptCloseChat = () => {
    setActive(false)
    setMessagesList([])
    setMessagesListStatus("processed")
    setTaskId(undefined)
  }
  const onAcceptCloseChatAndAlert = () => {
    handleCloseCase()
    setActiveAlert(false)
    setActive(false)
    setMessagesList([])
    setMessagesListStatus("processed")
    setTaskId(undefined)
  }

  const [isMessagesListLoading, setIsMessagesListLoading] = useState<boolean>(false)
  const [taskId, setTaskId] = useState<string | undefined>()
  const [Messageslist, setMessagesList] = useState<HelpDeskCaseMessage[]>([])
  const [messagesListStatus, setMessagesListStatus] = useState<"success" | "processed">("processed")

  const [messageText, setMessageText] = useState<string | undefined>()
  const [sendMessageStatus, setSendMessageStatus] = useState<"success" | "processed">("processed")
  const [isSendMessageLoading, setIsSendMessageLoading] = useState<boolean>(false)

  const [closeCaseStatus, setCloseCaseStatus] = useState<"success" | "processed">("processed")
  const [isCloseCaseLoading, setIsCloseCaseLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsMessagesListLoading(true)
    const longAction = () => {
      if (!selectedCase?.case_id || messagesListStatus === "success" || !isActive) {
        setIsMessagesListLoading(false)
        return
      }
      if (taskId) {
        apiV1HelpdeskCasesMessagesList(
          { case_id: selectedCase?.case_id.toString() },
          {
            params: {
              task_id: taskId,
            },
          },
        ).then((d) => {
          setMessagesListStatus(d.data.status)
          if (d.data.status === "success") {
            setMessagesList(d.data.items ?? [])
            setIsMessagesListLoading(false)
          } else {
            setTimeout(longAction, 2000)
          }
        })
      } else {
        apiV1HelpdeskCasesMessagesList({ case_id: selectedCase?.case_id.toString() }).then((d) => {
          setTaskId(d.data.task_id)
        })
      }
    }
    longAction()
  }, [isActive, messagesListStatus, selectedCase?.case_id, taskId])

  const dateStrTodateStr = (dateStr: Date) => {
    return new Date(dateStr).toLocaleString("en-EN", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
  }
  // TODO ВЕРСТКА ADD LOADERS
  const handleAnswer = () => {
    setIsSendMessageLoading(true)
    let taskId: string | undefined
    const longAction = () => {
      if (!selectedCase?.case_id || sendMessageStatus === "success" || !messageText || !isActive) {
        setIsSendMessageLoading(false)
        return
      }
      if (taskId) {
        apiV1HelpdeskCasesMessagesCreate(
          { case_id: selectedCase?.case_id.toString() },
          { content: messageText, attachments: files },
          {
            params: {
              task_id: taskId,
            },
          },
        ).then((d) => {
          setSendMessageStatus(d.data.status)
          if (d.data.status === "success") {
            setMessagesList((prev) => [...prev, d.data.message!])
            setIsSendMessageLoading(false)
            setFiles([])
            setMessageText("")
            setSendMessageStatus("processed")
          } else {
            longAction()
          }
        })
      } else {
        const formData = new FormData()
        formData.append("content", messageText)
        files.forEach((file) => formData.append("attachments", file))
        // TODO FIX TYPES TO ACCEPT FORMDATA
        // @ts-ignore
        apiV1HelpdeskCasesMessagesCreate({ case_id: selectedCase?.case_id.toString() }, formData).then((d) => {
          taskId = d.data.task_id
          // setSendMessageTaskId(d.data.task_id)
          setSendMessageStatus(d.data.status)
          setTimeout(longAction, 2000)
        })
      }
    }
    longAction()
  }
  const handleCloseCase = () => {
    let taskId: string | undefined
    const longAction = () => {
      if (!selectedCase?.case_id || closeCaseStatus === "success" || !isActive) {
        setIsCloseCaseLoading(false)
        return
      }
      if (taskId) {
        apiV1HelpdeskCasesCloseCreate(
          { case_id: selectedCase?.case_id.toString() },
          {
            params: {
              task_id: taskId,
            },
          },
        ).then((d) => {
          setCloseCaseStatus(d.data.status)
          if (d.data.status === "success") {
            setIsCloseCaseLoading(false)
            setCloseCaseStatus("processed")
          } else {
            longAction()
          }
        })
      } else {
        apiV1HelpdeskCasesCloseCreate(
          { case_id: selectedCase?.case_id.toString() },
          {
            params: {
              task_id: taskId,
            },
          },
        ).then((d) => {
          taskId = d.data.task_id
          setCloseCaseStatus(d.data.status)
          setTimeout(longAction, 2000)
        })
      }
    }
    longAction()
  }

  return (
    <>
      <Sheet open={isActive}>
        <SheetContent
          side={"right"}
          className="flex max-w-[800px] flex-col gap-0 !space-y-0 p-0 lg:w-full lg:max-w-none sm:w-full sm:max-w-none"
        >
          {/* HEAD */}
          <div className="relative space-y-2 px-8 py-6 md:space-y-0 md:px-6 md:pb-3">
            <Button
              onClick={onAcceptCloseChat}
              className="absolute right-8 top-8 md:right-2 md:top-6"
              variant={"transparent"}
              size={"icon-sm"}
            >
              <X className="size-4" />
            </Button>
            <p className="text-xl font-semibold md:pr-4 md:text-base">Обращение: {selectedCase?.case_number}</p>
            <p className="text-grey-extra-hard md:mt-2">Создано {dateStrTodateStr(selectedCase?.dt_create!)}</p>
          </div>

          {/* CONTENT */}
          <ScrollArea className="flex-1 border-t px-8 py-6 md:px-6 md:py-0">
            <div className="space-y-4">
              {/* TODO ВЕРСТКА лоадер */}
              {isMessagesListLoading && <>LOADING</>}
              {Messageslist.map((message, indx) => {
                const isMe = (message?.staff_id || 0) === 0
                const isContentHtml = (message?.content_html || "").length > 0

                return (
                  <div
                    key={indx}
                    className="flex space-x-2 md:space-x-0 md:first:mt-6"
                  >
                    <div
                      className={clsx("mb-auto inline-flex size-10 h-10 min-w-10 items-center justify-center rounded-full md:hidden", {
                        "bg-purple-soft": !isMe,
                        "bg-green-soft": isMe,
                      })}
                    >
                      {!isMe ? <MdSupportAgent className="size-5 text-purple" /> : <CircleUser className="size-5 text-green" />}
                    </div>
                    <div
                      className={clsx("flex-1 rounded-sm py-3 pl-6 pr-4 md:flex-auto md:px-4 md:py-3", {
                        "bg-purple-soft md:!mr-auto md:w-[82%] md:max-w-[82%]": !isMe,
                        "bg-green-soft md:!ml-auto md:w-[90%] md:max-w-[90%]": isMe,
                      })}
                      key={indx}
                    >
                      <p>{isContentHtml ? parse(message?.content_html!) : message?.content || ""}</p>
                      {message.attachments.length > 0 && (
                        <div className="space-y-1">
                          <p className="text-sm">Прикрепленные файлы:</p>
                          {message.attachments.map((file, indx) => {
                            return (
                              <div
                                className="space-y-1"
                                key={indx}
                              >
                                <span className="text-accent">{file.file_name}</span>
                              </div>
                            )
                          })}
                        </div>
                      )}
                      <p className="mt-2 text-xs text-grey-extra-hard">
                        <span>{dateStrTodateStr(message?.dt_create!)}</span>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <Button
              onClick={toggleActiveAlert}
              className="ml-12 mt-4 uppercase md:mb-10 md:ml-0"
              variant={"outline"}
            >
              Закрыть обращение
            </Button>
          </ScrollArea>

          {/* FOOTER */}
          <div className="space-y-2 border-t px-8 py-4">
            <Textarea
              value={messageText}
              onChange={(event) => {
                setMessageText(event.target.value)
              }}
              className="max-h-32 min-h-32"
            />
            {/* FILES */}
            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={(e) => handleFileChange(e.target.files)}
              className="hidden"
              accept={acceptedFormats}
            />
            <div className={clsx({ hidden: !files.length })}>
              <Label>Прикрепленные файлы:</Label>
              <div className="*:border-b *:border-b-grey-soft">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="flex h-10 items-center"
                  >
                    <span className="mr-2 line-clamp-1">{file.name}</span>

                    <Button
                      onClick={handleDeleteFile(file.name)}
                      className="ml-auto"
                      variant={"transparent"}
                      size={"icon-sm"}
                    >
                      <TrashIcon className="size-5" />
                    </Button>
                  </li>
                ))}
              </div>
            </div>
            {/* ACTIONS */}
            <div className="flex items-center justify-between">
              <Button
                onClick={handleOpenSystemDialog}
                className="inline-flex items-center space-x-2"
                variant={"link"}
              >
                <PaperclipIcon className="size-5 -rotate-45 text-accent" />
                <span>Прикрепить файл</span>
              </Button>

              <Button
                disabled={!messageText || isSendMessageLoading}
                onClick={handleAnswer}
                className="uppercase"
              >
                Отправить ответ
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Credenza
        open={isActiveAlert}
        onOpenChange={setActiveAlert}
      >
        <CredenzaContent className="block p-0">
          <div className="relative flex items-start space-x-3.5 border-b p-6 md:space-x-0 md:border-b-0">
            <div className="inline-flex min-w-6 items-center md:hidden">
              <AlertCircleIcon className="text-5 rotate-180 fill-accent text-white" />
            </div>
            <div className="relative space-y-2">
              <p className="text-xl font-bold">Закрытие обращения: {selectedCase?.case_id}</p>
              <p className="md:text-grey-extra-hard">Обращение будет закрыто. Продолжить?</p>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-2 px-6 py-4 md:grid md:grid-cols-2">
            <CredenzaClose asChild>
              <Button
                className="uppercase"
                variant={"outline"}
              >
                Отмена
              </Button>
            </CredenzaClose>
            <Button
              className="uppercase"
              onClick={onAcceptCloseChatAndAlert}
            >
              Закрыть
            </Button>
          </div>
        </CredenzaContent>
      </Credenza>
    </>
  )
}
