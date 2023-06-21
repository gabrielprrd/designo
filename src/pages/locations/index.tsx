import Head from "next/head";
import type { ReactElement } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { OFFICES } from "@/constants/offices";
import CardMap from "@/components/CardMap";

Locations.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default function Locations() {
  return (
    <>
      <Head>
        <title>Locations - Designo</title>
        <meta
          name="About"
          content="Frontend Mentor | Designo Agency Website Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen flex h-full flex-col gap-28">
        <section className="flex flex-col gap-5 md:px-14 lg:px-28">
          {OFFICES.map((office, index) => (
            <CardMap
              key={index}
              reversed={!!(index % 2 !== 0)}
              office={office}
            />
          ))}
        </section>
      </div>
    </>
  );
}
