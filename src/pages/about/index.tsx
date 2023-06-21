import Head from "next/head";
import type { ReactElement } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import LocationsCtaSection from "@/components/LocationsCtaSection";
import useBreakpoint from "@/hooks/useBreakpoint";

About.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default function About() {
  const { isSm, isMd, isLg } = useBreakpoint();

  function handleHeroImageSrc(): string {
    if (isSm) return "assets/about/mobile/image-about-hero.jpg";
    if (isMd) return "assets/about/tablet/image-about-hero.jpg";

    return "assets/about/desktop/image-about-hero.jpg";
  }

  const heroImageSrc = handleHeroImageSrc();

  function handleWorldClassImageSrc(): string {
    if (isSm) return "assets/about/mobile/image-world-class-talent.jpg";
    if (isMd) return "assets/about/tablet/image-world-class-talent.jpg";
    if (isLg) return "assets/about/desktop/image-world-class-talent.jpg";

    return "assets/about/desktop/image-about-hero.jpg";
  }

  const worldClassSrc = handleWorldClassImageSrc();

  function handleRealDealImageSrc(): string {
    if (isSm) return "assets/about/mobile/image-real-deal.jpg";
    if (isMd) return "assets/about/tablet/image-real-deal.jpg";
    if (isLg) return "assets/about/desktop/image-real-deal.jpg";

    return "assets/about/desktop/image-about-hero.jpg";
  }

  const realDealSrc = handleRealDealImageSrc();

  return (
    <>
      <Head>
        <title>About us - Designo</title>
        <meta
          name="About"
          content="Frontend Mentor | Designo Agency Website Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="align-center max-w-screen flex h-full flex-col gap-28">
        <section className="flex flex-col px-2 md:px-14 lg:flex-row-reverse lg:px-28">
          <div
            className="h-full w-full rounded-t-xl bg-cover bg-no-repeat lg:rounded-l-none lg:rounded-r-xl"
            style={{ backgroundImage: `url(${heroImageSrc})` }}
          >
            <div className="h-[40vh] w-full lg:h-[50vh]" />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 rounded-b-xl bg-peach bg-pattern-hero-about-mobile bg-right-top px-5 py-7 text-center lg:items-start lg:rounded-l-xl lg:rounded-r-none lg:px-16 lg:text-start">
            <p className="text-3xl font-medium tracking-wide text-white">
              About Us
            </p>
            <p className="tracking-wide text-white">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We&apos;ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We&apos;re always looking forward to creating brands,
              products, and digital experiences that connect with our
              clients&apos; audiences.
            </p>
          </div>
        </section>

        <section className="flex flex-col px-2 md:px-14 lg:flex-row-reverse lg:px-28">
          <div className="flex w-full flex-col items-center justify-center gap-4 rounded-t-xl bg-very-light-peach bg-pattern-two-circles bg-left-bottom bg-no-repeat px-5 py-7 text-center lg:items-start lg:rounded-xl lg:px-16 lg:text-start">
            <p className="text-3xl font-medium tracking-wide text-peach">
              World-class talent
            </p>
            <p className="tracking-wide text-black">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p className="tracking-wide text-black">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
          <div
            className="h-full w-full rounded-b-xl bg-cover bg-no-repeat lg:rounded-l-xl lg:rounded-r-none"
            style={{ backgroundImage: `url(${worldClassSrc})` }}
          >
            <div className="h-[40vh] w-full lg:h-[70vh]" />
          </div>
        </section>

        <LocationsCtaSection />

        <section className="flex flex-col px-2 md:px-14 lg:flex-row-reverse lg:px-28">
          <div
            className="h-full w-full rounded-t-xl bg-cover bg-no-repeat lg:rounded-l-none lg:rounded-r-xl"
            style={{ backgroundImage: `url(${realDealSrc})` }}
          >
            <div className="h-[40vh] w-full lg:h-[70vh]" />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 rounded-b-xl bg-very-light-peach bg-pattern-two-circles bg-left-bottom bg-no-repeat px-5 py-7 text-center lg:items-start lg:rounded-l-xl lg:rounded-r-none lg:px-16 lg:text-start">
            <p className="text-3xl font-medium tracking-wide text-peach">
              The real deal
            </p>
            <p className="tracking-wide text-black">
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success
            </p>
            <p className="tracking-wide text-black">
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
