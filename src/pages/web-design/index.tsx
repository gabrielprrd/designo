import Head from "next/head";
import type { ReactElement } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import HeroSection from "@/components/HeroSection";
import ImageBackgroundLink from "@/components/ImageBackgroundLink";
import { PROJECTS } from "@/constants/projects";
import CardLink from "@/components/CardLink";
import { WEB_DESIGN_PORTFOLIO as PORTFOLIO } from "@/constants/webDesignPortfolio";

WebDesign.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

const projects = PROJECTS.filter(
  (p) => p.title === "App Design" || p.title === "Graphic Design"
);

export default function WebDesign() {
  return (
    <>
      <Head>
        <title>Web Design - Designo</title>
        <meta
          name="description"
          content="Frontend Mentor | Designo Agency Website Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="align-center max-w-screen flex h-full flex-col gap-28">
        <HeroSection
          title="Web Design"
          subtitle="We build websites that serve as powerful marketing tools and bring
              memorable brand experiences."
        />

        <section className="grid h-full grid-cols-1 gap-5 px-2 md:px-14 lg:grid-cols-3 lg:px-28">
          {PORTFOLIO.map((project, index) => (
            <CardLink
              key={`keyForCardLinkAtWebDesign_${index}`}
              href={project.href}
              src={project.src}
              title={project.title}
              description={project.description}
            />
          ))}
        </section>

        <section className="flex flex-col gap-5 px-2 md:px-14 lg:flex-row lg:px-28">
          {projects.map((project, index) => (
            <ImageBackgroundLink
              key={project.title || `keyForImgBgLinkAtWebDesign_${index}`}
              title={project.title || ""}
              cta={project.cta || ""}
              srcMobile={project.srcMobile || ""}
              srcTablet={project.srcTablet || ""}
              srcDesktop={project.srcDesktop || ""}
              alt={project.alt || ""}
              href={project.href || ""}
            />
          ))}
        </section>
      </div>
    </>
  );
}
