import type { Handlers } from "$fresh/server.ts";
import getSupabaseClient from "$live/supabase.ts";

import type { LiveState } from "$live/types.ts";

const DISCORD_WEBHOOK = Deno.env.get("DISCORD_LEADS_WEBHOOK_URL");

export const handler: Handlers<null, LiveState> = {
  POST: async (req) => {
    if (!DISCORD_WEBHOOK) {
      return new Response(null, {
        headers: {
          Location: "/",
        },
        status: 301,
      });
    }

    const formData = Object.fromEntries((await req.formData()).entries());

    await getSupabaseClient().from("form_submission").insert({
      data: formData,
      site_id: 1,
    });

    await fetch(DISCORD_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `Nova submissão de form através do deco.cx

**Nome:** ${formData.userName}
**Email:** ${formData.userEmail}
**Cargo:** ${formData.userRole}
**Linkedin:** ${formData.userLinkedin}`,
      }),
    });

    return new Response(null, {
      headers: {
        Location: "/",
      },
      status: 301,
    });
  },
};
