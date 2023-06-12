import Head from "next/head";
import type { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo</title>
        <meta
          name="description"
          content="Frontend Mentor | Designo Agency Website Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

Home.getLayout = function (page: ReactElement) {
  // Layout goes here
  return <main>{page}</main>;
};
