import Image from "next/image";
import NavMenuDesktop from "@/components/layout/NavMenuDesktop";
import NavMenuMobile from "@/components/layout/NavMenuMobile";

export default function Header() {
  return (
    <header className="align-center flex h-full w-full justify-between px-28 py-8">
      <Image
        src="/assets/shared/desktop/logo-dark.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="Logo"
        className="h-7 w-auto"
      />
      <NavMenuMobile />
      <NavMenuDesktop />
    </header>
  );
}
