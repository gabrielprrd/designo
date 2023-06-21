import Head from "next/head";
import type { ReactElement } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import HeroSection from "@/components/HeroSection";
import ImageBackgroundLink from "@/components/ImageBackgroundLink";
import { PROJECTS } from "@/constants/projects";
import CardLink from "@/components/CardLink";

WebDesign.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

const projects = PROJECTS.filter(
  (p) => p.title === "App Design" || p.title === "Graphic Design"
);

const PORTFOLIO = [
  {
    title: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses",
    href: "/",
    src: "/assets/web-design/desktop/image-express.jpg",
  },
  {
    title: "Transfer",
    description:
      "Site for low-cost money transfers and sending money within seconds",
    href: "/",
    src: "/assets/web-design/desktop/image-transfer.jpg",
  },
  {
    title: "Photon",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    href: "/",
    src: "/assets/web-design/desktop/image-photon.jpg",
  },
  {
    title: "Builder",
    description:
      "Connects users with local contractors based on their location",
    href: "/",
    src: "/assets/web-design/desktop/image-builder.jpg",
  },
  {
    title: "Blogr",
    description:
      "Blogr is a platform for creating an online blog or publication",
    href: "/",
    src: "/assets/web-design/desktop/image-blogr.jpg",
  },
  {
    title: "Camp",
    description:
      "Get expert training in coding, data, design, and digital marketing",
    href: "/",
    src: "/assets/web-design/desktop/image-camp.jpg",
  },
];

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
