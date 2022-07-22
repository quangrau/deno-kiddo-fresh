/** @jsx h */
import { h } from "preact";
import type { ComponentChildren } from "preact";
import { tw } from "@twind";

type AvatarProps = {
  src?: string | null;
  name?: string;
};

export const Avatar = ({ src, name }: AvatarProps) => {
  return (
    <span
      class={tw`inline-block w-14 h-14 rounded-full overflow-hidden flex items-center justify-center border-2 border-lime-400`}
    >
      {src ? (
        <img
          class={tw`block w-full h-full object-cover`}
          src={`https://app.kinderconnect.sg${src}`}
          alt={name}
        />
      ) : (
        "A"
      )}
    </span>
  );
};

export default Avatar;
