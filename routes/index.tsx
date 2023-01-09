import { Handlers, PageProps } from "$fresh/server.ts";
// import Layout from "../components/Layout.tsx";
// import Header from "../components/Header.tsx";
import HeadComponent from "../components/Head.tsx";
// import Hero from "../components/home/Hero.tsx";
// import Platform from "../components/home/Platform.tsx";
// import Performance from "../components/home/Performance.tsx";
// import Architecture from "$start/components/home/Architecture.tsx";
// import Newsletter from "../components/home/Newsletter.tsx";
// import Footer from "../components/home/Footer.tsx";
// import Edit from "../components/home/Edit.tsx";
import getSupabaseClient from "$live/supabase.ts";
// import TeamSection from "../components/home/TeamSection.tsx";
import type { LiveState } from "$live/types.ts";
import { t } from "$deco/i18n/runtime.ts";

export const handler: Handlers<null, LiveState> = {
  POST: async (req) => {
    const formData = Object.fromEntries(
      (await req.formData()).entries(),
    );

    await getSupabaseClient().from("form_submission")
      .insert({
        data: formData,
        site_id: 1,
      });

    await fetch(
      "https://discord.com/api/webhooks/1038837540242849862/ZqjVC6IVHjVd_vo2uZ1Q4t2_IvjnxaAHoAYhNydhEpXjop_rJg7Tzj7ul5ukozBZ2FFO",
      {
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
      },
    );

    return new Response(null, {
      headers: {
        "Location": "/",
      },
      status: 301,
    });
  },
};

export default function Home({ url }: PageProps) {
  return (
    <>
      <HeadComponent url={url} />
      {/* <Header /> */}
      {
        /* <Hero
        title={
        }
        subtitle={
          <>
            <span>
              {t("admin.hero.text1")}
              <br />
              {t("admin.hero.text2")}
            </span>
          </>
        }
      /> */
      }
      {/* <Platform /> */}
      {/* <Edit /> */}
      {/* <Performance /> */}
      {/* <Architecture /> */}
      {/* <TeamSection /> */}
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}
