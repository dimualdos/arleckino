import { Button } from "@/src/shared/ui/button"
import { Input } from "@/src/shared/ui/input"
import { Textarea } from "@/src/shared/ui/textarea"
import { useTranslations } from "next-intl"
import { InputMessage } from "../shared/ui/input-message"
import { validateEmailRegex } from "../shared/utils/validateEmail"
import { AppHeader } from "../widgets/AppHeader"
import { useCreateQuestion } from "../widgets/Copyright/Hooks"
import { SharedCaptchaV1, useCaptcha } from "../widgets/ReCaptcha"
import { useEffect } from "react"

interface ComponentProps {}
export const MSG_RESPONSE_TYPES = {
  error: "error",
  success: "success",
}

const CopyrightPage = ({}: ComponentProps) => {
  const { isHumanSet, setCaptchaToken, isHuman, captchaToken } = useCaptcha()
  const { onSubmit, useFormValidation, useMutationSubmitQuestion } = useCreateQuestion({ captcha_token: captchaToken })
  const t = useTranslations("pageCopyright")

  useEffect(() => {
    captchaToken && useFormValidation.setValue("captcha_token", captchaToken)
  }, [captchaToken])

  return (
    <div className="flex flex-1 flex-col">
      <AppHeader className="space-y-2 lg:space-y-1">
        <h1>{t("headTitle")}</h1>
        <p className="text-base font-medium text-grey-extra-hard">{t("headDescription")}</p>
      </AppHeader>
      {!useMutationSubmitQuestion.isSuccess ? (
        <div className="flex-1 bg-blue-soft pb-24 pt-10">
          <form onSubmit={useFormValidation.handleSubmit(onSubmit)}>
            <div className="container max-w-[560px] space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-grey-hard">
                    {t("form.labelName")} <span className="text-accent">*</span>
                  </label>
                  <Input
                    className="bg-background"
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
                    {t("form.labelEmail")} <span className="text-accent">*</span>
                  </label>
                  <Input
                    className="bg-background"
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
                    {t("form.labelMessage")} <span className="text-accent">*</span>
                  </label>
                  <Textarea
                    className="h-[145px] resize-y bg-background"
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
                    isHumanSet={isHumanSet}
                    setCaptchaToken={setCaptchaToken}
                  />
                </div>
              </div>

              <Button
                disabled={!isHuman || !useFormValidation.formState.isValid || useMutationSubmitQuestion.isLoading}
                className="text-sm uppercase text-background"
                onClick={useFormValidation.handleSubmit(onSubmit)}
              >
                {t("form.btnSubmit")}
              </Button>
            </div>
          </form>
        </div>
      ) : (
        // TODO ВЕРСТКА ADD SUCCESS
        <div>success</div>
      )}
    </div>
  )
}

export default CopyrightPage
