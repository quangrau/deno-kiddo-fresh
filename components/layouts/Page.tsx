/** @jsx h */
import { h } from "preact";
import type { ComponentChildren } from "preact";
import { tw } from "@twind";
import PageFooter from "./PageFooter.tsx";

type PageProps = {
  children: ComponentChildren;
};

export const Page = ({ children }: PageProps) => {
  return (
    <main class={tw`h-full min-h-screen bg-lime-50 flex flex-col`}>
      <div class={tw`mx-auto max-w-screen-md p-4 md:p-0 flex-grow`}>
        {children}
      </div>
      <PageFooter />
    </main>
  );
};

export default Page;
