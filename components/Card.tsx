/** @jsx h */
import { h } from "preact";
import type { ComponentChildren } from "preact";
import { tw } from "@twind";

type CardProps = {
  children: ComponentChildren;
};

export const Card = ({ children }: CardProps) => {
  return (
    <article class={tw`p-4 bg-white rounded-lg shadow-xl hover:shadow-2xl`}>
      {children}
    </article>
  );
};

export default Card;
