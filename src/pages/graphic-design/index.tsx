import Head from "next/head";
import type { ReactElement } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import HeroSection from "@/components/HeroSection";
import ImageBackgroundLink from "@/components/ImageBackgroundLink";
import { PROJECTS } from "@/constants/projects";
import CardLink from "@/components/CardLink";

GraphicDesign.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

const projects = PROJECTS.filter(
  (p) => p.title === "App Design" || p.title === "Web Design"
);

const PORTFOLIO = [
  {
    title: "Tim Brown",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
    href: "/",
    src: "/assets/graphic-design/desktop/image-change.jpg",
  },
  {
    title: "Boxed Water",
    description: "A simple packaging concept made for Boxed Water",
    href: "/",
    src: "/assets/graphic-design/desktop/image-boxed-water.jpg",
  },
  {
    title: "Science!",
    description:
      "Get to meet your favorite internet superstar with the faceit apps",
    href: "/",
    src: "/assets/graphic-design/desktop/image-science.jpg",
  },
];

export default function GraphicDesign() {
  return (
    <>
      <Head>
        <title>Graphic Design - Designo</title>
        <meta
          name="description"
          content="Frontend Mentor | Designo Agency Website Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="align-center max-w-screen flex h-full flex-col gap-28">
        <HeroSection
          title="Graphic Design"
          subtitle="We deliver eye-catching branding materials that are 
          tailored to meet your business objectives."
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

        <section className="flex flex-row-reverse flex-col flex-col-reverse gap-5 px-2 md:px-14 lg:flex-row lg:px-28">
          {projects.map((project, index) => (
            <ImageBackgroundLink
              key={project.title || `keyForImgBgLinkAtGraphicDesign_${index}`}
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
