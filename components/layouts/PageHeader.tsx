/** @jsx h */
import { h } from "preact";
import type { ComponentChildren } from "preact";
import { tw } from "@twind";

type PageHeaderProps = {
  title: string;
  children?: ComponentChildren;
};

export const PageHeader = ({ title, children }: PageHeaderProps) => {
  return (
    <header class={tw`py-10 md:py-20 flex flex-col items-center`}>
      <a href="/" alt="Go to home page" class={tw`hover:cursor-pointer`}>
        <img
          src="/logo.svg"
          class={tw`h-24`}
          alt="the fresh logo: a sliced lemon dripping with juice"
          width="100"
          height="100"
        />
      </a>
      <h1 class={tw`text-4xl sm:text-6xl font-extrabold text-gray-900`}>
        {title}
      </h1>
      {children}
    </header>
  );
};

export default PageHeader;
