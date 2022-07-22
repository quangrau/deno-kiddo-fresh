/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export type PageMetaProps = {
  title?: string;
  description?: string;
};

export const PageMeta = ({
  title = "Kiddo Fresh",
  description = "Just another hello-world!",
}: PageMetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageMeta;
