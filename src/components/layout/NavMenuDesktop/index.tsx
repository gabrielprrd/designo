import { NAV_MENU_LINKS } from "@/constants/navMenuLinks";
import Link from "next/link";

export default function NavMenuDesktop() {
  return (
    <nav>
      <ul className="align-center hidden gap-5 sm:flex">
        {NAV_MENU_LINKS.map((l) => (
          <li key={crypto.randomUUID()}>
            <Link
              href={l.href}
              className="uppercase leading-6 tracking-widest no-underline hover:border-b"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
