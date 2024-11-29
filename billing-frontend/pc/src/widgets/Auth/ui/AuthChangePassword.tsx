import React, { FC } from "react"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import { AuthTemplate } from "./AuthTemplate"
import { Input } from "@/src/shared/ui/input"
import { InputMessage } from "@/src/shared/ui/input-message"
import { useChangePassword } from "../hooks/useChangePassword"
import Link from "next/link"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { generatePassword } from "@/src/shared/helpers/generatePassword"
import { useTranslations } from "next-intl"

interface ComponentProps {
  uid: string
  token: string
}

export const AuthChangePassword: FC<ComponentProps> = ({ uid, token }) => {
  const { onSubmit, useFormValidation, useSubmitChangePassword } = useChangePassword({ uid, token })
  const successChangePassword = useSubmitChangePassword.isSuccess
  const isValidToken = !useFormValidation.formState.errors.root

  const { active: showPass1, toggle: togglePass1, setActive: setActivePass1 } = useToggle(false)
  const { active: showPass2, toggle: togglePass2, setActive: setActivePass2 } = useToggle(false)
  const t = useTranslations("authorization")

  const onGeneratePassword = () => {
    const pass = generatePassword()
    useFormValidation.setValue("new_password1", pass, { shouldDirty: true, shouldValidate: true })
    useFormValidation.setValue("new_password2", pass, { shouldDirty: true, shouldValidate: true })
    setActivePass1(true)
    setActivePass2(true)
  }

  const defaultTitleView = (
    <h1 className="max-w-[485px] self-center text-64 font-semibold text-background lg:hidden">
      {t.rich("changePassword.textBlack1", {
        span: (chunks) => (
          <>
            <br />
            <span className="text-accent">{chunks}</span>
          </>
        ),
      })}
    </h1>
  )

  const defaultContentView = (
    <form onSubmit={useFormValidation.handleSubmit(onSubmit)}>
      <p className="mb-4 hidden text-2xl font-semibold lg:block lg:text-center">
        {t.rich("changePassword.textBlack1", {
          span: (chunks) => (
            <>
              <br />
              <span className="text-accent">{chunks}</span>
            </>
          ),
        })}
      </p>

      <div className="relative space-y-2">
        <label className="flex justify-between text-grey-hard">
          <span>{t("password")}</span>
          <button
            onClick={onGeneratePassword}
            type="button"
            className="text-accent selection:bg-transparent"
          >
            {t("signUp.generatePasswordShort")}
          </button>
        </label>
        <div className="relative">
          <Input
            type={showPass1 ? "text" : "password"}
            {...useFormValidation.register("new_password1", {
              required: t("emptyPassword"),
              validate: (value) => {
                return value.length < 2 ? "Не меньше 2 символов" : true
              },
            })}
          />
          <button
            type="button"
            onClick={togglePass1}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            {!showPass1 ? <EyeIcon className="text-grey" /> : <EyeOffIcon className="text-grey" />}
          </button>
        </div>
        <InputMessage className="absolute !mt-1 text-sm">{useFormValidation.formState.errors?.new_password1?.message}</InputMessage>
      </div>

      <div className="relative mt-8 space-y-2">
        <label className="text-grey-hard">{t("signUp.confirmPassword")}</label>
        <div className="relative">
          <Input
            type={showPass2 ? "text" : "password"}
            {...useFormValidation.register("new_password2", {
              required: t("signUp.confirmPassword"),
              validate: (value) => {
                return value.length < 2 ? "Не меньше 2 символов" : true
              },
            })}
          />
          <button
            type="button"
            onClick={togglePass2}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            {!showPass2 ? <EyeIcon className="text-grey" /> : <EyeOffIcon className="text-grey" />}
          </button>
        </div>
        <InputMessage className="absolute !mt-1 text-sm">{useFormValidation.formState.errors?.new_password2?.message}</InputMessage>
      </div>

      <div className="mt-8 space-y-12">
        <Button
          disabled={!useFormValidation.formState.isValid || useSubmitChangePassword.isLoading}
          type="submit"
          className="w-full text-background"
        >
         {t("changePassword.button")}
        </Button>
      </div>
    </form>
  )

  const succesContentView = (
    <div className="lg:text-center">
      <p className="mb-4 text-2xl font-semibold">{t("passwordChanged")}</p>
      <Link
        href="/sign-in"
        className={buttonVariants()}
      >
        {t("signinOrSignup")}
      </Link>
    </div>
  )

  const errorContentView = <p className="text-2xl font-semibold lg:text-center">{t("tokenValidation.error")}</p>

  return (
    <AuthTemplate title={defaultTitleView}>
      <div className="ml-auto flex w-full max-w-[375px] flex-col justify-center lg:mx-auto">{!isValidToken ? errorContentView : !successChangePassword ? defaultContentView : succesContentView}</div>
    </AuthTemplate>
  )
}
