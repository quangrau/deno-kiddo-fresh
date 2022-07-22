/** @jsx h */
import { h } from "preact";
import type { ComponentChildren } from "preact";
import { tw } from "@twind";

type HeadlineProps = {
  children: ComponentChildren;
  level?: 1 | 2 | 3 | 4 | 5;
};

export const Headline = ({ level = 1, children }: HeadlineProps) => {
  return (
    <h3
      class={tw(
        `font-extrabold text-${
          6 - level
        }xl sm:tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-500`
      )}
    >
      {children}
    </h3>
  );
};

export default Headline;
