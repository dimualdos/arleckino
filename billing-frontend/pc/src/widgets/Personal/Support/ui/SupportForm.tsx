import { Button } from "@/src/shared/ui/button"
import React, { FC, useState } from "react"

import { Label } from "@/src/shared/ui/label"
import { Input } from "@/src/shared/ui/input"
import { Credenza, CredenzaClose, CredenzaContent } from "@/src/shared/ui/credenza"
import { UploadFiles } from "@/src/widgets/UploadFiles/ui"
import { useUploadFiles } from "@/src/widgets/UploadFiles/hooks"
import { apiV1HelpdeskCasesCreate } from "@/src/gen/clients/axios/apiService"
import { useAuth } from "@/src/shared/hooks/useAuth"
import { useApiV1UserInfoRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserInfoRead"

interface ComponentProps {
  isActive: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  handleUpdate: () => void
}

export const SupportForm: FC<ComponentProps> = ({ isActive, setActive, handleUpdate }) => {
  const { files, setFiles, fileInputRef, handleDeleteFile, handleDragOver, handleDrop, handleFileChange, handleOpenSystemDialog } = useUploadFiles({ acceptedFormats: "", maxFiles: 3, maxSizeInMB: 2 })
  const {} = useAuth()
  const [messageSubject, setMessageSubject] = useState<string | undefined>()
  const [messageText, setMessageText] = useState<string | undefined>()
  const [sendMessageStatus, setSendMessageStatus] = useState<"success" | "processed">("processed")
  const [isSendMessageLoading, setIsSendMessageLoading] = useState<boolean>(false)
  const userInfo = useApiV1UserInfoRead()
  // TODO верстка LOADER
  const handleAnswer = () => {
    setIsSendMessageLoading(true)
    let taskId: string | undefined
    const longAction = () => {
      if (sendMessageStatus === "success" || !messageText || !messageSubject || !isActive || !userInfo.data?.data.email) {
        setIsSendMessageLoading(false)
        return
      }
      if (taskId) {
        apiV1HelpdeskCasesCreate(
          { user_email: userInfo.data?.data.email, subject: messageSubject, content: messageText, attachments: files },
          {
            params: {
              task_id: taskId,
            },
          },
        ).then((d) => {
          setSendMessageStatus(d.data.status)
          if (d.data.status === "success") {
            setIsSendMessageLoading(false)
            setFiles([])
            setMessageText("")
            handleUpdate()
            setActive(false)
            setSendMessageStatus("processed")
          } else {
            longAction()
          }
        })
      } else {
        const formData = new FormData()
        formData.append("content", messageText)
        formData.append("user_email", userInfo.data?.data.email)
        formData.append("subject", messageSubject)
        files.forEach((file) => formData.append("attachments", file))
        // TODO FIX TYPES TO ACCEPT FORMDATA
        // @ts-ignore
        apiV1HelpdeskCasesCreate(formData).then((d) => {
          taskId = d.data.task_id
          // setSendMessageTaskId(d.data.task_id)
          setSendMessageStatus(d.data.status)
          setTimeout(longAction, 2000)
        })
      }
    }
    longAction()
  }

  return (
    <Credenza
      open={isActive}
      onOpenChange={setActive}
    >
      <CredenzaContent className="w-full max-w-2xl p-0 md:max-w-none">
        <div className="flex flex-col">
          {/* MAIN CONTENT */}
          <div className="relative items-start space-y-6 overflow-y-auto p-6 md:min-h-[350px]">
            <div className="space-y-1">
              <p className="text-xl font-bold">Новое обращение</p>
              <p className="text-grey-extra-hard">Кратко опишите суть проблемы и при наличии прикрепите скриншоты интерфейса</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-0.5">
                <Label>
                  Тема <span className="text-accent">*</span>
                </Label>
                <Input
                  onChange={(event) => {
                    setMessageSubject(event.target.value)
                  }}
                />
              </div>

              <div className="space-y-0.5">
                <Label>
                  Описание <span className="text-accent">*</span>
                </Label>
                <Input
                  onChange={(event) => {
                    setMessageText(event.target.value)
                  }}
                />
              </div>

              <div className="md:space-y-2">
                <Label className="hidden text-black md:block">Добавьте изображения</Label>
                <UploadFiles
                  fileInputRef={fileInputRef}
                  files={files}
                  setFiles={setFiles}
                  handleDeleteFile={handleDeleteFile}
                  handleDragOver={handleDragOver}
                  handleDrop={handleDrop}
                  handleFileChange={handleFileChange}
                  handleOpenSystemDialog={handleOpenSystemDialog}
                />
              </div>
            </div>
          </div>

          {/* FOOTER ACTIONS */}
          <div className="mt-auto flex items-center border-t px-6 py-4 md:border-t-0">
            <div className="ml-auto flex items-center justify-end space-x-2 md:ml-0 md:grid md:w-full md:grid-cols-2">
              <CredenzaClose asChild>
                <Button
                  className="uppercase"
                  variant={"outline"}
                >
                  Отмена
                </Button>
              </CredenzaClose>
              <Button
                disabled={isSendMessageLoading}
                onClick={handleAnswer}
                className="uppercase"
              >
                Создать
              </Button>
            </div>
          </div>
        </div>
      </CredenzaContent>
    </Credenza>
  )
}
