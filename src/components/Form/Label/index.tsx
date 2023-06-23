import type { LabelHTMLAttributes } from "react";

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={`flex items-center justify-between text-white ${
        className ?? ""
      }`}
      {...props}
    />
  );
}
