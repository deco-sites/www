import { MatchFunction } from "$live/types.ts";
import { LiveState } from "$live/types.ts";

export interface Props {
  siteId: string;
}

const MatchSiteParam: MatchFunction<Props, unknown, LiveState> = (
  _req,
  ctx,
  props,
) => {
  return { isMatch: ctx.params.site === props.siteId, duration: "request" };
};

export default MatchSiteParam;
