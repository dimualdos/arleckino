import dynamic from "next/dynamic"
import { NextIntlClientProvider } from "next-intl"
import type { AppProps } from "next/app"
import { NextPage } from "next"
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import React from "react"
import { useRouter } from "next/router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { DefaultLayout } from "../widgets/Layouts/DefaultLayout"
import { gilroyFont } from "@/src/shared/styles/fonts"
const Toaster = dynamic(import("@/src/shared/ui/sonner").then((m) => m.Toaster))

import "@/src/shared/styles/globals.css"
import { AlertCircleIcon } from "lucide-react"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: any
}

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()
  const PageLayout = Component.Layout ?? DefaultLayout
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // https://github.com/TanStack/query/discussions/1385
            // https://stackoverflow.com/questions/63015103/handling-unauthorized-request-in-react-query
            // https://medium.com/@sourabhbagrecha/how-to-handle-error-401-unauthorized-request-in-react-query-732297f24285
            // https://janithrs.medium.com/handle-401-with-react-query-cleanly-14b4d1ddbe03
            // https://github.com/TanStack/query/discussions/6484
            // https://elazizi.com/posts/react-query-auth-token-refresh/
            // https://stackoverflow.com/questions/73257365/how-do-i-automatically-do-a-refresh-token-once-it-expired-with-react-query-axios
            // https://github.com/yjose/react-query-auth-token-refresh
            // https://www.reddit.com/r/reactjs/comments/1852d2e/react_query_auth_token_refresh_tests/
            // retry: (failureCount, err) => {
            //   if (err.response?.status === 401) {
            //     console.log('do not retry, trigger error: ', err);
            //     return false // do not retry, trigger error
            //   }

            //   // otherwise, restore default
            //   const defaultRetry = new QueryClient().getDefaultOptions().queries?.retry

            //   return Number.isSafeInteger(defaultRetry) ? failureCount < (defaultRetry ?? 0) : false
            // },
            // onError: (err) => {
            //   if (err.response?.status === 401) {
            //     console.log('401: ', err);
            //   }
            // },
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
            refetchInterval: 60 * 1000,
          },
        },
      }),
  )

  return (
    // <FpjsProvider
    //   loadOptions={{
    //     apiKey: process.env.NEXT_PUBLIC_FINGERPRINT_KEY,
    //   }}
    // >
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
      timeZone="Europe/Moscow"
    >
      <style
        jsx
        global
      >
        {`
          :root {
            --gilroy-font: ${gilroyFont.style.fontFamily};
          }
        `}
      </style>
      <QueryClientProvider client={queryClient}>
        <PageLayout>
          <>
            <Component {...pageProps} />
            <Toaster
              toastOptions={{
                unstyled: true,
                closeButton: true,
                className: "toast",
                classNames: {
                  toast: "bg-white rounded-sm py-2 pr-10 pl-9 text-sm shadow-md",
                  closeButton: "!right-1 text-grey *:size-4 !bg-transparent !top-3 !left-[unset] !rounded-none !border-0 !border-none",
                },
              }}
              icons={{
                success: <AlertCircleIcon className="!absolute rotate-180 fill-blue text-white" />,
                info: <AlertCircleIcon className="!absolute rotate-180 fill-blue text-white" />,
                warning: <AlertCircleIcon className="!absolute rotate-180 fill-yellow-400 text-white" />,
                error: <AlertCircleIcon className="!absolute rotate-180 fill-destructive text-destructive-foreground" />,
              }}
              duration={5000}
              position="top-center"
            />
            {process.env.NODE_ENV === "development" && (
              <ReactQueryDevtools
                position="bottom-left"
                initialIsOpen={false}
              />
            )}
          </>
        </PageLayout>
      </QueryClientProvider>
    </NextIntlClientProvider>
    // TODO: Add FpjsProvider
    // </FpjsProvider>
  )
}
