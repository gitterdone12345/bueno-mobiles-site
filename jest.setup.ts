import "@testing-library/jest-dom";
import React from "react";

// jsdom does not implement window.matchMedia — provide a minimal stub
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Props that framer-motion uses but are not valid HTML attributes
const FRAMER_PROPS = new Set([
  "initial", "animate", "exit", "transition", "variants",
  "whileHover", "whileTap", "whileFocus", "whileInView",
  "drag", "dragConstraints", "dragElastic", "dragMomentum",
  "layout", "layoutId", "onAnimationStart", "onAnimationComplete",
]);

const makeEl = (tag: string) =>
  ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
    const filtered: Record<string, unknown> = {};
    for (const key of Object.keys(props)) {
      if (!FRAMER_PROPS.has(key)) filtered[key] = props[key];
    }
    return React.createElement(tag, filtered, children);
  };

jest.mock("framer-motion", () => ({
  motion: {
    div: makeEl("div"),
    h2: makeEl("h2"),
    li: makeEl("li"),
    ul: makeEl("ul"),
    section: makeEl("section"),
    p: makeEl("p"),
    span: makeEl("span"),
    a: makeEl("a"),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => React.createElement(React.Fragment, null, children),
  useInView: () => true,
}));
