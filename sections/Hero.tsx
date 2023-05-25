import BottomTriangle from "$deco/components/ui/BottomTriangle.tsx";
import HeroArt from "$deco/components/ui/HeroArt.tsx";

export interface Props {
  title: string;
  titleHighlight: string;
  text1: string;
  text2: string;
  scheduleLabel: string;
}

export default function Hero({
  title,
  titleHighlight,
  text1,
  text2,
  scheduleLabel,
}: Props) {
  return (
    <div class="bg-primary-light relative overflow-hidden -mt-4">
      <section class="container mx-auto px-4 pt-16 pb-40 lg:pb-40 text-primary-dark">
        <h1 class="font-bold text-[44px] md:text-8xl lg:text-[5.5rem] xl:text-8xl leading-[44px] md:leading-[96px] w-full mb-4 sm:mb-8 tracking-tighter">
          {title}
          <span class="block font-bold text-[44px] md:text-8xl lg:text-[5.5rem] xl:text-8xl text-primary tracking-tighter">
            {titleHighlight}
          </span>
        </h1>
        <h2 class="z-20 lg:z-0 text-xl md:text-2xl font-[black] w-full xl:w-8/12 mb-4">
          <span>
            {text1}
            <br />
            {text2}
          </span>
        </h2>
        <div class="flex gap-4 pt-9 md:pt-12">
          <a
            class="z-10 lg:z-0 text-primary-light text-xl font-light bg-secondary-dark py-2.5 px-7 rounded-xl hover:shadow-lg leading-6"
            href="#scheduleDemo"
          >
            {scheduleLabel}
          </a>
        </div>
        <div class="relative max-w-[1536px] z-0 bottom-[20%]">
          <HeroArt />
        </div>
      </section>
      <BottomTriangle class="bg-primary-dark" />
    </div>
  );
}
