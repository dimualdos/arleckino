import React, { FC, useState } from "react"
import bgAuth from "@/public/bg-auth.svg"
import Image from "next/image"
import iconGoogle from "@/public/icon-google.svg"
import iconFb from "@/public/icon-fb.svg"
import iconVk from "@/public/icon-vk.svg"
import iconYa from "@/public/icon-ya.svg"
import iconMail from "@/public/icon-mail.svg"
import { Button } from "@/src/shared/ui/button"
import { useRouter } from "next/router"
import { apiV1AuthConfirmResendCreate } from "@/src/gen/clients/axios/apiService/apiV1AuthConfirmResendCreate"
import Link from "next/link"
import { Checkbox } from "@/src/shared/ui/checkbox"
import { storeLogin } from "@/src/shared/store/profileStore"
import { sleep } from "@/src/shared/helpers/sleep"
import { Input } from "@/src/shared/ui/input"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { EyeIcon, EyeOffIcon } from "lucide-react"

interface ComponentProps {}

// TODO: DElete if no need
export const PageSuccessEmail: FC<ComponentProps> = () => {
  const router = useRouter()
  const { email } = router.query
  const formattedEmail = Array.isArray(email) ? email[0] : (email as string)
  const { active, toggle } = useToggle(false)
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")

  const resendEmail = () => {
    apiV1AuthConfirmResendCreate({ email: formattedEmail })
      .then(() => {
        setError(false)
        setMessage("Ссылка для подтверждения e-mail отправлена")
      })
      .catch((err) => {
        setMessage(err.response.data.message_type)
        setError(true)
      })
  }

  const onLogin = async () => {
    await sleep(2000)
    storeLogin({
      activated: true,
      balance: 1000,
      email: "example@gmail.com",
    })
    router.push("/personal-page/profile")
  }

  const providers = [
    {
      icon: iconGoogle,
      label: "google",
    },
    {
      icon: iconFb,
      label: "facebook",
    },
    {
      icon: iconYa,
      label: "yandex",
    },
    {
      icon: iconVk,
      label: "vk",
    },
    {
      icon: iconMail,
      label: "mail",
    },
  ] as const

  return (
    <div className="relative flex min-h-[775px] flex-1 items-center overflow-hidden lg:min-h-fit lg:bg-blue-soft">
      {" "}
      <Image
        className="absolute left-0 top-1/2 h-auto w-[90%] -translate-y-1/2 2xl:-left-24 2xl:scale-150 lg:hidden"
        src={bgAuth.src}
        alt=""
        unoptimized
        width={bgAuth.width}
        height={bgAuth.height}
      />
      <div className="container relative flex justify-between lg:py-14">
        <h1 className="w-[530px] self-center text-64 font-semibold text-background lg:hidden">
          Почта подтверждена.
          <br /> <span className="text-accent">Спасибо</span>
          <br />
          за регистрацию!
        </h1>

        <div className="ml-auto flex w-full max-w-[375px] flex-col justify-center lg:mx-auto">
          <form className="space-y-8">
            <div className="space-y-4">
              <p className="text-2xl font-semibold">Теперь можно войти в аккаунт</p>
              <p>Вам доступен тестовый период на 24 часа</p>
            </div>

            {/* FIELDS START */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-grey-hard">Ваш email</label>
                <Input />
              </div>

              <div className="space-y-2">
                <label className="flex justify-between text-grey-hard">
                  <span>Пароль</span>
                  <Link
                    href="/forgot-password"
                    className="text-accent"
                  >
                    Забыли пароль?
                  </Link>
                </label>

                <div className="relative">
                  <Input type={active ? "text" : "password"} />
                  <button
                    type="button"
                    onClick={toggle}
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                  >
                  {!active ? <EyeIcon className="text-grey" /> : <EyeOffIcon className="text-grey" />}
                  </button>
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms1"
                        className="text font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Запомнить меня
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FIELDS END */}

            <Button
              onClick={onLogin}
              type="button"
              className="w-full text-background"
            >
              Войти
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
