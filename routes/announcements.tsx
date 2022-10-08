/** @jsx h */
import { Handlers, PageProps } from "$fresh/server.ts";
import { h } from "preact";
import { tw } from "@twind";
import {
  AnnouncementCard,
  Page,
  PageHeader,
  PageMeta,
} from "../components/index.ts";
import type { IAnnouncement } from "../utils/types.ts";

export const handler: Handlers<{
  announcements: Array<IAnnouncement>;
  page: string;
}> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const page = url.searchParams.get("page") || "1";
    const result = await fetch(
      `https://kiddo-api.deno.dev/v1/announcements?page=${page}`
    ).then((res) => res.json());

    console.log;

    return ctx.render({ announcements: result.data, page });
  },
};

export default function announcements(
  props: PageProps<{
    announcements: Array<IAnnouncement>;
    page: string;
  }>
) {
  const { announcements, page } = props.data;

  return (
    <Page>
      <PageMeta
        title="announcements"
        description="Check out what your child has been doing at our center!"
        url={`https://kiddo-fresh.deno.dev/announcements?page=${page}`}
      />
      <PageHeader title="Announcements" />
      <section class={tw`mt-10`}>
        <ul class={tw`grid grid-cols-1 gap-y-10 space-y-10 `}>
          {announcements.map((announcement) => (
            <li key={announcement.id}>
              <AnnouncementCard announcement={announcement} />
            </li>
          ))}
        </ul>
      </section>
      <section class={tw`my-10 grid grid-cols-2 gap-4`}>
        <a
          class={tw`block text-left bg-lime-200 px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-2xl hover:bg-lime-300`}
          href={`/announcements?page=${+page - 1}`}
        >
          <span class="text-sm text-gray-600">← Previous</span>
        </a>
        <a
          class={tw`block text-right bg-lime-200 px-8 py-4 rounded-full hover:shadow-2xl hover:bg-lime-300`}
          href={`/announcements?page=${+page + 1}`}
        >
          <span class="text-sm text-gray-600">Next →</span>
        </a>
      </section>
    </Page>
  );
}
