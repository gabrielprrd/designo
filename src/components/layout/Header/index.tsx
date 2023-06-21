import Image from "next/image";
import NavMenuDesktop from "@/components/layout/NavMenuDesktop";
import NavMenuMobile from "@/components/layout/NavMenuMobile";
import Link from "next/link";

export default function Header() {
  return (
    <header className="align-center flex h-full w-full justify-between px-8 py-8 sm:px-14 lg:px-28">
      <Link href="/">
        <Image
          src="/assets/shared/desktop/logo-dark.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="Logo"
          className="h-7 w-auto"
        />
      </Link>

      <NavMenuMobile />
      <NavMenuDesktop />
    </header>
  );
}
