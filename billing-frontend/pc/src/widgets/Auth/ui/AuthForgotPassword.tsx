import React, { FC } from "react"
import { Button } from "@/src/shared/ui/button"
import { AuthTemplate } from "./AuthTemplate"
import { useResetPassword } from "../hooks/useResetPassword"
import { SharedCaptchaV1, useCaptcha } from "../../ReCaptcha"
import { Input } from "@/src/shared/ui/input"
import { InputMessage } from "@/src/shared/ui/input-message"
import { validateEmailRegex } from "@/src/shared/utils/validateEmail"
import { useTranslations } from "next-intl"

interface ComponentProps {}

export const AuthForgotPassword: FC<ComponentProps> = () => {
  const { isHumanSet, setCaptchaToken, isHuman, captchaToken, recaptchaRef } = useCaptcha()
  const { onSubmit, useFormValidation, useSubmitResetPassword, resendEmail, error, message } = useResetPassword({ captcha_token: captchaToken, recaptchaRef })
  const successResetPassword = useSubmitResetPassword.isSuccess
  const t = useTranslations("authorization")

  const defaultTitleView = (
    <h1 className="max-w-[485px] self-center text-64 font-semibold text-background lg:hidden">
      {t.rich("forgotPassword.requestTitleBlack1", {
        span: (chunks) => (
          <>
            <br />
            <span className="text-accent">{chunks}</span>
          </>
        ),
      })}
    </h1>
  )

  const successTitleView = (
    <h1
      dangerouslySetInnerHTML={{ __html: t.raw("forgotPassword.successTitle") }}
      className="max-w-[485px] self-center text-64 font-semibold text-background lg:hidden"
    />
  )

  const defaultContentView = (
    <form onSubmit={useFormValidation.handleSubmit(onSubmit)}>
      <div className="relative space-y-2">
        <label className="text-grey-hard">{ t("yourEmail")}</label>
        <Input
          {...useFormValidation.register("email", {
            required: t("emptyEmail"),
            pattern: {
              value: validateEmailRegex,
              message: t("wrongEmail"),
            },
            validate: (value) => {
              return value.length < 2 ? t("wrongEmail") : true
            },
          })}
        />
        <InputMessage className="absolute !mt-1 text-sm">{useFormValidation.formState.errors?.email?.message}</InputMessage>
      </div>

      <p className="mt-8">{t("forgotPassword.requestText")}</p>

      <div className="mt-4 space-y-12">
        <div className="space-y-6">
          <div className="mt-8 min-h-[78px]">
            <SharedCaptchaV1
              recaptchaRef={recaptchaRef}
              isHumanSet={isHumanSet}
              setCaptchaToken={setCaptchaToken}
            />
          </div>
          <Button
            disabled={!useFormValidation.formState.isValid || !isHuman || useSubmitResetPassword.isLoading}
            type="submit"
            className="w-full text-background"
          >
            {t("forgotPassword.requestButton")}
          </Button>
        </div>
      </div>
    </form>
  )

  const succesContentView = (
    <div>
      <p className="mb-4 text-2xl font-semibold">{t("forgotPassword.contentTitle2")}</p>
      <p className="mb-8">{t("forgotPassword.contentText2")}</p>
      <Button
        size={"none"}
        type="button"
        variant="link"
        onClick={resendEmail}
      >
        {t("forgotPassword.contentButton2")}
      </Button>
      <p className={`${error ? "text-red-500" : "text-green-500"} ${message ? "" : "opacity-0"}`}>{message || "Placeholder"}</p>
    </div>
  )

  return (
    <AuthTemplate title={!successResetPassword ? defaultTitleView : successTitleView}>
      <div className="ml-auto flex w-full max-w-[375px] flex-col justify-center lg:mx-auto">{!successResetPassword ? defaultContentView : succesContentView}</div>
    </AuthTemplate>
  )
}
