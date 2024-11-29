import React, { FC } from "react"
import { Button } from "@/src/shared/ui/button"
import Link from "next/link"
import { Checkbox } from "@/src/shared/ui/checkbox"
import { Input } from "@/src/shared/ui/input"
import { AuthTemplate } from "./AuthTemplate"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { useSignIn } from "../hooks/useSignIn"
import { SharedCaptchaV1, useCaptcha } from "../../ReCaptcha"
import { InputMessage } from "@/src/shared/ui/input-message"
import { validateEmailRegex } from "@/src/shared/utils/validateEmail"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useTranslations } from "next-intl"

interface ComponentProps {}

export const AuthSignIn: FC<ComponentProps> = () => {
  const { active, toggle } = useToggle(false)
  const { isHumanSet, setCaptchaToken, isHuman, captchaToken, recaptchaRef } = useCaptcha()
  const { onSubmit, useFormValidation, useSubmitSignIn } = useSignIn({ captcha_token: captchaToken, recaptchaRef })
  const t = useTranslations("authorization")

  return (
    <AuthTemplate
      title={
        <h1 className="max-w-[485px] self-center text-64 font-semibold text-background lg:hidden">
          {t.rich("signIn.textBlack1", {
            span: (chunks) => <span className="text-accent">{chunks}</span>,
          })}
        </h1>
      }
    >
      <div className="ml-auto flex w-full max-w-[375px] flex-col justify-center lg:mx-auto">
        {/* TODO: Добавить когда будет готово */}
        {/* <div className="mx-auto">
          <AuthProviders />
        </div> */}
        <div className="my-8 flex items-center text-sm text-grey-hard">
          <span className="h-px flex-auto bg-grey-soft"></span>
          <p className="px-3">{t("signIn.topLabel")}</p>
          <span className="h-px flex-auto bg-grey-soft"></span>
        </div>

        <form onSubmit={useFormValidation.handleSubmit(onSubmit)}>
          <div className="relative space-y-2">
            <label className="text-grey-hard">{t("yourEmail")}</label>
            <Input
              {...useFormValidation.register("username", {
                required: t("emptyEmail"),
                pattern: {
                  value: validateEmailRegex,
                  message: t("emailContentError"),
                },
                validate: (value) => {
                  return value.length < 2 ? "Не меньше 2 символов" : true
                },
              })}
            />
            <InputMessage className="absolute !mt-1 text-sm">{useFormValidation.formState.errors?.username?.message}</InputMessage>
          </div>

          <div className="mt-8 space-y-2">
            <label className="flex justify-between text-grey-hard">
              <span>{t("password")}</span>
              <Link
                href="/forgot-password"
                className="text-accent"
              >
                {t("signIn.forgotPassword")}
              </Link>
            </label>
            <div className="relative">
              <Input
                {...useFormValidation.register("password", {
                  required: t("emptyPassword"),
                  validate: (value) => {
                    return value.length < 2 ? "Не меньше 2 символов" : true
                  },
                })}
                type={active ? "text" : "password"}
              />
              <button
                type="button"
                onClick={toggle}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                {!active ? <EyeIcon className="text-grey" /> : <EyeOffIcon className="text-grey" />}
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text font-medium leading-none selection:bg-transparent peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t("remember")}
                  </label>
                </div>
              </div>

              <div className="mt-8 min-h-[78px]">
                <SharedCaptchaV1
                  recaptchaRef={recaptchaRef}
                  isHumanSet={isHumanSet}
                  setCaptchaToken={setCaptchaToken}
                />
              </div>
              <Button
                disabled={!useFormValidation.formState.isValid || !isHuman || useSubmitSignIn.isLoading}
                type="submit"
                className="w-full text-background"
              >
                {t("signInButton")}
              </Button>
            </div>
            <div className="text-center text-grey-hard">
              {t("signIn.noAccaunt")}{" "}
              <Link
                className="text-accent"
                href="/sign-up"
              >
                {t("signUpButton")}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </AuthTemplate>
  )
}
