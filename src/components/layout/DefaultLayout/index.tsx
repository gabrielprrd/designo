import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <div className="flex w-screen flex-col">
      <div className="min-h-screen">
        <Header />
        <main className="">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
