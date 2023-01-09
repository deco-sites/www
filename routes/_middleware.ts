import { withLive } from "$live/live.ts";
import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { identify } from "../main.ts";

export const handler = [
  withLive({
    siteId: 448,
    site: "www",
    domains: ["www.deco.cx"],
  }),
  function i18nMiddleware(req: Request, ctx: MiddlewareHandlerContext) {
    identify(req);

    return ctx.next();
  },
];
