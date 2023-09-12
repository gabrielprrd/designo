import type { HTMLAttributes } from "react";

export function Field(props: HTMLAttributes<HTMLDivElement>) {
  return <div className="relative flex h-[50px] w-full flex-col" {...props} />;
}
