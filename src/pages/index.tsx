import Head from "next/head";
import type { ReactElement } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Image from "next/image";
import IllustrationPassionate from "../../public/assets/home/desktop/illustration-passionate.svg";
import IllustrationFriendly from "../../public/assets/home/desktop/illustration-friendly.svg";
import IllustrationResourceful from "../../public/assets/home/desktop/illustration-resourceful.svg";
import BgPatternSmallCircle from "../../public/assets/shared/desktop/bg-pattern-small-circle.svg";
import ImageBackgroundLink from "@/components/ImageBackgroundLink";
import { PROJECTS } from "@/constants/projects";

Home.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

const QUALITIES = [
  {
    title: "Passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    image: <IllustrationPassionate />,
  },
  {
    title: "Resourceful",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    image: <IllustrationResourceful />,
  },
  {
    title: "Friendly",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    image: <IllustrationFriendly />,
  },
];

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

      <div className="align-center max-w-screen flex h-full flex-col gap-28">
        {/* Hero Section*/}
        <section className="grid auto-cols-fr grid-cols-1 grid-rows-2 items-center overflow-hidden bg-peach bg-hero-pattern-home bg-right bg-no-repeat sm:mx-14 sm:rounded-lg lg:mx-28 lg:h-screen lg:grid-cols-2 lg:grid-rows-1 lg:flex-row lg:px-12">
          <div className="flex flex-col items-center gap-6 px-6 pb-6 pt-20 text-center sm:gap-8 sm:p-10 lg:items-start lg:text-start">
            <h1 className="text-3xl font-medium text-white sm:text-5xl">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="text-white">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <a
              href="#projects-section"
              className="rounded-md bg-white bg-white px-8 py-5 uppercase tracking-wide text-black hover:bg-light-peach hover:text-white"
            >
              Learn more
            </a>
          </div>
          <div className="relative h-full w-full">
            <Image
              className="sm:-bottom-84 lg: absolute -bottom-64 -left-[500%] -right-[500%] m-auto h-auto max-w-[150%] lg:-bottom-1/3 lg:min-w-[120%]"
              width="500"
              height="500"
              src="/assets/home/desktop/image-hero-phone.png"
              alt="Phone"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects-section"
          className="flex flex-col gap-5 px-2 md:px-14 lg:flex-row lg:px-28"
        >
          <div className="flex w-full">
            <ImageBackgroundLink
              title={PROJECTS[0]?.title || ""}
              cta={PROJECTS[0]?.cta || ""}
              srcMobile={PROJECTS[0]?.srcMobile || ""}
              srcTablet={PROJECTS[0]?.srcTablet || ""}
              srcDesktop={PROJECTS[0]?.srcDesktop || ""}
              alt={PROJECTS[0]?.alt || ""}
              href={PROJECTS[0]?.href || ""}
            />
          </div>
          <div className="flex w-full flex-col gap-5">
            {PROJECTS.filter((p, i) => i > 0).map((p) => (
              <ImageBackgroundLink
                key={p.title}
                title={p.title}
                cta={p.cta}
                srcMobile={p.srcMobile}
                srcTablet={p.srcTablet}
                srcDesktop={p.srcDesktop}
                alt={p.alt}
                href={p.href}
              />
            ))}
          </div>
        </section>

        {/* Qualities Section */}
        <section className="flex flex-col gap-10 px-2 md:px-14 lg:px-28 xl:flex-row">
          {QUALITIES.map((q, index) => {
            const degreesToRotate = index * 90;
            return (
              <div
                key={`qualitiesSection_${q.title}_${index}`}
                className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left xl:flex-col"
              >
                <div className="relative">
                  {q.image}
                  <BgPatternSmallCircle
                    className={`rotate-${degreesToRotate} absolute top-0 -z-10 h-[100%] w-[100%]`}
                  />
                </div>
                <div className="align-start flex flex-col gap-5">
                  <p className="uppercase tracking-widest">{q.title}</p>
                  <p className="font-normal">{q.description}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
