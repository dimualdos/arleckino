import dynamic from "next/dynamic"
import React, { FC } from "react"
const PersonalBalance = dynamic(import("@/src/widgets/Personal/Balance/ui").then((module) => module.PersonalBalance))

interface ComponentProps {}

export const PersonalBalancePage: FC<ComponentProps> = () => {
  return <PersonalBalance />
}
