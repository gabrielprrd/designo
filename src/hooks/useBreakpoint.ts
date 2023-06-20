import { getCurrentBreakpoint } from "@/utils/getCurrentBreakpoint";
import { useEffect, useState } from "react";

const BREAKPOINTS = {
  isSm: "sm",
  isMd: "md",
  isLg: "lg",
  isXl: "xl",
  is2xl: "2xl",
};

export default function useBreakpoint() {
  const [isSm, setIsSm] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [isXl, setIsXl] = useState(false);
  const [is2xl, setIs2xl] = useState(false);

  useEffect(() => {
    function handleResize() {
      const breakpoint = getCurrentBreakpoint();
      if (breakpoint === BREAKPOINTS.isSm || undefined) setIsSm(true);
      if (breakpoint === BREAKPOINTS.isMd) setIsMd(true);
      if (breakpoint === BREAKPOINTS.isLg) setIsLg(true);
      if (breakpoint === BREAKPOINTS.isXl) setIsXl(true);
      if (breakpoint === BREAKPOINTS.is2xl) setIs2xl(true);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return { isSm, isMd, isLg, isXl, is2xl };
}
