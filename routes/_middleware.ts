import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 448,
  site: "www",
  domains: ["deco-sites-www.deno.dev"],
});
