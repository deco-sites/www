/// <reference no-default-lib="true"/>
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import manifest from "./fresh.gen.ts";
import { start } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import partytownPlugin from "partytown/mod.ts";
import stylesPlugin from "$live/plugins/styles.ts";
import { i18n } from "./i18n/i18n.ts";
export const { identify, plugin: i18nPlugin } = i18n();

await start(manifest, {
  plugins: [
    partytownPlugin(),
    stylesPlugin(
      "html{height: 100%;scroll-behavior:smooth;} body{height:100%}",
    ),
    twindPlugin({
      ...twindConfig,
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
    }),
    i18nPlugin,
  ],
});
