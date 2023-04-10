import { live } from "$live/live.ts";
import type { Handlers } from "$fresh/server.ts";
import LivePage from "$live/components/LivePage.tsx";
import { LivePageData, LiveState } from "$live/types.ts";

export const handler: Handlers<LivePageData, LiveState> = {
  ...live(),
  GET(req, ctx) {
    const pathname = new URL(req.url).pathname;

    const redirectTo = (url: string) =>
      new Response(`Redirecting to ${url}`, {
        status: 302,
        headers: {
          Location: url,
        },
      });

    switch (pathname) {
      case "/angel":
        return redirectTo("https://forms.gle/i9iK6orcN1YEX69E6");
      case "/deck":
        return redirectTo("https://www.deco.cx/deck.pdf");
      case "/discord":
        return redirectTo("https://discord.gg/9fkbcvR833");
      case "/expert-signup":
        return redirectTo("https://airtable.com/shrpWZHqr4bmuI5OD");
      case "/brand":
        return redirectTo(
          "https://drive.google.com/drive/folders/1fMIVfALCEa3Er2iX0kNF-87IQSWtpSyy?usp=share_link",
        );

      case "/hackathon":
        return redirectTo("https://airtable.com/shrMMkEKoH1I2GLHA");
      case "/ifood":
        return redirectTo("https://airtable.com/shrquWd6sEWZQVdC4");
      case "/demo-pt":
        return redirectTo("https://www.youtube.com/watch?v=I8rsKVVjOVQ");
      case "/deck-video-pt":
        return redirectTo("https://www.youtube.com/watch?v=fz-wueU_D6o");
      case "/politica-privacidade":
        return redirectTo(
          "https://drive.google.com/file/d/15WCSop0_jNfrGn73EqFOr94twJIIrxea/view?usp=sharing",
        );
      case "/termos-de-uso":
        return redirectTo(
          "https://drive.google.com/file/d/1tihCV4Y5zRPXGdpP6prmIvNevUBpWKcu/view?usp=sharing",
        );
      default: {
        const liveGetHandler = live()["GET"]!;

        return liveGetHandler(req, ctx);
      }
    }
  },
};
export default LivePage;
