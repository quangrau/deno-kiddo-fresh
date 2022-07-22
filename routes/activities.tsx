/** @jsx h */
import { Handlers, PageProps } from "$fresh/server.ts";
import { h } from "preact";
import { tw } from "@twind";
import {
  ActivityCard,
  Page,
  PageHeader,
  PageMeta,
} from "../components/index.ts";
import type { IActivity } from "../utils/types.ts";

export const handler: Handlers<{
  activities: Array<IActivity>;
  page: string;
}> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const page = url.searchParams.get("page") || "1";
    const result = await fetch(
      `https://kiddo-api.deno.dev/v1/activities?page=${page}`
    ).then((res) => res.json());

    return ctx.render({ activities: result.data, page });
  },
};

export default function Activities(
  props: PageProps<{
    activities: Array<IActivity>;
    page: string;
  }>
) {
  const { activities, page } = props.data;
  console.log({ page });

  return (
    <Page>
      <PageMeta
        title="Activities"
        description="Check out what your child has been doing at our center!"
        url={`https://kiddo-fresh.deno.dev/activities?page=${page}`}
      />
      <PageHeader title="Activities" />
      <section class={tw`mt-10`}>
        <ul
          class={tw`space-y-10 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10`}
        >
          {activities.map((activity) => (
            <li key={activity.id}>
              <ActivityCard activity={activity} />
            </li>
          ))}
        </ul>
      </section>
      <section class={tw`my-10 grid grid-cols-2 gap-4`}>
        <a
          class={tw`block text-left bg-lime-200 px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-2xl hover:bg-lime-300`}
          href={`/activities?page=${+page - 1}`}
        >
          <span class="text-sm text-gray-600">← Previous</span>
        </a>
        <a
          class={tw`block text-right bg-lime-200 px-8 py-4 rounded-full hover:shadow-2xl hover:bg-lime-300`}
          href={`/activities?page=${+page + 1}`}
        >
          <span class="text-sm text-gray-600">Next →</span>
        </a>
      </section>
    </Page>
  );
}
