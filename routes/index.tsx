/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Card, Headline, Page, PageMeta } from "../components/index.ts";

export default function Home() {
  return (
    <Page>
      <PageMeta />
      <header class={tw`py-10 md:py-20 flex flex-col items-center`}>
        <img
          src="/logo.svg"
          class={tw`h-24`}
          alt="the fresh logo: a sliced lemon dripping with juice"
          width="100"
          height="100"
        />
        <h1 class={tw`text-4xl sm:text-6xl font-extrabold text-gray-900`}>
          Kiddo Fresh
        </h1>
      </header>
      <section class={tw`mt-10`}>
        <ul
          class={tw`space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10`}
        >
          <li>
            <Card>
              <a class={tw`block`} href="/annoucements">
                <Headline level={3}>Annoucements →</Headline>
                <p class={tw`pt-4 text-gray-600`}>
                  Be sure to check out important announcements from the center.
                </p>
              </a>
            </Card>
          </li>
          <li>
            <Card>
              <a class={tw`block`} href="/activities">
                <Headline level={3}>Activities →</Headline>
                <p class={tw`pt-4 text-gray-600`}>
                  Check out what your child has been doing at our center!
                </p>
              </a>
            </Card>
          </li>
          <li>
            <Card>
              <a class={tw`block`} href="/documents">
                <Headline level={3}>Documents →</Headline>
                <p class={tw`pt-4 text-gray-600`}>
                  All useful documents can be found here for you to download.
                </p>
              </a>
            </Card>
          </li>
          <li>
            <Card>
              <a class={tw`block`} href="/events">
                <Headline level={3}>Events →</Headline>
                <p class={tw`pt-4 text-gray-600`}>
                  Upcoming events for your child that requires your attention.
                </p>
              </a>
            </Card>
          </li>
        </ul>
      </section>
    </Page>
  );
}
