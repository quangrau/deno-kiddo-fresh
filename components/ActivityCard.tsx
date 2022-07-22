/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Avatar from "./Avatar.tsx";
import Headline from "./Headline.tsx";
import { IActivity } from "../utils/types.ts";

interface ActivityCardProps {
  activity: IActivity;
}

export const ActivityCard = ({ activity }: ActivityCardProps) => {
  const { title, description, date, photos } = activity;

  return (
    <article
      class={tw`p-4 md:p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl`}
    >
      <Headline level={2}>{title}</Headline>
      <p class={tw`pt-2 text-gray-600`}>{date}</p>
      <p class={tw`pt-8 text-lg text-gray-900`}>{description}</p>

      {/* GALLERY  */}
      <section class={tw`mt-10`}>
        <div class={tw`grid grid-cols-1 gap-4`}>
          {photos.map((photo, index) => {
            return (
              <figure key={index} class={tw``}>
                <img
                  class={tw`object-cover`}
                  loading="lazy"
                  src={`https://app.kinderconnect.sg${photo}`}
                  alt={`Image ${index + 1}`}
                  width="800"
                  height="800"
                />
              </figure>
            );
          })}
        </div>
      </section>

      {/* STUDENTS */}
    </article>
  );
};

export default ActivityCard;
