/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Headline from "./Headline.tsx";
import { IActivity } from "../utils/types.ts";
import { TARGET_URL } from "../utils/const.ts";

interface ActivityCardProps {
  activity: IActivity;
}

export const ActivityCard = ({ activity }: ActivityCardProps) => {
  const { title, description, date, classname, photos } = activity;

  const renderImage = (src: string, index: number) => {
    return (
      <figure key={index}>
        <img
          class={tw`object-cover`}
          loading="lazy"
          src={`${TARGET_URL}${src}`}
          alt={`Image ${index + 1}`}
          width="800"
          height="800"
        />
      </figure>
    );
  };

  const renderVideo = (src: string, index: number) => {
    return (
      <video key="index" width="800" height="800" controls>
        <source
          loading="lazy"
          class={tw`object-cover`}
          src={`${TARGET_URL}${src}`}
        />
      </video>
    );
  };

  return (
    <article
      class={tw`p-4 md:p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl`}
    >
      <Headline level={2}>{title}</Headline>
      <p class={tw`pt-4 text-gray-600 flex gap-4`}>
        <span class={tw`inline-block rounded-lg py-2 px-4 bg-lime-100`}>
          {date}
        </span>
        <span class={tw`inline-block rounded-lg py-2 px-4 bg-lime-100`}>
          {classname}
        </span>
      </p>
      <p class={tw`pt-8 text-lg text-gray-600`}>{description}</p>

      {/* GALLERY  */}
      <section class={tw`mt-10`}>
        <div class={tw`grid grid-cols-1 lg:grid-cols-2 gap-4`}>
          {photos.map((photo, index) => {
            const ext = photo.split(".").pop();
            return ext === "mov"
              ? renderVideo(photo, index)
              : renderImage(photo, index);
          })}
        </div>
      </section>

      {/* STUDENTS */}
    </article>
  );
};

export default ActivityCard;
