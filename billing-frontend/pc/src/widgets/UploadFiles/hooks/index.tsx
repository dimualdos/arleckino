import { useRef, useState } from "react"

interface ComponentProps {
  maxFiles?: number
  maxSizeInMB?: number
  acceptedFormats?: string
}

export const useUploadFiles = ({ maxFiles, maxSizeInMB, acceptedFormats }: ComponentProps) => {
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return

    const newFiles = Array.from(selectedFiles).slice(0, maxFiles)
    setFiles((currentFiles) => [...currentFiles, ...newFiles])
  }

  const handleDeleteFile = (fileName: string) => () => {
    setFiles((currentFiles) => currentFiles.filter((file) => file.name !== fileName))
  }

  const handleDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleFileChange(e.dataTransfer.files)
  }

  const handleOpenSystemDialog = () => {
    fileInputRef.current?.click()
  }

  return { files, setFiles, handleFileChange, handleDeleteFile, handleDragOver, handleDrop, handleOpenSystemDialog, fileInputRef }
}
