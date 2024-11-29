import { NextPageWithLayout } from "@/src/pages/_app"
import { NextSeo } from "next-seo"
import { GetServerSideProps } from "next"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"
import { PageChangeEmail } from "@/src/pages-flat/Auth/PageChangeEmail"

interface PageProps {
  uid: string
  token: string
}

const Page: NextPageWithLayout<PageProps> = ({ uid, token }) => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <PageChangeEmail
        uid={uid}
        token={token}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
  const uid = params!.uid as string
  const token = params!.token as string
  return {
    props: {
      messages: await getNextIntlPhrases(locale, ["header", "footer", "authorization"]),
      uid,
      token,
    },
  }
}

export default Page
