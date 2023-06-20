import { NAV_MENU_LINKS } from "@/constants/navMenuLinks";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import IconFacebook from "../../../../public/assets/shared/desktop/icon-facebook.svg";
import IconInstagram from "../../../../public/assets/shared/desktop/icon-instagram.svg";
import IconPinterest from "../../../../public/assets/shared/desktop/icon-pinterest.svg";
import IconTwitter from "../../../../public/assets/shared/desktop/icon-twitter.svg";
import IconYoutube from "../../../../public/assets/shared/desktop/icon-youtube.svg";

const SOCIAL_MEDIA = [
  {
    alt: "Facebook",
    icon: <IconFacebook />,
    href: "/",
  },
  {
    alt: "Youtube",
    icon: <IconYoutube />,
    href: "/",
  },
  {
    alt: "Twitter",
    icon: <IconTwitter />,
    href: "/",
  },
  {
    alt: "Pinterest",
    icon: <IconPinterest />,
    href: "/",
  },
  {
    alt: "Instagram",
    icon: <IconInstagram />,
    href: "/",
  },
];

interface Props {
  ctaCard?: ReactElement;
}

export default function Footer({ ctaCard }: Props) {
  return (
    <div
      className={`${
        ctaCard ? "-mt-16 md:-mt-4" : ""
      } flex h-auto w-full flex-col items-center gap-4`}
    >
      {ctaCard}
      <footer
        className={`flex h-full w-screen flex-col items-center gap-4 bg-black px-20 pb-20 ${
          ctaCard ? "pt-64 sm:pt-48" : "pt-20"
        }  text-center text-white sm:text-start md:gap-8`}
      >
        <div className="flex w-full flex-col items-center justify-between gap-4 border-b-light-grey pb-8 sm:flex-row sm:border-b-[.1px]">
          <Image
            src="/assets/shared/desktop/logo-light.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Logo"
            className="h-7 w-auto"
          />
          <div className="align-center flex flex-col gap-5 sm:flex-row">
            {NAV_MENU_LINKS.map((l) => (
              <Link
                key={"link_nav_" + l.label}
                href={l.href}
                className="uppercase leading-6 tracking-widest no-underline"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-8 text-light-grey sm:flex-row sm:items-stretch sm:gap-0">
          <div>
            <p className="font-bold text-light-grey">Designo Central Office</p>
            <p className="font-normal">3886 Wellington Street</p>
            <p className="font-normal">Toronto, Ontario M9C 3J5</p>
          </div>
          <div>
            <p className="font-bold">Contact Us (Central Office)</p>
            <p className="font-bold">P : +1 253-863-8967</p>
            <p className="font-bold">M : contact@designo.co</p>
          </div>
          <div className="flex items-center gap-5 text-sm sm:items-end">
            {SOCIAL_MEDIA.map((s, index) => (
              <Link key={index} href={s.href}>
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
