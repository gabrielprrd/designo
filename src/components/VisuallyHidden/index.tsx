import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function VisuallyHidden({ children }: Props) {
  return <div className="visually-hidden">{children}</div>;
}
