interface Props {
  title: string;
  subtitle?: string;
}

export default function HeroSection({ title, subtitle }: Props) {
  return (
    <section className="flex h-auto flex-col items-center justify-center bg-peach bg-hero-pattern-home bg-[length:80%_auto] bg-right-top bg-no-repeat px-4 py-20 text-center sm:mx-14 sm:rounded-lg sm:bg-pattern-call-to-action sm:bg-center sm:bg-repeat lg:mx-28 lg:px-12">
      <div className="flex w-auto w-full flex-col items-center justify-center gap-6 text-center sm:w-[70%] lg:w-[45%]">
        <h1 className="text-3xl font-medium text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="text-white">{subtitle}</p>}
      </div>
    </section>
  );
}
