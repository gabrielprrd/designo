import { NAV_MENU_LINKS } from "@/constants/navMenuLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black p-7">
      <div className="space-between flex flex-col sm:flex-row">
        <Image
          src="/assets/shared/desktop/logo-light.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="Logo"
          className="h-7 w-auto"
        />
        <div className="align-center hidden gap-5 sm:flex">
          {NAV_MENU_LINKS.map((l) => (
            <Link
              as="a"
              key={"link_nav_" + l.label}
              href={l.href}
              className="uppercase leading-6 tracking-widest text-white no-underline hover:border-b"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <hr></hr>
    </footer>
  );
}
