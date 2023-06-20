import useBreakpoint from "@/hooks/useBreakpoint";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  cta: string;
  srcMobile: string;
  srcTablet: string;
  srcDesktop: string;
  alt: string;
  href: string;
}

export default function ImageBackgroundLink({
  title,
  cta,
  srcMobile,
  srcTablet,
  srcDesktop,
  alt,
  href,
}: Props) {
  const { isSm, isMd } = useBreakpoint();

  function handleImageSrc(): string {
    if (isSm) return srcMobile;
    if (isMd) return srcTablet;
    return srcDesktop ?? "";
  }

  const src = handleImageSrc();

  return (
    <Link
      href={href}
      className="group relative flex h-full w-full flex-col items-center justify-center rounded-lg"
      aria-label={`Navigate to ${title} page`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="h-full w-full rounded-lg object-cover object-center"
      />
      <div className="z-10 rounded-lg py-16">
        <div className="flex flex-col items-center justify-center gap-4 p-8 text-white">
          <h3 className="text-3xl uppercase tracking-wide">{title}</h3>
          <p className="text-sm uppercase tracking-widest">{cta}</p>
        </div>
      </div>
      {/* Backdrop */}
      <div className="absolute h-full w-full rounded-lg bg-black opacity-70 group-hover:bg-peach" />
    </Link>
  );
}
