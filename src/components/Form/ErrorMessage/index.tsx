import Image from "next/image";
import { useFormContext } from "react-hook-form";

interface ErrorMessageProps {
  field: string;
  className?: string;
}

export function ErrorMessage({ className, field }: ErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[field];

  if (!fieldError) return null;

  return (
    <span
      className={`absolute right-2 top-1/4 flex gap-2 bg-transparent pl-1 text-sm italic text-white ${
        className ?? ""
      }`}
    >
      <>
        <Image
          src={"/assets/contact/desktop/icon-error.svg"}
          alt="Exclamation mark"
          width="0"
          height="0"
          className="h-full w-auto"
        />
        {fieldError.message}
      </>
    </span>
  );
}
