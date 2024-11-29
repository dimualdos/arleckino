import { NextPageWithLayout } from "@/src/pages/_app"
import { NextSeo } from "next-seo"
import { PageConfirmEmail } from "../../pages-flat/Auth/PageConfirmEmail"
import { GetStaticPropsContext } from "next"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <PageConfirmEmail />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: await getNextIntlPhrases(locale, ["header", "footer", "authorization"]),
    },
  }
}

export default Page
