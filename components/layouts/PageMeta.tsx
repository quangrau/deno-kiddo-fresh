/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export type PageMetaProps = {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  locale?: string;
};

export const PageMeta = ({
  title,
  description,
  url,
  type,
  locale,
}: PageMetaProps) => {
  const metaTitle = title ? `Kiddo Fresh | ${title}` : "Kiddo Fresh";
  const metaDescription = description || "Just another hello-world!";
  const metaUrl = url || "https://kiddo-fresh.deno.dev";
  const metaType = type || "website";
  const metaLocale = locale || "en";

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta content={metaDescription} name="description" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="/logo.svg" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={metaType} />
      <meta property="og:locale" content={metaLocale} />
      <meta name="theme-color" content="#f7fee7" />
      <meta name="robots" content="noindex" />
      <meta name="googlebot" content="noindex" />
    </Head>
  );
};

export default PageMeta;
