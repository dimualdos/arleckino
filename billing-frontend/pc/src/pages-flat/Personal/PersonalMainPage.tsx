import React from "react"
import dynamic from "next/dynamic"
const PersonalMain = dynamic(import("@/src/widgets/Personal/Main/ui").then((module) => module.PersonalMain))

// Настройки профиля
export const PersonalMainPage = () => {
  return <PersonalMain />
}
