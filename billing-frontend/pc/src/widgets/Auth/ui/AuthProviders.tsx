import React from "react"
import iconGoogle from "@/public/icon-google.svg"
import iconFb from "@/public/icon-fb.svg"
import iconVk from "@/public/icon-vk.svg"
import iconYa from "@/public/icon-ya.svg"
import iconMail from "@/public/icon-mail.svg"
import { Button } from "@/src/shared/ui/button"
import Image from "next/image"

export const AuthProviders = () => {
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
    <div className="flex space-x-4">
      {providers.map(({ icon, label }, indx) => {
        return (
          <Button
            className="inline-flex size-10 items-center justify-center p-0"
            key={indx}
            variant={"outline"}
          >
            <Image
              src={icon.src}
              alt={label}
              unoptimized
              width={icon.width}
              height={icon.height}
            />
          </Button>
        )
      })}
    </div>
  )
}
