import BottomTriangle from "../ui/BottomTriangle.tsx";
import ContentTitle from "../ui/ContentTitle.tsx";
import TeamSlide from "../../islands/TeamSlide.tsx";
import GeometricShapes from "../ui/GeometricShapes.tsx";
import { t } from "$deco/i18n/runtime.ts";

interface ContentWrapperProps {
  paragraphContent: string;
  class: string;
  contentClass: string;
}

function ContentWrapper(
  {
    paragraphContent,
    class: className = "",
    contentClass: contentClassName = "",
  }: ContentWrapperProps,
) {
  return (
    <div class={`pb-10 lg:pb-16 justify-end ${className}`}>
      <p
        class={`md:text-2xl text-xl text-white text-center text-xl xl:text-2xl xl:text-right xl:w-full flex items-center xl:items-end ml-auto ${contentClassName}`}
      >
        {paragraphContent}
      </p>
    </div>
  );
}

export default function TeamSection() {
  return (
    <div class="w-full bg-radial-dark from-secondary-dark to-[#174B4F] relative overflow-hidden -mt-4">
      <BottomTriangle class="bg-primary" />
      <section
        id="team"
        class="container mx-auto px-4 pt-20 pb-40 max-w-7xl relative"
      >
        <GeometricShapes />

        <div class="flex flex-col-reverse xl:flex-row justify-center items-center w-11/12 md:p-20 xl:gap-7 md:pt-14 lg:p-20 md:w-full m-auto">
          <div
            id="teamImages"
            class="w-full xl:w-1/2 scroll-snap-x"
          >
            <TeamSlide />
          </div>
          <div
            id="teamTexts"
            class="flex flex-col w-full xl:w-[49%] items-center xl:items-end"
          >
            <ContentTitle
              title={t("landing.teamSection.title")}
              titleClass="text-white w-11/12 md:w-[84%] xl:w-8/12 pb-5 md:pb-6 text-[44px] md:text-[64px] md:leading-[77px]  text-center xl:text-right xl:m-0"
              highlight={t("landing.teamSection.highlight")}
              hightlightClass="text-primary"
              titleContinuation=""
            />
            <ContentWrapper
              class="hidden xl:flex"
              paragraphContent={t("landing.teamSection.text1")}
              contentClass=""
            />
            <ContentWrapper
              class="xl:hidden"
              paragraphContent={t("landing.teamSection.text2")}
              contentClass=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
