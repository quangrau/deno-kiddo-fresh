/** @jsx h */

import { Head } from "$fresh/runtime.ts";
import { h, Fragment } from "preact";
import { tw } from "@twind";

export const PageFooter = () => {
  return (
    <Fragment>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .footer-heart a {
            border-bottom: 1px solid #1e3a8a;
            padding-bottom: 0.25em;
            text-decoration: none;
          }

          .footer-heart a:hover {
            color: #16a34a;
            background-position: bottom;
            background-repeat: repeat-x;
            background-size: 20%;
            border-bottom: 0;
            padding-bottom: 0.3em;
            text-decoration: none;
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23453886' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
          }

          .emoji {
            display: inline-block;
            vertical-align: middle;
          }
        `,
          }}
        />
      </Head>
      <footer class={tw`pt-10 pb-4 text-center`}>
        <p class="footer-heart text-sm text-gray-600 font-light">
          {`Made with `}
          <img
            class="emoji"
            alt="heart"
            height="20"
            width="20"
            src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
          />
          {` from `}
          <a
            href="https://quangrau.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daddy!
          </a>
        </p>
      </footer>
    </Fragment>
  );
};

export default PageFooter;
