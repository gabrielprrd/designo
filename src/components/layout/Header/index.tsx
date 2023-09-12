import Image from "next/image";
import NavMenuDesktop from "@/components/layout/NavMenuDesktop";
import NavMenuMobile from "@/components/layout/NavMenuMobile";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-8 sm:px-14 lg:px-28">
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
