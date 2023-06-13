import Head from "next/head";
import type { ReactElement } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";

Home.getLayout = function (page: ReactElement) {
  return (
    <DefaultLayout>
      <div className="px-2 sm:px-28">{page}</div>
    </DefaultLayout>
  );
};
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

      <div className="w=full w-full">
        <h1>SAMPLE CONTENT HERE</h1>
      </div>
    </>
  );
}
