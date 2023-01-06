import { h } from "preact";
import BottomTriangle from "../ui/BottomTriangle.tsx";
import HeroArt from "../ui/HeroArt.tsx";
import { t } from "$deco/i18n/runtime.ts";

function CallToAction() {
  return (
    <div class="flex gap-4 pt-9 md:pt-12">
      <a
        class="z-10 lg:z-0 text-primary-light text-xl font-light bg-secondary-dark py-2.5 px-7 rounded-xl hover:shadow-lg leading-6"
        href="#scheduleDemo"
      >
        {t("admin.hero.schedule")}
      </a>
    </div>
  );
}

interface Props {
  title: string | h.JSX.Element;
  subtitle: string | h.JSX.Element;
}

export default function Hero({ subtitle, title }: Props) {
  return (
    <div class="bg-primary-light relative overflow-hidden -mt-4">
      <section class="container mx-auto px-4 pt-16 pb-40 lg:pb-40 text-primary-dark">
        <h1 class="font-bold text-[44px] md:text-8xl lg:text-[5.5rem] xl:text-8xl leading-[44px] md:leading-[96px] w-full mb-4 sm:mb-8 tracking-tighter">
          {title}
        </h1>
        <h2 class="z-20 lg:z-0 text-xl md:text-2xl font-light w-full xl:w-8/12 mb-4">
          {subtitle}
        </h2>
        <CallToAction />
        <div class="relative max-w-[1536px] z-0 bottom-[20%]">
          <HeroArt />
        </div>
      </section>
      <BottomTriangle class="bg-primary-dark" />
    </div>
  );
}
