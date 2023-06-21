import Head from "next/head";
import type { ReactElement } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import HeroSection from "@/components/HeroSection";
import ImageBackgroundLink from "@/components/ImageBackgroundLink";
import { PROJECTS } from "@/constants/projects";
import CardLink from "@/components/CardLink";

AppDesign.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

const projects = PROJECTS.filter(
  (p) => p.title === "Web Design" || p.title === "Graphic Design"
);

const PORTFOLIO = [
  {
    title: "Air filter",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
    href: "/",
    src: "/assets/app-design/desktop/image-airfilter.jpg",
  },
  {
    title: "Eyecam",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
    href: "/",
    src: "/assets/app-design/desktop/image-eyecam.jpg",
  },
  {
    title: "Faceit",
    description:
      "Get to meet your favorite internet superstar with the faceit apps",
    href: "/",
    src: "/assets/app-design/desktop/image-faceit.jpg",
  },
  {
    title: "Todo",
    description: "A todo app that features cloud sync with light and dark mode",
    href: "/",
    src: "/assets/app-design/desktop/image-todo.jpg",
  },
  {
    title: "Loopstudios",
    description: "A VR experience app made for Loopstudios",
    href: "/",
    src: "/assets/app-design/desktop/image-loopstudios.jpg",
  },
];

export default function AppDesign() {
  return (
    <>
      <Head>
        <title>App Design - Designo</title>
        <meta
          name="description"
          content="Frontend Mentor | Designo Agency Website Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="align-center max-w-screen flex h-full flex-col gap-28">
        <HeroSection
          title="App Design"
          subtitle="Our mobile designs bring intuitive digital solutions
          to your customers right at their fingertips."
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
              key={project.title || `keyForImgBgLinkAtAppDesign_${index}`}
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
