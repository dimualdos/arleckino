import { ApiV1UserCountriesListQueryResponse } from "@/src/gen/models/ts/apiController/ApiV1UserCountriesList"
import { UserMeta } from "@/src/gen/models/ts/apiController/ApiV1UserMetaList"
import { AuthSignUp } from "@/src/widgets/Auth/ui/AuthSignUp"
import React, { FC } from "react"

interface ComponentProps {
  countries: ApiV1UserCountriesListQueryResponse
  userMeta: UserMeta
}

export const PageSignUp: FC<ComponentProps> = ({ userMeta, countries }) => {
  return (
    <AuthSignUp
      userMeta={userMeta}
      countries={countries}
    />
  )
}
