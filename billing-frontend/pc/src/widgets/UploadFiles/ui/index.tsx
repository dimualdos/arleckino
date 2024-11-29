import { Button } from "@/src/shared/ui/button"
import { Label } from "@/src/shared/ui/label"
import iconCloud from "@/public/icon-cloud.svg"
import iconCloudAccent from "@/public/icon-cloud-accent.svg"
import { TrashIcon } from "lucide-react"
import React from "react"
import clsx from "clsx"
import { FileUploaderProps } from "../types"

interface ComponentProps extends FileUploaderProps {}

export const UploadFiles: React.FC<ComponentProps> = ({
  files,
  setFiles,
  fileInputRef,
  acceptedFormats,
  maxFiles,
  maxSizeInMB,
  handleFileChange,
  handleDeleteFile,
  handleDragOver,
  handleDrop,
  handleOpenSystemDialog,
}) => {
  return (
    <div className="space-y-4">
      <Button
        variant={"transparent"}
        onClick={handleOpenSystemDialog}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="flex w-full md:justify-start flex-col items-center justify-center rounded-sm border border-dashed border-grey-soft px-4 py-8 text-center font-medium text-grey-extra-hard md:flex-row md:border-0 md:p-0"
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={(e) => handleFileChange(e.target.files)}
          className="hidden"
          accept={acceptedFormats}
        />
        <div className="flex items-center justify-center md:h-16 md:w-16 md:min-w-16 md:rounded-sm md:bg-yellow-soft">
          <img
            className="w-12 md:hidden"
            src={iconCloud.src}
            alt="Иконка"
            width={iconCloud.width}
            height={iconCloud.height}
          />
          <img
            className="hidden w-6 md:inline-block"
            src={iconCloudAccent.src}
            alt="Иконка"
            width={iconCloudAccent.width}
            height={iconCloudAccent.height}
          />
        </div>
        <div className="md:ml-6 md:text-left">
          <span className="whitespace-normal md:hidden">
            Перетащите изображение сюда или <span className="text-accent">выберите файл</span>{" "}
          </span>
          <p className="md:whitespace-normal">до 5 файлов в формате JPEG, PNG, PDF</p>
        </div>
      </Button>

      <div className={clsx("md:space-y-2", { hidden: !files.length })}>
        <Label>Прикрепленные файлы:</Label>
        <div className="*:border-b *:border-b-grey-soft md:space-y-2 md:*:border-b-0">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex h-10 items-center md:h-auto md:rounded-sm md:bg-grey-extra-soft md:px-3 md:py-2"
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
    </div>
  )
}
