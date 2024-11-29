import { NextPageWithLayout } from "@/src/pages/_app"
import { NextSeo } from "next-seo"
import { GetServerSideProps } from "next"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"
import { PageConfirmChangeEmail } from "@/src/pages-flat/Auth/PageConfirmChangeEmail"

interface PageProps {
  uid: string
}

const Page: NextPageWithLayout<PageProps> = ({ uid }) => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <PageConfirmChangeEmail uid={uid} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
  const uid = params!.uid as string
  return {
    props: {
      messages: await getNextIntlPhrases(locale, ["header", "footer", "confirmChangeEmail"]),
      uid,
    },
  }
}

export default Page
