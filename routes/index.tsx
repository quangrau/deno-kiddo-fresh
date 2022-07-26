/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import {
  Card,
  Headline,
  Page,
  PageHeader,
  PageMeta,
} from "../components/index.ts";

export default function Home() {
  return (
    <Page>
      <PageMeta />
      <PageHeader title="Kiddo Fresh" />
      <section class={tw`mt-10`}>
        <ul
          class={tw`space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10`}
        >
          <li>
            <Card>
              <a class={tw`block`} href="/announcements">
                <Headline level={3}>Announcements →</Headline>
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
