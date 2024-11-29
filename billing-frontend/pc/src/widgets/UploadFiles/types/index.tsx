import { Dispatch, SetStateAction } from "react"

export interface FileUploaderProps {
  files: File[]
  setFiles: Dispatch<SetStateAction<File[]>>
  fileInputRef: React.RefObject<HTMLInputElement>
  maxFiles?: number
  maxSizeInMB?: number
  acceptedFormats?: string
  handleFileChange: (selectedFiles: FileList | null) => void
  handleDeleteFile: (fileName: string) => () => void
  handleDragOver: (e: React.DragEvent<HTMLButtonElement>) => void
  handleDrop: (e: React.DragEvent<HTMLButtonElement>) => void
  handleOpenSystemDialog: () => void
}
