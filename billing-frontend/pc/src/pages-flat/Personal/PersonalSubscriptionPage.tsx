import React from "react"
import dynamic from "next/dynamic"
const PersonalSubscription = dynamic(import("@/src/widgets/Personal/Subscription/ui").then((module) => module.PersonalSubscription))

export const PersonalSubscriptionPage = () => {
  return <PersonalSubscription />
}
