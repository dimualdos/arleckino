import { Button } from "@/src/shared/ui/button"
import { DialogClose } from "@/src/shared/ui/dialog"
import { useTranslations } from "next-intl"

export const SuccessContent = () => {
  const t = useTranslations("FAQ")
  return (
    <div>
      <div className="p-6 md:pb-10">
        <p className="mb-2 text-xl font-semibold">{t("askForm.postResult.successCaption")}</p>
        <p className="mb-6 text-grey-extra-hard md:mb-4">{t("askForm.postResult.successText")}</p>
      </div>
      <div className="flex items-center justify-end space-x-2 border-t border-t-grey-soft px-6 py-4">
        <DialogClose asChild>
          <Button className="uppercase">{t("askForm.postResult.btn")}</Button>
        </DialogClose>
      </div>
    </div>
  )
}
