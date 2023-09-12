import type { Office } from "@/models/office";
import useBreakpoint from "@/hooks/useBreakpoint";
import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("@/components/LocationMap"), {
  ssr: false,
});

interface Props {
  office: Office;
  reversed: boolean;
}
export default function CardMap(props: Props) {
  const { country, officeName, address1, address2, phone, mail, latLong } =
    props.office;

  const { isSm } = useBreakpoint();

  return (
    <div
      className={`${
        props.reversed ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex flex-col sm:gap-5`}
    >
      <div className="h-[40vh] w-full sm:rounded-xl lg:w-1/2">
        <LocationMap
          position={latLong}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: isSm ? "none" : "0.5rem",
            zIndex: 10,
          }}
        />
      </div>

      <div className="flex w-full flex-col items-center gap-5 bg-very-light-peach bg-pattern-two-circles px-5 py-7 text-center sm:items-start sm:rounded-xl sm:p-20 sm:text-start lg:justify-center">
        <p className="text-3xl font-medium tracking-wide text-peach">
          {country}
        </p>
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:gap-20 sm:text-start">
          <div className="text-black">
            <p className="font-bold">{officeName}</p>
            <p>{address1}</p>
            <p>{address2}</p>
          </div>
          <div>
            <p className="font-bold text-black">Contact</p>
            <p>{phone}</p>
            <p>{mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
