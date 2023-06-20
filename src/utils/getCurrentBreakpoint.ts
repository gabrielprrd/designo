// @ts-nocheck
// There is a bug with types for tailwind config, so it is necessary for now to disable ts rules at this file
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const screens = fullConfig.theme.screens as { [key: string]: string };

export const getBreakpointValue = (value: string): number =>
  parseInt(screens[value].replace("px", ""), 10);

export const getCurrentBreakpoint = (): string => {
  let currentBreakpoint = "sm";
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys(screens)) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (
      breakpointValue > biggestBreakpointValue &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  }
  return currentBreakpoint;
};
