import { NAV_MENU_LINKS } from "@/constants/navMenuLinks";
import Link from "next/link";

export default function NavMenuDesktop() {
  return (
    <div className="align-center hidden gap-5 sm:flex">
      {NAV_MENU_LINKS.map((l) => (
        <Link
          as="a"
          key={"link_nav_" + l.label}
          href={l.href}
          className="uppercase leading-6 tracking-widest no-underline hover:border-b"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
