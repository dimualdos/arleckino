import React, { FC, ReactNode } from "react"
import Image from "next/image"
import bgAuth from "@/public/bg-auth.svg"

interface ComponentProps {
  title: ReactNode
  children: ReactNode
}

export const AuthTemplate: FC<ComponentProps> = ({ title, children }) => {
  return (
    <div className="lg:bg-bg-blue-soft relative flex min-h-[775px] flex-1 items-center overflow-hidden lg:min-h-fit">
      <Image
        className="left-40px absolute top-1/2 h-auto w-full -translate-y-1/2 selection:bg-transparent 2xl:scale-150 xl:-left-40 lg:hidden"
        src={bgAuth.src}
        alt=""
        unoptimized
        width={bgAuth.width}
        height={bgAuth.height}
      />
      <div className="container relative flex justify-between lg:py-14">
        {title}
        <div className="ml-auto flex w-full max-w-[375px] flex-col justify-center py-20 lg:mx-auto lg:py-0">{children}</div>
      </div>
    </div>
  )
}
