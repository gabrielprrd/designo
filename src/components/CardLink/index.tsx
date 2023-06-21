interface Props {
  href: string;
  src: string;
  title: string;
  description: string;
  key?: string;
}

export default function CardLink({ href, src, title, description }: Props) {
  return (
    <a href={href} className="group flex flex-col sm:flex-row lg:flex-col">
      <div
        className="h-full w-full rounded-t-xl bg-cover bg-center bg-no-repeat sm:rounded-b-xl sm:rounded-r-none md:rounded-r-none md:rounded-t-xl lg:rounded-b-none lg:rounded-t-xl"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="h-[40vh] w-full" />
      </div>
      <div className="d flex h-full flex-col items-center justify-center gap-4 rounded-b-xl bg-very-light-peach px-5 py-7 text-center transition-all duration-200 ease-in group-hover:bg-peach sm:rounded-l-none md:rounded-b-xl md:rounded-l-none md:rounded-r-xl lg:rounded-b-xl lg:rounded-t-none">
        <p className="uppercase tracking-widest text-peach group-hover:text-white">
          {title}
        </p>
        <p className="normal-case tracking-wide text-black group-hover:text-white">
          {description}
        </p>
      </div>
    </a>
  );
}
