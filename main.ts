/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { InnerRenderFunction, RenderContext, start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import { config, setup } from "@twind";
import { virtualSheet } from "twind/sheets";

const sheet = virtualSheet();
sheet.reset();
setup({
  ...config,
  theme: {
    extend: {
      colors: {
        lime: {
          50: "rgb(247 254 231)",
          100: "rgb(236 252 203)",
          200: "rgb(217 249 157)",
          300: "rgb(190 242 100)",
          400: "rgb(163 230 53)",
          500: "rgb(132 204 22)",
        },
      },
    },
  },
  sheet,
});

function render(ctx: RenderContext, render: InnerRenderFunction) {
  const snapshot = ctx.state.get("twind") as unknown[] | null;
  sheet.reset(snapshot || undefined);
  render();
  ctx.styles.splice(0, ctx.styles.length, ...sheet.target);
  const newSnapshot = sheet.reset();
  ctx.state.set("twind", newSnapshot);
}

await start(manifest, { render });
