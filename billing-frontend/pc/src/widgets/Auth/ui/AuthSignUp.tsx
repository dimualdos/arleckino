import React, { FC } from "react"
import { Button } from "@/src/shared/ui/button"
import Link from "next/link"
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react"
import { ApiV1UserMetaListQueryResponse } from "@/src/gen/models/ts/apiController/ApiV1UserMetaList"
import { ApiV1UserCountriesListQueryResponse } from "@/src/gen/models/ts/apiController/ApiV1UserCountriesList"
import { SharedCaptchaV1, useCaptcha } from "@/src/widgets/ReCaptcha"
import { Input } from "@/src/shared/ui/input"
import { InputMessage } from "@/src/shared/ui/input-message"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { AuthTemplate } from "./AuthTemplate"
import { ParsedCountryProps } from "../types"
import { useSelectCountry } from "../hooks/useSelectCountry"
import dynamic from "next/dynamic"
import { useSignUp } from "../hooks/useSignUp"
import { validateEmailRegex } from "@/src/shared/utils/validateEmail"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useTranslations } from "next-intl"

const AuthCountries = dynamic(import("./AuthCountries").then((module) => module.AuthCountries))

interface ComponentProps {
  userMeta: ApiV1UserMetaListQueryResponse
  countries: ApiV1UserCountriesListQueryResponse
}

interface ComponentProps {}

export const AuthSignUp: FC<ComponentProps> = ({ countries, userMeta }) => {
  let parsedCountries: ParsedCountryProps[] = []
  if (countries) {
    parsedCountries = Object.entries(countries).map(([code, name]) => ({ code, name }))
  }
  const userCountry: ParsedCountryProps | null = !userMeta
    ? null
    : {
        code: userMeta.current_country.country_code,
        name: userMeta.current_country.country_name,
      }
  const { isHumanSet, setCaptchaToken, isHuman, captchaToken, recaptchaRef } = useCaptcha()
  // FIXME: Add real country code
  const { mutationOnSignUp, mutationValidateEmail, mutationValidateReferalToken, onGeneratePassword, onSubmit, useFormValidation } = useSignUp({
    captcha_token: captchaToken,
    recaptchaRef: recaptchaRef,
    countryCode: "RU",
  })
  const { data: fingerPrintData, isLoading, getData, error } = useVisitorData({ extendedResult: true }, { immediate: true })
  const { active: showPassword1, setActive: showPassword1Set, toggle: togglePassword1 } = useToggle(false)
  const { active: showPassword2, setActive: showPassword2Set, toggle: togglePassword2 } = useToggle(false)
  const { selected, onSelectCountry } = useSelectCountry({ parsedCountries, selectedCountry: userCountry })

  const onGeneratePass = () => {
    onGeneratePassword()
    showPassword1Set(true)
    showPassword2Set(true)
  }

  const t = useTranslations("authorization")

  return (
    <AuthTemplate
      title={
        <h1 className="w-[485px] self-center text-64 font-semibold text-background lg:hidden">
          {t.rich("signIn.textBlack1", {
            span: (chunks) => <span className="text-accent">{chunks}</span>,
          })}
        </h1>
      }
    >
      <form onSubmit={useFormValidation.handleSubmit(onSubmit)}>
        {/* Country */}
        <div className="mt-4">
          <AuthCountries
            selected={selected}
            onSelectCountry={onSelectCountry}
            parsedCountries={parsedCountries}
          />
        </div>

        <div className="relative mt-4 space-y-2">
          <label className="text-grey-hard">{t("yourEmail")}</label>
          <Input
            {...useFormValidation.register("email", {
              required: true,
              pattern: {
                value: validateEmailRegex,
                message: t("emailContentError"),
              },
            })}
          />
          <InputMessage className="absolute !mt-1 text-sm">{useFormValidation.formState.errors?.email?.message}</InputMessage>
        </div>

        {/* PASSWORD */}
        <div className="mt-8 space-y-2">
          <label className="flex justify-between text-grey-hard">
            <span>{t("password")}</span>
            <button
              onClick={onGeneratePass}
              type="button"
              className="text-accent"
            >
              {t("signUp.generatePassword")}
            </button>
          </label>
          <div className="relative">
            <Input
              {...useFormValidation.register("password1", { required: true })}
              type={showPassword1 ? "text" : "password"}
            />
            <button
              type="button"
              onClick={togglePassword1}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              {!showPassword1 ? <EyeIcon className="text-grey" /> : <EyeOffIcon className="text-grey" />}
            </button>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mt-4 space-y-2">
          <label className="flex justify-between text-grey-hard">
            <span>{t("signUp.confirmPassword")}</span>
          </label>
          <div className="relative">
            <Input
              {...useFormValidation.register("password2", { required: true })}
              type={showPassword2 ? "text" : "password"}
            />
            <button
              type="button"
              onClick={togglePassword2}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              {!showPassword2 ? <EyeIcon className="text-grey" /> : <EyeOffIcon className="text-grey" />}
            </button>
          </div>
        </div>

        <div className="relative mt-4 space-y-2">
          <label className="text-grey-hard">{t("referral")}</label>
          <Input {...useFormValidation.register("referral_token")} />
          <InputMessage className="absolute !mt-1 text-sm">{useFormValidation.formState.errors?.referral_token?.message}</InputMessage>
        </div>

        <div className="mt-8 min-h-[78px]">
          <SharedCaptchaV1
            recaptchaRef={recaptchaRef}
            isHumanSet={isHumanSet}
            setCaptchaToken={setCaptchaToken}
          />
        </div>

        <div className="mt-4 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-grey-hard">{t("policy.termsOfUse")}</div>
            <Button
              disabled={
                mutationValidateEmail.isLoading ||
                mutationValidateReferalToken.isLoading ||
                mutationOnSignUp.isLoading ||
                !useFormValidation.formState.isValid ||
                !isHuman ||
                !captchaToken ||
                !!captchaToken.length === false
              }
              type="submit"
              className="w-full text-background"
            >
              {t("signUpButton2")}
            </Button>
          </div>
          <div className="text-center text-grey-hard">
            {t("signUp.noAccaunt")}{" "}
            <Link
              className="text-accent"
              href="/sign-in"
            >
              {t("signInButton")}
            </Link>
          </div>
        </div>
      </form>
    </AuthTemplate>
  )
}
