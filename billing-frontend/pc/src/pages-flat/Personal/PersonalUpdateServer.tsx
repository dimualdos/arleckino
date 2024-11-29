import dynamic from "next/dynamic"
import React, { FC } from "react"
const PersonalUpdateServer = dynamic(import("@/src/widgets/Personal/UpdateServer/ui").then((module) => module.PersonalUpdateServer))

interface ComponentProps {}

export const PersonalUpdateServerPage: FC<ComponentProps> = () => {
  return <PersonalUpdateServer />
}
