import { useState } from "react"
import { useCopyToClipboard } from "react-use"
import { toast } from "sonner"
import { sleep } from "../helpers/sleep"

export const useCopy = () => {
  const [isCopied, isCopiedSet] = useState(false)
  const [copiedState, copyToClipboard] = useCopyToClipboard()
  const onHandleCopy = (copyContent: string, toastMessage: string) => async () => {
    try {
      toast.info(toastMessage)
      copyToClipboard(copyContent)
      isCopiedSet(true)
      await sleep(2000)
      isCopiedSet(false)
    } catch (error) {}
  }
  return {
    isCopied,
    onHandleCopy,
    copiedState
  }
}
