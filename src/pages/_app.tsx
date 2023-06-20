import type { AppProps } from "next/app";
import Head from "next/head";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import { Jost } from "next/font/google";
import "@/styles/globals.css";

const jost = Jost({ subsets: ["latin"] });

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${jost.style.fontFamily};
        }
      `}</style>
      <main>{getLayout(<Component {...pageProps} />)}</main>
    </>
  );
}

export default App;
