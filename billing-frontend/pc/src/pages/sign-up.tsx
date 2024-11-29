import { NextPageWithLayout } from "@/src/pages/_app"
import { NextSeo } from "next-seo"
import { apiV1UserCountriesList } from "@/src/gen/clients/axios/apiService/apiV1UserCountriesList"
import { apiV1UserMetaList } from "@/src/gen/clients/axios/apiService/apiV1UserMetaList"
import { UserMeta } from "@/src/gen/models/ts/apiController/ApiV1UserMetaList"
import { GetStaticPropsContext } from "next"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"
import { AuthSignUp } from "@/src/widgets/Auth/ui/AuthSignUp"
import { ApiV1UserCountriesListQueryResponse } from "@/src/gen/models/ts/apiController/ApiV1UserCountriesList"

interface PageProps {
  countries: ApiV1UserCountriesListQueryResponse
  userMeta: UserMeta
  messages: any
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const countries = await apiV1UserCountriesList()
  const userMeta = await apiV1UserMetaList()
  return {
    props: {
      countries: countries.data,
      userMeta: userMeta.data,
      messages: await getNextIntlPhrases(locale, ["header", "footer", "authorization"]),
    },
  }
}

const Page: NextPageWithLayout<PageProps> = ({ countries, userMeta }) => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <AuthSignUp
        userMeta={userMeta}
        countries={countries}
      />
    </>
  )
}

export default Page
