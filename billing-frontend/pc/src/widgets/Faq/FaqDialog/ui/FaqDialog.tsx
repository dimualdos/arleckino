import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/src/shared/ui/dialog"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import { SuccessContent, useCreateQuestion } from ".."
import { SharedCaptchaV1, useCaptcha } from "@/src/widgets/ReCaptcha"
import { Input } from "@/src/shared/ui/input"
import { InputMessage } from "@/src/shared/ui/input-message"
import { validateEmailRegex } from "@/src/shared/utils/validateEmail"
import { Textarea } from "@/src/shared/ui/textarea"
import { useTranslations } from "next-intl"

export const FaqDialog = () => {
  const { isHumanSet, setCaptchaToken, isHuman, captchaToken, recaptchaRef } = useCaptcha()
  const { onSubmit, useFormValidation, useMutationSubmitQuestion } = useCreateQuestion({ captcha_token: captchaToken })
  const t = useTranslations("FAQ")
  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ variant: "outline", className: "text-sm uppercase" })}>Свой вопрос</DialogTrigger>
      <DialogContent className="w-full max-w-[665px] rounded-sm p-0 md:h-full border-0 md:max-w-full md:overflow-y-auto md:!rounded-none">
        {!useMutationSubmitQuestion.isSuccess ? (
          <form onSubmit={useFormValidation.handleSubmit(onSubmit)}>
            {/* HEADER + CONTENT + CAPTCHA */}
            <div className="p-6 md:pb-10">
              <p className="mb-2 text-xl font-semibold">{t("askForm.caption")}</p>
              <p className="mb-6 text-grey-extra-hard md:mb-4">{t("askForm.description")}</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-grey-hard">
                    {t("askForm.nameText")} <span className="text-accent">*</span>
                  </label>
                  <Input
                    {...useFormValidation.register("user_full_name", {
                      required: "Введите имя",
                      validate: (value) => {
                        return value.length < 2 ? "Не меньше 2 символов" : true
                      },
                    })}
                  />
                  <InputMessage className="text-sm">{useFormValidation.formState.errors?.user_full_name?.message}</InputMessage>
                </div>

                <div className="space-y-2">
                  <label className="text-grey-hard">
                    {t("askForm.emailText")} <span className="text-accent">*</span>
                  </label>
                  <Input
                    {...useFormValidation.register("user_email", {
                      required: "Введите email",
                      pattern: {
                        value: validateEmailRegex,
                        message: "Неверный формат email",
                      },
                    })}
                  />
                  <InputMessage className="text-sm">{useFormValidation.formState.errors?.user_email?.message}</InputMessage>
                </div>

                <div className="space-y-2">
                  <label className="text-grey-hard">
                    {t("askForm.messageText")} <span className="text-accent">*</span>
                  </label>
                  <Textarea
                    className="min-h-[145px]"
                    {...useFormValidation.register("content", {
                      required: "Введите сообщение",
                      validate: (value) => {
                        return value.length < 10 ? "Не меньше 10 символов" : true
                      },
                    })}
                  />
                  {!useFormValidation.formState.errors.content ? null : <InputMessage className="text-sm">{useFormValidation.formState.errors.content.message}</InputMessage>}
                </div>

                <div className="min-h-[78px]">
                  <SharedCaptchaV1
                    recaptchaRef={recaptchaRef}
                    isHumanSet={isHumanSet}
                    setCaptchaToken={setCaptchaToken}
                  />
                </div>
              </div>
            </div>
            {/* FOOTER ACTIONS */}
            <div className="flex items-center justify-end space-x-2 border-t border-t-grey-soft px-6 py-4">
              <DialogClose asChild>
                <Button
                  variant={"outline"}
                  className="uppercase text-foreground"
                >
                  {t("askForm.rejectButtonText")}
                </Button>
              </DialogClose>

              <Button
                disabled={!isHuman || !useFormValidation.formState.isValid || useMutationSubmitQuestion.isLoading}
                type="submit"
                className="uppercase"
              >
                {t("askForm.submitButtonText")}
              </Button>
            </div>
          </form>
        ) : (
          <SuccessContent />
        )}
      </DialogContent>
    </Dialog>
  )
}
