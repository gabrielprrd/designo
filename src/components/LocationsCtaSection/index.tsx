import IllustrationAustralia from "../../../public/assets/shared/desktop/illustration-australia.svg";
import IllustrationUK from "../../../public/assets/shared/desktop/illustration-united-kingdom.svg";
import IllustrationCanada from "../../../public/assets/shared/desktop/illustration-canada.svg";
import BgPatternSmallCircle from "../../../public/assets/shared/desktop/bg-pattern-small-circle.svg";
import Link from "next/link";

const LOCATIONS = [
  {
    title: "Canada",
    image: <IllustrationCanada />,
  },
  {
    title: "Australia",
    image: <IllustrationAustralia />,
  },
  {
    title: "United Kingdom",
    image: <IllustrationUK />,
  },
];

export default function LocationsCtaSection() {
  return (
    <section className="flex flex-col gap-10 px-2 md:px-14 lg:px-28 xl:flex-row">
      {LOCATIONS.map((l, index) => {
        const degreesToRotate = index * 90;
        return (
          <div
            key={`qualitiesSection_${l.title}_${index}`}
            className="flex w-full flex-col items-center gap-5 text-center"
          >
            <div className="relative">
              {l.image}
              <BgPatternSmallCircle
                className={`rotate-${degreesToRotate} absolute top-0 -z-10 h-full w-full`}
              />
            </div>
            <div className="flex flex-col items-center gap-5">
              <p className="uppercase tracking-widest">{l.title}</p>
              <Link
                href="/locations"
                className="rounded-md bg-peach px-4 py-4 uppercase tracking-wide text-white hover:bg-light-peach sm:px-5 sm:py-3"
              >
                See location
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
