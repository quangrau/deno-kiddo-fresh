/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Headline from "./Headline.tsx";
import { IAnnouncement } from "../utils/types.ts";
import { TARGET_URL } from "../utils/const.ts";

interface AnnouncementCardProps {
  announcement: IAnnouncement;
}

export const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  const { title, description, date, files } = announcement;

  const renderFiles = () => {
    if (!files?.length) return null;

    return (
      <section class={tw`mt-4`}>
        <h4 class={tw`text-3xl text-gray-600 font-bold my-4`}>Files:</h4>
        <ul>
          {files.map((file) => (
            <li
              class={tw`text-gray-600 flex items-center gap-1 mb-4 bg-gray-100 p-2 rounded break-all`}
            >
              <span class={tw`h-4 w-4 mr-2 self-start`}>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-5a5 5 0 0 0-4-8H4V4a2 2 0 0 1 2-2h6Zm1.5.5V8a.5.5 0 0 0 .5.5h5.5l-6-6ZM5.75 15.75A.75.75 0 0 0 5 15l-.2.005A4 4 0 0 0 5 23l.102-.007A.75.75 0 0 0 5 21.5l-.164-.005A2.5 2.5 0 0 1 5 16.5l.102-.007a.75.75 0 0 0 .648-.743ZM13 19a4 4 0 0 0-4-4l-.102.007A.75.75 0 0 0 9 16.5l.164.005A2.5 2.5 0 0 1 9 21.5l-.102.007A.75.75 0 0 0 9 23l.2-.005A4 4 0 0 0 13 19Zm-4.25-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007a.75.75 0 0 0-.102-1.493Z"
                    fill="#9ca3af"
                  />
                </svg>
              </span>
              <a
                href={`${TARGET_URL}${file.url}`}
                target="_blank"
                rel="norefer"
                class={tw`text-sm text-blue-600 hover:underline`}
              >
                {file.name || file.url}
              </a>
            </li>
          ))}
        </ul>
      </section>
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
      </p>
      <p class={tw`pt-8 text-lg text-gray-600`}>{description}</p>
      {renderFiles()}
    </article>
  );
};

export default AnnouncementCard;
