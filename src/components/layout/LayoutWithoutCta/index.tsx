import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export default function LayoutWithoutCta({ children }: Props) {
  return (
    <div className="flex w-screen flex-col">
      <div className="min-h-screen">
        <Header />
        <main className="bg-no-repeat lg:bg-[url('/assets/shared/desktop/bg-pattern-leaf.svg'),_url('/assets/shared/desktop/bg-pattern-leaf.svg')] lg:bg-[position:left_top_10vh,_right_bottom]">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
